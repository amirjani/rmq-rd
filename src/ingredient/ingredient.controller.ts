import { Controller, Get } from '@nestjs/common';
import { IngredientService } from './ingredient.service';

@Controller()
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get('ingredient')
  async findAll() {
    return await this.ingredientService.findAll();
  }
}
