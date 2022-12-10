<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Claim extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'service_id',
        'user_id',
        'client_id',
        'amount',
        'deadline',
        'isInvoice',
        'invoice',
        'period',
        'brif',
        'output',
        'package_id',
        'creator',
        'comment',
    ];

    public function getCreateDate() {
        return Carbon::parse($this->deadline)->format('d.m.Y г.');
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function creatorUser()
    {
        return $this->belongsTo(UserM::class, 'creator');
    }

    public function user()
    {
        return $this->belongsTo(UserM::class, 'user_id');
    }

    public function histories()
    {
        return $this->hasMany(HistoryClaim::class)->orderBy('id', 'desc');
    }

    public function files()
    {
        return $this->hasMany(ClaimFile::class);
    }

    public function package()
    {
        return $this->belongsTo(Package::class)->withTrashed();
    }

    public function getDeadline(): string {
        return Carbon::parse($this->deadline)->format('d.m.Y г.');
    }
}