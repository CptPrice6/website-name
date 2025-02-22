<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\RandomNumber;

class RandomNumberSeeder extends Seeder
{
    public function run()
    {
        // Insert 10 random numbers into the table
        for ($i = 0; $i < 10; $i++) {
            RandomNumber::create([
                'number' => rand(1, 100)
            ]);
        }
    }
}
