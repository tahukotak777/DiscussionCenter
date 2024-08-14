<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\DiskusiController;
use App\Http\Controllers\KomentarController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

Route::get("/diskusi", [DiskusiController::class,"index"]);
Route::get("/diskusi/{id?}", [DiskusiController::class,"show"]);
Route::get("/komentar", [KomentarController::class,"index"]);

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});
