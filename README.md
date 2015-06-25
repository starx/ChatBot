# ChatBot
An application I want to build as a learning process for new Web Technologies. Here is what this project is going to have:

* Symfony 2: Backend Framework
* ReatPHP
* Aurelia: Frontend Framework

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

```
npm install
```
If you run into permission issues, it is better to get this fixed at this stage rather than later. To learn about how to get ownership of npm and its modules follow [this](http://competa.com/blog/2014/12/how-to-run-npm-without-sudo/) article.


Now install the packages for the fronend framework using `jspm`. It is advised that you configure jspm with your GitHub credentials in order to avoid problems.
```
cd web/
jspm registry config github
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
