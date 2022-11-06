<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'address',
        'email',
        'date_of_birth',
        'website',
    ];


    public function lprs()
    {
        return $this->hasMany(LprClient::class);
    }

    public function requisite()
    {
        return $this->hasOne(RequisiteClient::class, 'client_id');
    }
}
