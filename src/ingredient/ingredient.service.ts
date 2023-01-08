import { Injectable } from '@nestjs/common';
import { IngredientRepository } from './ingredient.repository';

@Injectable()
export class IngredientService {
  constructor(private readonly ingredientRepository: IngredientRepository) {}

  async findAll() {
    return await this.ingredientRepository.findAll();
  }
}
