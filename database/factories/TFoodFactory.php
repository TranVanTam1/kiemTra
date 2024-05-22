<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TFood>
 */
class TFoodFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'pr_name' => fake()->bothify('?????-#####'),
            'pr_price' => fake()->asciify('user-****'),
            'pr_price_new' => fake()->asciify('user-****'),
            'pr_detail' => fake()->asciify('user-****'),
            //'image' => fake()->slug().'.jpg',
            'image' =>'loai'.rand(1,10).'.jpg',
            'pr_type_id'=>rand(1,3),
            
        ];
    }
}
