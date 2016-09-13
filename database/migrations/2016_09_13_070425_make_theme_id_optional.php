<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MakeThemeIdOptional extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('item_countries', function (Blueprint $table) {
            $table->integer('theme_id')->unsigned()->nullable()->change();
        });
        Schema::table('item_groups', function (Blueprint $table) {
            $table->integer('theme_id')->unsigned()->nullable()->change();
        });
        Schema::table('item_instruments', function (Blueprint $table) {
            $table->integer('theme_id')->unsigned()->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
