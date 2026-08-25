<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAllTables extends Migration
{
    /**
     * Run the migrations.
     *
     * Guarded with hasTable() because on this project the base schema is
     * normally provisioned by importing olxapi.sql directly (see
     * docker-entrypoint-initdb.d), not by running migrations. These guards
     * make `php artisan migrate` a safe no-op for tables that already exist
     * while still being able to create them from scratch on an empty DB.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('users')) {
            Schema::create('users', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name', 200);
                $table->string('email', 200);
                $table->string('phone', 50)->default('0');
                $table->string('city', 50);
                $table->string('password', 200);
                $table->string('token', 200)->nullable();
            });
        }

        if (!Schema::hasTable('announcements')) {
            Schema::create('announcements', function (Blueprint $table) {
                $table->id();
                $table->integer('id_user');
                $table->string('title');
                $table->integer('category')->default(0);
                $table->text('description');
                $table->string('price');
                $table->string('zipcode', 50);
                $table->string('images');
                $table->dateTime('created_at');
            });
        }

        if (!Schema::hasTable('categories')) {
            Schema::create('categories', function (Blueprint $table) {
                $table->unsignedInteger('id')->primary();
                $table->string('name');
                $table->string('covercategory')->default('default.png');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('announcements');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('users');
    }
}
