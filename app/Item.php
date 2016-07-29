<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    //
    protected $table="items";

    public function file(){
      return $this->belongsTo('App\File', 'file_id');
    }
    public function output_category(){
      return $this->belongsTo('App\Outputcategory', 'output_category_id');
    }
    
}
