<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use SoftDeletes;

class Item extends Model
{
    //
    protected $table="items";
    protected $dates = ['deleted_at'];

    public function file(){
      return $this->belongsTo('App\File', 'file_id');
    }
    public function output_category(){
      return $this->belongsTo('App\Outputcategory', 'output_category_id');
    }
    public function language(){
      return $this->belongsTo('App\Language', 'language_id');
    }
    public function source(){
      return $this->belongsTo('App\Source', 'source_id');
    }
    public function authors(){
      return $this->belongsToMany('App\Author', 'item_authors', 'item_id', 'author_id');
    }
    public function themes(){
      return $this->belongsToMany('App\Theme', 'item_themes', 'item_id', 'theme_id');
    }
}
