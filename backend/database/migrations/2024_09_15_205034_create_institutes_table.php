<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstitutesTable extends Migration
{
    public function up()
    {
        Schema::create('institutes', function (Blueprint $table) {
            $table->id();   
            $table->string('name');
            $table->string('contact_number');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('institutes');
    }
}
