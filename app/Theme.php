<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    //
    protected $table="themes";

    public function children(){
      return $this->hasMany('App\Theme', 'parent_id')->with('children');
    }
    public function parent(){
      return $this->hasOne('App\Theme', 'parent_id')->with('parent');
    }
}
