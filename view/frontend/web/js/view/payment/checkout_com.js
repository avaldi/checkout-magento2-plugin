/**
 * Checkout.com Magento 2 Payment module (https://www.checkout.com)
 *
 * Copyright (c) 2017 Checkout.com (https://www.checkout.com)
 * Author: David Fiaty | integration@checkout.com
 *
 * License GNU/GPL V3 https://www.gnu.org/licenses/gpl-3.0.en.html
 */

 define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';

        var paymentMethod = window.checkoutConfig.payment['checkout_com'];
        var paymentMethodApplePay = window.checkoutConfig.payment['checkout_com_apple_pay'];

        if (paymentMethod.isActive) {
            rendererList.push(
                {
                    type: 'checkout_com',
                    component: 'CheckoutCom_Magento2/js/view/payment/method-renderer/' + paymentMethod.integration.type
                }
            );
        }

        if (paymentMethodApplePay.isActive) {
            rendererList.push(
                {
                    type: 'checkout_com_apple_pay',
                    component: 'CheckoutCom_Magento2/js/view/payment/method-renderer/apple-pay'
                }
            );
        }

        return Component.extend({});
    }
);
