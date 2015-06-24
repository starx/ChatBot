# ChatBot
An application I want to build and launch with Symfony. On hoping to learn it on the process

## Pre-Requirities
* Rubygems
* NPM
* Composer

## Tools Used in this project
* [Capifony](http://capifony.org/)
* [grunt](http://gruntjs.com/getting-started)
* [bower](http://bower.io/#install-bower)

## Intallation Commands

Install Composer Components
```
composer install
```

Install npm Components

It is advised that you configure jspm with your GitHub credentials in order to avoid problems.

```
jspm registry config github
```
After configuing the github credentials, install the packages
```
npm install
```

Now install the packages from using `jspm`
```
jspm install -y
```

Run the `grunt` Command on the root
```
grunt
```

Install Assets
```
php app/console assets:install --symlink
```

Install Avanzu Admin Theme
```
php app/console avanzu:admin:fetch-vendor
php app/console assets:install --symlink
php app/console avanzu:admin:build-assets
```

Configure Capifony
```
capifony .
```
