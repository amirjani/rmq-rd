import { Injectable } from '@nestjs/common';
import { InjectCollection, InjectDb } from 'nest-mongodb';
import { Collection } from 'mongodb';

@Injectable()
export class IngredientRepository {
  constructor(
    @InjectCollection('Ingredient')
    private readonly ingredientCollection: Collection,
  ) {}

  async findAll() {
    return await this.ingredientCollection
      .find()
      .project({
        name: 1,
        stock: 1,
        unit: 1,
        type: 1,
      })
      .toArray();
  }
}
