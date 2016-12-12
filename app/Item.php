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
    public function countries(){
      return $this->belongsToMany('App\Country', 'item_countries', 'item_id', 'country_id')
        ->withPivot('theme_id');
    }
    public function groups(){
      return $this->belongsToMany('App\Group', 'item_groups', 'item_id', 'group_id')
        ->withPivot('theme_id');
    }
    public function instruments(){
      return $this->belongsToMany('App\Instrument', 'item_instruments', 'item_id', 'instrument_id')
      ->withPivot('theme_id');
    }
}
