<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->increments('id');
            $table->string('document_title');
            $table->string('screen_title')->nullable();
            $table->string('slug');
            $table->string('short_description', 400)->nullable();
            $table->string('url')->nullable();

            $table->integer('source_id');
            $table->integer('category_id');
            $table->integer('type_id');
            $table->integer('language_id');
            $table->integer('file_id')->nullable();

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('items');
    }
}
