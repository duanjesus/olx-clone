<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;
    public $timestamps = false;

    // Named galleryImages (not images) because the `images` column already
    // holds the single cover filename used across the existing app; Eloquent
    // attribute access would always prefer that raw column over a same-named
    // relation, so a relation called images() would silently never be usable.
    public function galleryImages()
    {
        return $this->hasMany(AnnouncementImage::class)->orderBy('sort_order');
    }
}
