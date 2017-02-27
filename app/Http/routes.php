<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'AngularController@serveApp');

    Route::get('/unsupported-browser', 'AngularController@unsupported');
});

//public API routes
$api->group(['middleware' => ['api']], function ($api) {

    // Authentication Routes...
    $api->post('auth/login', 'Auth\AuthController@login');
    $api->post('auth/register', 'Auth\AuthController@register');

    // Password Reset Routes...
    $api->post('auth/password/email', 'Auth\PasswordResetController@sendResetLinkEmail');
    $api->get('auth/password/verify', 'Auth\PasswordResetController@verify');
    $api->post('auth/password/reset', 'Auth\PasswordResetController@reset');

    $api->get('/items', 'ItemsController@all');
    $api->get('/items/{id}', 'ItemsController@show');
    $api->get('/items/{id}/download', 'ItemsController@download');


    $api->get('/categories', 'OutputcategoriesController@all');
    $api->get('/types', 'TypesController@all');
    $api->get('/types/{id}', 'TypesController@get');
    $api->get('/authors', 'AuthorsController@all');
    $api->get('/themes', 'ThemesController@all');
    $api->get('/themes/{id}', 'ThemesController@get');
    $api->get('/sources', 'SourcesController@all');
    $api->get('/sources/{id}', 'SourcesController@get');
    $api->get('/languages', 'LanguagesController@all');
    $api->get('/groups', 'GroupController@all');
    $api->get('/instruments', 'InstrumentController@all');
    $api->get('/instruments/{id}', 'InstrumentController@get');
    $api->get('/years', 'YearController@all');
    $api->get('/countries', 'CountriesController@all');

    $api->get('/dependencies', 'GlobalController@dependencies');



});

//protected API routes with JWT (must be logged in)
$api->group(['middleware' => ['api', 'api.auth']], function ($api) {
    $api->post('/files', 'FilesController@upload');
    $api->post('/items', 'ItemsController@create');

    $api->put('/items/{id}', 'ItemsController@update');
    $api->delete('/items/{ids}', 'ItemsController@removeBulk');

    $api->post('/categories', 'OutputcategoriesController@create');
    $api->put('/categories/{id}', 'OutputcategoriesController@update');
    $api->delete('/categories/{ids}', 'OutputcategoriesController@removeBulk');

    $api->post('/groups', 'GroupController@create');
    $api->put('/groups/{id}', 'GroupController@update');
    $api->delete('/groups/{ids}', 'GroupController@removeBulk');

    $api->post('/authors', 'AuthorsController@create');
    $api->put('/authors/{id}', 'AuthorsController@update');
    $api->delete('/authors/{ids}', 'AuthorsController@removeBulk');

    $api->post('/languages', 'LanguagesController@create');
    $api->put('/languages/{id}', 'LanguagesController@update');
    $api->delete('/languages/{ids}', 'LanguagesController@removeBulk');

    $api->post('/themes', 'ThemesController@create');
    $api->put('/themes/{id}', 'ThemesController@update');
    $api->delete('/themes/{ids}', 'ThemesController@removeBulk');

    $api->post('/instruments', 'InstrumentController@create');
    $api->put('/instruments/{id}', 'InstrumentController@update');
    $api->delete('/instruments/{ids}', 'InstrumentController@removeBulk');

    $api->post('/sources', 'SourcesController@create');
    $api->put('/sources/{id}', 'SourcesController@update');
    $api->delete('/sources/{ids}', 'SourcesController@removeBulk');

    $api->post('/types', 'TypesController@create');
    $api->put('/types/{id}', 'TypesController@update');
    $api->delete('/types/{ids}', 'TypesController@removeBulk');


});
