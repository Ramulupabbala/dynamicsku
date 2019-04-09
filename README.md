# About
This is a Magento 2 - DynamicSku module created as a composer submodule.


# composer.json sample in the github repo

  {
    "name": "ramulupabbala/dynamicsku",
    "description": "dynamicsku module using composer",
    "require": {
    },
    "type": "magento2-module",
    "version": "1.0.0",
    "extra": {
        "map": [
            [
                "*",
                "Ramulupabbala/dynamicsku"
            ]
        ]
    },
    "authors": [
        {
            "name": "Ramu",
            "role": "Developer"
        }
    ]
}

# Requirements

- Magento Composer Installer: To copy the module contents under app/code/ folder.
In order to install it run the below command on the root directory:

        composer require magento/magento-composer-installer

Add GIT Repository to composer
<pre>
sudo composer config repositories.dynamicsku vcs https://github.com/Ramulupabbala/dynamicsku/
</pre>


- Add the VCS repository: So that composer can find the module. Add the following lines in your composer.json

        "repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/Ramulupabbala/dynamicsku"
        }],

# Installation

- Add the module to composer:

       sudo composer require Ramulupabbala/dynamicsku:dev-master

- Add the new entry in `app/etc/config.php`, under the 'modules' section:

        'Dynamicsku_ConfigurableSkuSwitch' => 1,

- Clear cache


# Version

Updated to version 1.0.0 to achieve a stable version and demonstrate the handling of module updates via composer and tags
Updated to version 1.0.2 to test module update via composer and tags
# dynamicsku
dynamicsku
