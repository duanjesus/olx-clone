<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

/**
 * The real site groups related categories together (Autos next to
 * Autopeças, Celulares next to Decoração/Móveis/Eletro, etc.) instead of
 * appending new ones at the end. Since category ids are already
 * referenced by announcements.category, reordering by renumbering ids
 * would mean touching every announcement row -- a sort_order column is
 * the non-destructive way to control display order instead.
 */
class AddSortOrderToCategories extends Migration
{
    public function up()
    {
        if (!Schema::hasColumn('categories', 'sort_order')) {
            Schema::table('categories', function (Blueprint $table) {
                $table->unsignedSmallInteger('sort_order')->default(0)->after('covercategory');
            });
        }

        $order = [
            'Imóveis', 'Autos', 'Autopeças', 'Celulares', 'Eletrônicos',
            'Decoração', 'Móveis', 'Eletro', 'Construção', 'Informática',
            'Músicas e hobbies', 'Esporte e lazer', 'Moda e beleza',
            'Animais', 'Artigos infantis',
        ];

        foreach ($order as $position => $name) {
            DB::table('categories')->where('name', $name)->update(['sort_order' => $position]);
        }
    }

    public function down()
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->dropColumn('sort_order');
        });
    }
}
