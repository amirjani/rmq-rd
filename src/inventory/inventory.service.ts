import { Injectable } from '@nestjs/common';
import { InventoryRepository } from './inventory.repository';
import { IngredientService } from '../ingredient/ingredient.service';
import { faker } from '@faker-js/faker';
import { ObjectId } from 'mongodb';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class InventoryService {
  constructor(
    private readonly inventoryRepository: InventoryRepository,
    private readonly ingredientService: IngredientService,
    private eventEmitter: EventEmitter2,
  ) {}

  async bulkInsert() {
    const changes = [];
    const ingredients = await this.ingredientService.findAll();

    for await (const ingredient of ingredients) {
      const change = {
        changes: [
          {
            storage: new ObjectId('61a5f18d0d969b35b2d969a1'),
            items: [
              {
                ingredient: new ObjectId(ingredient._id),
                quantity: 1,
              },
            ],
          },
        ],
        operation: 'adjust',
        invoiceNumber: faker.datatype.uuid(),
        operationStatus: 'reconciled',
      };

      changes.push(change);
    }

    return await this.inventoryRepository.bulkInsert(changes);
  }

  async bulkInsertEvent() {
    const ingredients = await this.ingredientService.findAll();

    this.eventEmitter.emit('BulkInsert', { ingredients });
  }

  async bulkInsertEventAsync() {
    const ingredients = await this.ingredientService.findAll();

    this.eventEmitter.emitAsync('BulkInsert', { ingredients });
  }

  async bulkInsertAsync() {
    const changes = [];
    const ingredients = await this.ingredientService.findAll();

    for await (const ingredient of ingredients) {
      const change = {
        changes: [
          {
            storage: new ObjectId('61a5f18d0d969b35b2d969a1'),
            items: [
              {
                ingredient: new ObjectId(ingredient._id),
                quantity: 1,
              },
            ],
          },
        ],
        operation: 'adjust',
        invoiceNumber: faker.datatype.uuid(),
        operationStatus: 'reconciled',
      };

      changes.push(change);
    }

    return this.inventoryRepository.bulkInsert(changes);
  }

  @OnEvent('BulkInsert')
  async eventBulk(payload) {
    const changes = [];

    for await (const ingredient of payload.ingredients) {
      const change = {
        changes: [
          {
            storage: new ObjectId('61a5f18d0d969b35b2d969a1'),
            items: [
              {
                ingredient: new ObjectId(ingredient._id),
                quantity: 1,
              },
            ],
          },
        ],
        operation: 'adjust',
        invoiceNumber: faker.datatype.uuid(),
        operationStatus: 'reconciled',
      };

      changes.push(change);
    }

    return this.inventoryRepository.bulkInsert(changes);
  }
}
