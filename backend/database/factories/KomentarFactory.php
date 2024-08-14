<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Komentar>
 */
class KomentarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "id diskusi"=>fake()->numberBetween(1, 10),
            "komen"=>fake()->paragraph(),
            "author"=>fake()->email()
        ];
    }
}
