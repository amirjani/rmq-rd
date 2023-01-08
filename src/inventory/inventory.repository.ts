import { Injectable } from '@nestjs/common';
import { InjectCollection } from 'nest-mongodb';
import { Collection } from 'mongodb';

@Injectable()
export class InventoryRepository {
  constructor(
    @InjectCollection('Inventory')
    private readonly inventoryCollection: Collection,
  ) {}

  async bulkInsert(inventories: any) {
    return await this.inventoryCollection.insertMany(inventories);
  }

  async bulkInsertAsync(inventories: any) {
    return this.inventoryCollection.insertMany(inventories);
  }
}
