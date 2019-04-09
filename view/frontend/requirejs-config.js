
var config = {
    config: {
        mixins: {
            'Magento_ConfigurableProduct/js/configurable': {
                'Dynamicsku_ConfigurableSkuSwitch/js/model/skuswitch': true
            },
			'Magento_Swatches/js/swatch-renderer': {
                'Dynamicsku_ConfigurableSkuSwitch/js/model/swatch-skuswitch': true
            }
        }
    }
};