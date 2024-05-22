<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('t_food', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('pr_name', length: 100);
            $table->string('pr_price', length: 100);
            $table->string('pr_price_new', length: 100);
            $table->string('pr_detail', length: 10000);
            $table->string('image', length: 100);
            $table->unsignedBigInteger('pr_type_id');
            $table->foreign('pr_type_id')->references('id')->on('pr_types')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('t_food');
    }
};
