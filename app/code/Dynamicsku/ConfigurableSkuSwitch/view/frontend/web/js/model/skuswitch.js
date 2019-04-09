
define([
    'jquery',
    'mage/utils/wrapper'
], function ($, wrapper) {
    'use strict';
    return function(targetModule){

        var reloadPrice = targetModule.prototype._reloadPrice;
        targetModule.prototype.configurableSku = $('div.product-info-main .sku .value').html();
        targetModule.prototype.configurableName = $('[data-ui-id="page-title-wrapper"]').html();
        targetModule.prototype.configurableDesc = $('[data-role="content"]').find('.description .value').html();
        targetModule.prototype.configurableSplprice = $('.customclassrr').html();

        var reloadPriceWrapper = wrapper.wrap(reloadPrice, function(original){
            
            //do extra stuff
            var simpleSku = this.configurableSku;
            var simpleName = this.configurableName;
            var simpleDesc = this.configurableDesc;
            var simpleSplprice = this.configurableSplprice;


            if(this.simpleProduct){
                simpleSku = this.options.spConfig.skus[this.simpleProduct];
                simpleName = this.options.spConfig.names[this.simpleProduct];
                simpleDesc = this.options.spConfig.sdescription[this.simpleProduct];
                simpleSplprice = this.options.spConfig.splprice[this.simpleProduct];

            }

            $('div.product-info-main .sku .value').html(simpleSku);
            $('[data-ui-id="page-title-wrapper"]').html(simpleName);
            $('[data-role="content"]').find('.description .value').html(simpleDesc);
             if(simpleSplprice == false) {
            $('.customclassrr').hide();

        } else {
            $('.customclassrr').show();
            $('.customclassrr').text("SALE");
        }
            //return original value
            return original();
        });

        targetModule.prototype._reloadPrice = reloadPriceWrapper;
        return targetModule;
    };
});

 