<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Outputcategory extends Model
{
    //
    protected $table="output_categories";

    public function items(){
      return $this->hasMany('App\Item', 'category_id');
    }
}
