<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequisiteClient extends Model
{
    use HasFactory;
    protected $table = 'requisites_clients';

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

}
