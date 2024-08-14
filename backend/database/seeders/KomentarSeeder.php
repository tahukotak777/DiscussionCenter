<?php

namespace Database\Seeders;

use App\Models\komentar;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KomentarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        komentar::factory()->count(10)->create();
    }
}
