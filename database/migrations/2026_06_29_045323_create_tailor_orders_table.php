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
        Schema::create('tailor_orders', function (Blueprint $table) {

            $table->bigIncrements('order_id');

            $table->foreignId('user_id')
                ->references('user_id')
                ->on('users')
                ->restrictOnDelete();

            $table->date('date');
            $table->date('due_date');
            $table->string('garment_type');
            $table->string('garment_category');
            $table->string('material');
            $table->double('cost');
            $table->string('status');
            $table->text('chest')->nullable();
            $table->text('arm_length')->nullable();
            $table->text('shoulder')->nullable();
            $table->text('armscye')->nullable();
            $table->text('neck_size')->nullable();
            $table->text('back_width')->nullable();
            $table->text('waist')->nullable();
            $table->text('front_shoulder_to_waist')->nullable();
            $table->text('hip')->nullable();
            $table->text('waist_to_knee')->nullable();
            $table->text('crotch_depth')->nullable();
            $table->text('body_rise')->nullable();
            $table->text('waist_to_floor')->nullable();
            $table->text('nape_to_waist')->nullable();
            $table->text('bust')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tailor_order');
    }
};
