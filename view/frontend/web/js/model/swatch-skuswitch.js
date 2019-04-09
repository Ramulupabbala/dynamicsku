/*jshint browser:true jquery:true*/
/*global alert*/
define([
    'jquery',
    'mage/utils/wrapper'
], function ($, wrapper) {
    'use strict';
 
    return function(targetModule){

        var updatePrice = targetModule.prototype._UpdatePrice;
        targetModule.prototype.configurableSku = $('div.product-info-main .sku .value').html();
        targetModule.prototype.configurableName = $('[data-ui-id="page-title-wrapper"]').html();
        targetModule.prototype.configurableDesc = $('[data-role="content"]').find('.description .value').html();
        targetModule.prototype.configurableSplprice = $('.customclassrr').html();

        var updatePriceWrapper = wrapper.wrap(updatePrice, function(original){
            //do extra stuff
            var allSelected = true;
            for(var i = 0; i<this.options.jsonConfig.attributes.length;i++){
                if (!$('div.product-info-main .product-options-wrapper .swatch-attribute.' + this.options.jsonConfig.attributes[i].code).attr('option-selected')){
                    allSelected = false;
                }
            }

            var simpleSku = this.configurableSku;
            var simpleName = this.configurableName;
            var simpleDesc = this.configurableDesc;
            var simpleSplprice = this.configurableSplprice;


            if (allSelected){
                var products = this._CalcProducts();
                simpleSku = this.options.jsonConfig.skus[products.slice().shift()];
                simpleName = this.options.jsonConfig.names[products.slice().shift()];
                simpleDesc = this.options.jsonConfig.sdescription[products.slice().shift()];
                simpleSplprice = this.options.jsonConfig.splprice[products.slice().shift()];
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

        targetModule.prototype._UpdatePrice = updatePriceWrapper;
        return targetModule;
    };
}); 

$('body').showMessage({thisMessage: ['Hey! Something bit me!']});

