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
    'resources/front/css/main/select2.min.css',
    'resources/front/css/main/custom.css',
], 'public/css/all.css');

mix.styles([
    'resources/front/extensions/simple-datatables/style.css',
    'resources/front/css/pages/simple-datatables.css',
], 'public/css/datatables.css');


mix.styles([
    'resources/front/css/pages/auth.css',
], 'public/css/auth.css');


mix.combine([
    'resources/front/js/bootstrap.js',
    'resources/front/js/app.js',
    'resources/front/js/imask.js',
], 'public/js/all.js');



mix.combine([
    'resources/front/extensions/simple-datatables/umd/simple-datatables.js',
    'resources/front/js/pages/simple-datatables.js',
], 'public/js/datatables.js');


mix.js([
    'resources/front/js/main.js',
], 'public/js/main.js');


mix.copyDirectory('resources/front/fonts', 'public/fonts');
mix.copyDirectory('resources/front/images', 'public/images');
