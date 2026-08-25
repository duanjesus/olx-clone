<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $hidden = ['password'];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'phone_verified_at' => 'datetime',
        'facebook_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier() {
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        return [];
    }

    public function reviews() {
        return $this->hasMany(Review::class, 'seller_id');
    }

    public function sales() {
        return $this->hasMany(Sale::class, 'seller_id');
    }

    public function getRatingAttribute() {
        return round((float) $this->reviews()->avg('rating'), 1);
    }

    public function getReviewsCountAttribute() {
        return $this->reviews()->count();
    }

    public function getSalesCompletedAttribute() {
        return $this->sales()->where('status', 'completed')->count();
    }

    public function getSalesCancelledAttribute() {
        return $this->sales()->where('status', 'cancelled')->count();
    }
}
