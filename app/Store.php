<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Store extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',  'code', 'country', 'email', 'phone'
    ];





    public function users()
    {
        return $this->belongsToMany('App\User');
    }



    
}
