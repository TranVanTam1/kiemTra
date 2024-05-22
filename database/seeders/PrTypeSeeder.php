<?php

namespace Database\Seeders;
use App\Models\PrType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PrTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        PrType::factory()
        ->count(3)
        ->create();
    }
}
