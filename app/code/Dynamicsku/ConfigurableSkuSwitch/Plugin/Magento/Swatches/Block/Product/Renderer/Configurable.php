<?php

namespace Dynamicsku\ConfigurableSkuSwitch\Plugin\Magento\Swatches\Block\Product\Renderer;

class Configurable
{
    public function afterGetJsonConfig(\Magento\Swatches\Block\Product\Renderer\Configurable $subject, $result) {

        $jsonResult = json_decode($result, true);

        $jsonResult['skus'] = [];
        $jsonResult['names'] = [];
        $jsonResult['sdescription'] = [];
        $jsonResult['splprice'] = [];
        $objectManager = \Magento\Framework\App\ObjectManager::getInstance();
        $productFactory=$objectManager->get('Magento\Catalog\Model\ProductFactory');

        foreach ($subject->getAllowProducts() as $simpleProduct) {
        $jsonResult['skus'][$simpleProduct->getId()] = $simpleProduct->getSku();
        $jsonResult['names'][$simpleProduct->getId()] = $simpleProduct->getName();
        $product = $productFactory->create()->load($simpleProduct->getId());
        $jsonResult['sdescription'][$simpleProduct->getId()] =  $product->getData('description');   
        $jsonResult['splprice'][$simpleProduct->getId()] =  $product->getPriceInfo()->getPrice('special_price')->getAmount()->getValue();        
        }

        $result = json_encode($jsonResult);

        return $result;
    }
}