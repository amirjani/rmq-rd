import { Module } from '@nestjs/common';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';
import { IngredientRepository } from './ingredient.repository';
import { MongoModule } from 'nest-mongodb';

@Module({
  imports: [MongoModule.forFeature(['Ingredient'])],
  controllers: [IngredientController],
  exports: [IngredientService],
  providers: [IngredientService, IngredientRepository],
})
export class IngredientModule {}
