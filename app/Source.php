<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Source extends Model
{
    //
    protected $table="sources";

    public function children(){
      return $this->hasMany('App\Source', 'parent_id')->with('children');
    }
    public function parent(){
      return $this->hasOne('App\Source', 'parent_id')->with('parent');
    }
}
