<?php

namespace App\Http\Controllers;

use App\Models\RandomNumber;

class RandomNumberController extends Controller
{
    public function getRandomNumber()
    {
        $randomNumber = RandomNumber::inRandomOrder()->first();

        if (!$randomNumber) {
            return response()->json(['error' => 'No numbers found in the database'], 404);
        }

        return response()->json(['number' => $randomNumber->number]);
    }
}

