<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PrType>
 */
class PrTypeFactory extends Factory
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
            'pr_type' => fake()->unique()->randomElement(['Hoa quả','Thực phẩm khô','Rau hữu cơ',]), 

        ];
    }
}
