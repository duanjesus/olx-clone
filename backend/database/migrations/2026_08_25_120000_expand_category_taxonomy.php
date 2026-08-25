<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

/**
 * The categories seeded from olxapi.sql use broader, merged names
 * ("Autos e peças", "Eletrônicos e celulares", "Para a sua casa") instead
 * of the finer-grained taxonomy the real site uses. This renames the
 * existing rows to their closer real-world equivalent (their cover icons
 * already fit: car -> Autos, bed -> Móveis, etc.) and adds the missing
 * categories as new, empty rows -- same as a marketplace category would
 * look before it has any listings.
 */
class ExpandCategoryTaxonomy extends Migration
{
    public function up()
    {
        $renames = [
            'Autos e peças' => 'Autos',
            'Para a sua casa' => 'Móveis',
            'Eletrônicos e celulares' => 'Eletrônicos',
        ];

        foreach ($renames as $from => $to) {
            DB::table('categories')->where('name', $from)->update(['name' => $to]);
        }

        $newCategories = [
            ['id' => 10, 'name' => 'Autopeças', 'covercategory' => 'autopecas.png'],
            ['id' => 11, 'name' => 'Celulares', 'covercategory' => 'celulares.png'],
            ['id' => 12, 'name' => 'Decoração', 'covercategory' => 'decoracao.png'],
            ['id' => 13, 'name' => 'Eletro', 'covercategory' => 'eletro.png'],
            ['id' => 14, 'name' => 'Construção', 'covercategory' => 'construcao.png'],
            ['id' => 15, 'name' => 'Informática', 'covercategory' => 'informatica.png'],
        ];

        foreach ($newCategories as $category) {
            DB::table('categories')->updateOrInsert(['id' => $category['id']], $category);
        }
    }

    public function down()
    {
        DB::table('categories')->whereIn('id', [10, 11, 12, 13, 14, 15])->delete();

        DB::table('categories')->where('name', 'Autos')->update(['name' => 'Autos e peças']);
        DB::table('categories')->where('name', 'Móveis')->update(['name' => 'Para a sua casa']);
        DB::table('categories')->where('name', 'Eletrônicos')->update(['name' => 'Eletrônicos e celulares']);
    }
}
