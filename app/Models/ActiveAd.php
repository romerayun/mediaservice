<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ActiveAd extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'claim_id',
        'start_date',
        'end_date',
        'isRemind',
    ];

    public function claim() {
        return $this->belongsTo(Claim::class);
    }
}
