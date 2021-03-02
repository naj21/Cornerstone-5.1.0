import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import CartPage from './cart';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import { createTranslationDictionary } from '../theme/common/utils/translations-utils';
import swal from './global/sweet-alert';
import { bind, get } from 'lodash';
import utils from '@bigcommerce/stencil-utils';
import { showAlertModal } from './global/modal';

export default class Category extends CatalogPage {
    constructor(context) {
        super(context);
        this.validationDictionary = createTranslationDictionary(context);
    }

    onReady() {
        this.$overlay = $('[data-category] .loadingOverlay')
            .hide();
        $('[data-button-type="add-cart"]').on('click', (e) => {
            $(e.currentTarget).next().attr({
                role: 'status',
                'aria-live': 'polite',
            });
        });

        this.bindEvents()

        compareProducts(this.context.urls);

        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        $('a.reset-btn').on('click', () => {
            $('span.reset-message').attr({
                role: 'status',
                'aria-live': 'polite',
            });
        });

        this.ariaNotifyNoProducts();
    }

    ariaNotifyNoProducts() {
        const $noProductsMessage = $('[data-no-products-notification]');
        if ($noProductsMessage.length) {
            $noProductsMessage.focus();
        }
    }

    initFacetedSearch() {
        const {
            price_min_evaluation: onMinPriceError,
            price_max_evaluation: onMaxPriceError,
            price_min_not_entered: minPriceNotEntered,
            price_max_not_entered: maxPriceNotEntered,
            price_invalid_value: onInvalidPrice,
        } = this.validationDictionary;
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('body').triggerHandler('compareReset');

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        }, {
            validationErrorMessages: {
                onMinPriceError,
                onMaxPriceError,
                minPriceNotEntered,
                maxPriceNotEntered,
                onInvalidPrice,
            },
        });
    }

    addAllProductsToCart(event) {
        const $addAllToCartBtn = $('[data-add-all]#form-action-addToCart');
        const originalBtnVal = $addAllToCartBtn.val();
        const waitMessage = $addAllToCartBtn.data('waitMessage');
        const {cartId, categoryProducts} = this.context;
        const successMsg = "Products successfully added to cart";
        const products = categoryProducts.filter(product => !product.has_options);
        const cartQuantity = parseInt($('.cart-quantity').text());

        // Do not do AJAX if browser doesn't support FormData
        if (window.FormData === undefined) {
            return;
        }

        // Prevent default
        event.preventDefault();

        if (!products.length) {
            return swal.fire({
                text: "You have no item without variant in this category. Select a product and pick a variant to add",
                icon: 'info'
            });
        }

        $addAllToCartBtn
            .val(waitMessage)
            .prop('disabled', true);
        this.$overlay.show();

        const errorAction = (error) => {
            const tmp = document.createElement('DIV');
            tmp.innerHTML = error;
            $addAllToCartBtn
                .val(originalBtnVal)
                .prop('disabled', false);
            this.$overlay.hide();
            return showAlertModal(tmp.textContent || tmp.innerText);
        }

        //Recursively add all items to cart
        const addItems = (formData, index) => {
            utils.api.cart.itemAdd(formData, (err, response) => {
                const errorMessage = err || response.error;
                if (errorMessage) {
                    errorAction(errorMessage);
                }

                if (index == products.length-1) {
                    swal.fire({
                        text: successMsg,
                        icon: 'success',
                    }).then(() => {
                        window.location = response.data.cart_item.cart_url || this.context.urls.cart;
                    })
                } else {
                    index++;
                    const formData = new FormData();
                    formData.append('product_id',  products[index].id);
                    addItems(formData, index);
                }
            })
        } 

        // Add items to cart
        if(!cartQuantity) {
            const formData = new FormData();
            formData.append('product_id',  products[0].id);
            addItems(formData, 0)
        } else {
            fetch(`https://ligk183p53.execute-api.us-east-2.amazonaws.com/default/cart/items?cart_id=${cartId}`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        line_items: products.map(product => ({
                            quantity: 1,
                            product_id: product.id,
                            list_price: get(product, 'price.without_tax.value'),
                        }))
                    })
                }
            ).then(() => {
                $addAllToCartBtn
                    .val(originalBtnVal)
                    .prop('disabled', false);
                this.$overlay.hide();

                swal.fire({
                    text: successMsg,
                    icon: 'success',
                }).then(() => {
                    window.location = this.context.urls.cart
                });
            }).catch(err => {
                errorAction(err);
            })
        }

        $addAllToCartBtn.next().attr({
            role: 'status',
            'aria-live': 'polite',
        });
    }

    bindEvents() {
        const addAllProductsToCart = bind(this.addAllProductsToCart, this);

        $('[data-add-all]#form-action-addToCart').on('click', event => {
            swal.fire({
                text: "Only items without variants will be added to cart",
                icon: 'info',
                showCancelButton: true,
            }).then((result) => {
                if (result.value) {
                    addAllProductsToCart(event);
                }
            });
            event.preventDefault();
        });
    }
}
