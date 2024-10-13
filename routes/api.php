<?php

use App\Http\Controllers\API\OrdersController;
use App\Http\Controllers\Api\ProductsController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!

sanctum - passport
|
*/

// not auth requests
Route::middleware('guest')->group(function () {
    // 1) Register
    Route::post('register', [RegisteredUserController::class, 'store']);

    // 2) Login
    Route::put('login', [AuthenticatedSessionController::class, 'store']);

    // 3) Get Products
    Route::get('products', [ProductsController::class, 'GetProducts']);

    // 4) Get Categories
   
   
    Route::get('categories', [ProductsController::class, 'GetCategories']);
    
    
    //admin routes
    Route::get('showorder/{id}', [OrdersController::class, 'show']);
    Route::PUT('updateorder/{id}', [OrdersController::class, 'update']);
    Route::get('getorders', [OrdersController::class, 'Getorder']);
    Route::post('AddUser',[UserController::class,'AddUser']);
    Route::delete('Userdelete/{id}',[UserController::class,'Userdelete']);
    Route::get('GetUser',[UserController::class,'GetUser']);
      //count user proudect 
    Route::get('countorders', [OrdersController::class, 'index']);
    Route::get('countUser',[UserController::class,'countuser']);
    Route::get('countproudect',[ProductsController::class,'countproudect']);
   
    //cate
    // Route::post('categoiriesAdd',[ProductsController::class,'Categoriesstore']) ;
   
    Route::post('produects',[ProductsController::class,'store']) ;
Route::delete('productdelete/{id}',[ProductsController::class,'Productdelete']) ;
Route::PUT('ProductUpdate/{id}',[ProductsController::class,'ProductUpdate']) ;
Route::get('Productshow/{id}',[ProductsController::class,'Productshow']) ;

// Route::post('categoiriesAdd',[ProductsController::class,'Categoriesstore']) ;
   

Route::delete('categoriesdelete/{id}',[ProductsController::class,'Categoriesdelete']) ;

});

Route::group(['middleware' => ['admin']], function () {
  Route::post('categoiriesAdd',[ProductsController::class,'Categoriesstore']) ;


});

// Route::middleware('admin')->group( function () {
//     Route::post('categoiriesAdd',[ProductsController::class,'Categoriesstore']) ;


//   });

// auth requests
Route::middleware('auth:sanctum')->group(function () {
    // 1) Create orders
    Route::post('orders', [OrdersController::class, 'store']);
 // 2) Get User API Requests
    Route::get('user', function (Request $request) {
        return $request->user();
    });

    // 3) Get orders
    Route::get('orders', [OrdersController::class, 'GetOrders']);
});
