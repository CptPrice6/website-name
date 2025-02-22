<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('random_numbers', function (Blueprint $table) {
            $table->id();
            $table->integer('number'); // Store the random number
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('random_numbers');
    }
};

