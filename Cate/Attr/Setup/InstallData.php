<?php
namespace Cate\Attr\Setup;

use Magento\Framework\Setup\InstallDataInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;
use Magento\Eav\Setup\EavSetup;
use Magento\Eav\Setup\EavSetupFactory;
use Magento\Catalog\Model\Category;
use Magento\Eav\Model\Entity\Attribute\ScopedAttributeInterface;

/**
 * @codeCoverageIgnore
 */
class InstallData implements InstallDataInterface
{
    /**
     * @var EavSetupFactory
     */
    private $eavSetupFactory;

    /**
     *
     * @param EavSetupFactory $eavSetupFactory
     */
    public function __construct(EavSetupFactory $eavSetupFactory)
    {
        $this->eavSetupFactory = $eavSetupFactory;
    }

    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        /** @var EavSetup $eavSetup */
        $eavSetup = $this->eavSetupFactory->create(['setup' => $setup]);
        $eavSetup->addAttribute(
            Category::ENTITY,
            'category_url',
            [
                'type' => 'int',
                'label' => 'Category Url',
                'input' => 'select',
                'source' => 'Cate\Attr\Model\Config\Source\Options',
                'required' => false,
                'sort_order' => 200,
                'global' => ScopedAttributeInterface::SCOPE_STORE,
                'group' => 'General Information',
            ]
        );
    }
}

