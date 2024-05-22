<?php

namespace Database\Seeders;
use App\Models\TFood;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TFoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        TFood::factory()
        ->count(10)
        ->create();
    }
}
