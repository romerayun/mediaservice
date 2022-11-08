<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'phone',
        'address',
        'email',
        'date_of_birth',
        'website',
    ];

    protected $dates = ['deleted_at'];

    public function lprs()
    {
        return $this->hasMany(LprClient::class);
    }

    public function requisite()
    {
        return $this->hasOne(RequisiteClient::class, 'client_id');
    }

    // Carbon

    public function getDateBirth($date): string {
        return Carbon::parse($date)->format('d.m.Y');
    }
}
