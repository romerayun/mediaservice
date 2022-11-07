<?php

namespace App\Models;

use Carbon\Carbon;
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
        'client_id'
    ];

    public function getDateBirth($date): string {
        return Carbon::parse($date)->format('d.m.Y');
    }

    public function getComment($comment): string
    {
        if (empty($comment)) return '-';
        else return $comment;
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
