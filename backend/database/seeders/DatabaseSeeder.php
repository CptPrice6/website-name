<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\RandomNumberSeeder; // If you have other seeders

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Call the seeder classes to populate the database
        $this->call(RandomNumberSeeder::class); // Example seeder
    }
}
