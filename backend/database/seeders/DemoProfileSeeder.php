<?php

namespace Database\Seeders;

use App\Models\Announcement;
use App\Models\AnnouncementImage;
use App\Models\Review;
use App\Models\Sale;
use App\Models\User;
use Illuminate\Database\Seeder;

/**
 * Fills in the profile/trust/gallery fields added by the 2026-08-24
 * migrations with plausible demo data, since olxapi.sql (the base dataset
 * this project seeds from) predates those columns and tables. Safe to run
 * more than once: everything is upserted or cleared-then-reinserted.
 */
class DemoProfileSeeder extends Seeder
{
    public function run()
    {
        $extraPhotos = [
            '428342990660fd8d1b2ca056d3f9226b.jpg',
            '429df0678c211bde20b8f4e5d2937ef4.jpg',
            '7ca9cd07f08bd1f5b91697071a8af501.jpg',
            'c38676827fa175c7d2dddb1a49dc55bf.jpg',
            'f6a18ab7ecc8352aa198db71e96fdf9d.jpg',
        ];

        User::query()->each(function (User $user) use (&$extraPhotos) {
            $user->email_verified_at = $user->email_verified_at ?? now()->subMonths(9);
            $user->phone_verified_at = $user->phone_verified_at ?? now()->subMonths(9);
            // facebook left unverified on purpose, mirroring the real listing
            $user->created_at = $user->created_at ?? now()->subYears(3)->startOfMonth();
            $user->save();

            Review::where('seller_id', $user->id)->delete();
            foreach ([5, 5, 4] as $rating) {
                Review::create([
                    'seller_id' => $user->id,
                    'reviewer_id' => null,
                    'announcement_id' => null,
                    'rating' => $rating,
                    'comment' => 'Negociação tranquila, produto como descrito.',
                ]);
            }

            $announcementIds = Announcement::where('id_user', $user->id)->pluck('id');

            Sale::where('seller_id', $user->id)->delete();
            foreach ($announcementIds->take(3) as $announcementId) {
                Sale::create([
                    'announcement_id' => $announcementId,
                    'seller_id' => $user->id,
                    'buyer_id' => null,
                    'status' => 'completed',
                ]);
            }

            foreach ($announcementIds as $index => $announcementId) {
                $announcement = Announcement::find($announcementId);
                if (!$announcement) {
                    continue;
                }

                AnnouncementImage::where('announcement_id', $announcementId)->delete();

                AnnouncementImage::create([
                    'announcement_id' => $announcementId,
                    'path' => $announcement->images,
                    'sort_order' => 0,
                ]);

                for ($i = 0; $i < 2; $i++) {
                    $photo = $extraPhotos[($index * 2 + $i) % count($extraPhotos)];
                    AnnouncementImage::create([
                        'announcement_id' => $announcementId,
                        'path' => $photo,
                        'sort_order' => $i + 1,
                    ]);
                }
            }
        });
    }
}
