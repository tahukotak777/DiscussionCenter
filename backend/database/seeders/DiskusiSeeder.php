<?php

namespace Database\Seeders;

use App\Models\Diskusi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DiskusiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Diskusi::factory()->count(10)->create();
    }
}
