import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { MongoModule } from 'nest-mongodb';

@Module({
  imports: [
    MongoModule.forRoot('mongodb://localhost:27017', 'Coochini'),
    InventoryModule,
    IngredientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
