const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/front/css/main/app.css',
    'resources/front/css/main/app-dark.css',
    'resources/front/css/shared/iconly.css',
    'resources/front/css/main/custom.css',
], 'public/css/all.css');


mix.js([
    'resources/front/js/jquery.min.js',
    'resources/front/js/bootstrap.js',
    'resources/front/js/app.js',
    'resources/front/js/imask.js',
], 'public/js/all.js');

mix.js([
    'resources/front/js/main.js',
], 'public/js/main.js');


mix.copyDirectory('resources/front/fonts', 'public/fonts');
mix.copyDirectory('resources/front/images', 'public/images');
