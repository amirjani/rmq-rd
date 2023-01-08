import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { InventoryRepository } from './inventory.repository';
import { InventoryConsumer } from './inventory.consumer';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService, InventoryRepository, InventoryConsumer],
  exports: [InventoryService],
})
export class InventoryModule {}
