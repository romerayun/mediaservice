<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class UserM extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use SoftDeletes;

    protected $table = 'users';

    protected $fillable = [
        'name',
        'email',
        'password',
        'surname',
        'patron',
        'phone',
        'photo',
        'role_id',
        'userInvoice',
        'userLeader',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function services()
    {
        return $this->hasMany(Service::class);
    }

    public function histories()
    {
        return $this->hasMany(HistoryClient::class);
    }

    public function historiesClaims()
    {
        return $this->hasMany(HistoryClaim::class);
    }

    public function goals()
    {
        return $this->hasMany(Goal::class);
    }

    public function workClaim()
    {
        return $this->hasMany(Claim::class, 'user_id');
    }

    public function myClaims()
    {
        return $this->hasMany(Claim::class, 'creator');
    }

    public function getFullName() {
        return $this->surname . " " . $this->name . " " . $this->patron;
    }
}
