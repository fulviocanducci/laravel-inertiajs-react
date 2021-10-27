<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TodoFactory extends Factory
{   
    public function definition()
    {
        return [
            'description' => $this->faker->name(),
            'active' => 1
        ];
    }
}
