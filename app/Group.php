<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    //
    protected $table="groups";

     public function items(){
      return $this->belongsToMany('App\Item', 'item_groups', 'item_id', 'group_id');
    }
}
