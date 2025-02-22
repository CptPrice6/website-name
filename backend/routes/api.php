<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RandomNumberController;

Route::get('/random-number', [RandomNumberController::class, 'getRandomNumber']);