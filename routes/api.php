<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('settings', 'API\SettingController@getPage');


Route::apiResources([
    'user' => 'API\UserController'
]);


Route::apiResources([
    'store' => 'API\StoreController'
]);

Route::apiResources([
    'brand' => 'API\BrandController'
]);

Route::apiResources([
    'box' => 'API\BoxController'
]);

Route::apiResources([
    'unit' => 'API\UnitController'
]);