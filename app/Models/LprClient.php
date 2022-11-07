<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LprClient extends Model
{
    use HasFactory;
    protected $table = 'lpr_clients';

    protected $fillable = [
        'surname',
        'name',
        'patron',
        'phone',
        'date_of_birth',
        'post',
        'comment',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
