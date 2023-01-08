import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { MongoModule } from 'nest-mongodb';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    MongoModule.forRoot('mongodb://localhost:27017', 'Coochini'),
    EventEmitterModule.forRoot({
      global: true,
    }),
    InventoryModule,
    IngredientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
