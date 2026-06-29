<?php

use App\Http\Controllers\order\OrderController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('app');
});


Route::get('/orders/list', [OrderController::class, 'listOfOrders'])->name('order-list');

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
