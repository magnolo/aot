<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Item extends Model
{
    //
    protected $table="items";
    protected $dates = ['deleted_at'];

    public function file(){
      return $this->belongsTo('App\Itemfile', 'file_id');
    }
    public function category(){
      return $this->belongsTo('App\Outputcategory', 'category_id');
    }
    public function language(){
      return $this->belongsTo('App\Language', 'language_id');
    }
    public function source(){
      return $this->belongsTo('App\Source', 'source_id');
    }
    public function type(){
      return $this->belongsTo('App\Type', 'type_id');
    }
    public function authors(){
      return $this->belongsToMany('App\Author', 'item_authors', 'item_id', 'author_id');
    }
    public function themes(){
      return $this->belongsToMany('App\Theme', 'item_themes', 'item_id', 'theme_id');
    }
    public function years(){
      return $this->belongsToMany('App\Year', 'item_years', 'item_id', 'year_id');
    }
}
