import { Controller, Get } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller()
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get('inventory/awaited')
  async bulkInsert() {
    return await this.inventoryService.bulkInsert();
  }

  @Get('inventory/async')
  async bulkInsertAsync() {
    return await this.inventoryService.bulkInsertAsync();
  }

  @Get('inventory/event')
  async bulkInsertEvent() {
    return await this.inventoryService.bulkInsertEvent();
  }

  @Get('inventory/event-async')
  async bulkInsertEventAsync() {
    return await this.inventoryService.bulkInsertEventAsync();
  }
}
