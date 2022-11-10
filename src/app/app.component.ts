import { Component, OnInit } from '@angular/core';
import { Transport } from './model/transport.model';
import { Farmer } from './model/farmer.model';
import { Store } from './model/store.model';
import { Warehouse } from './model/warehouse.model';
import { BlockChainService } from './service/block-chain.service';
import { Block } from './model/block.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'simple-block';
  blocks: Block[] = [];

  constructor(private blockChainService: BlockChainService) {

  }

  ngOnInit(): void {
    this.blockChainService.blocks$.subscribe(blocks => {
      this.blocks = blocks;
    })
  }

  addTransportEntry(entryType: string) {
    const transport = {id: 't1', name: 'UPS', driverId: 'DL2345', vehicleId: 'V442', destination: 'Dallas, TX', entryType: entryType} as Transport;
    this.blockChainService.addBlock(transport); // first transaction
    this.blocks = this.blockChainService.chain;
  }

  addWarehouseEntry(entryType: string) {
    const warehouse = {id: 'w1', name: 'Amazon Warehouse', location: 'Dallas, TX', entryType: entryType, shelfId: 'SW32'} as Warehouse;
    this.blockChainService.addBlock(warehouse); // first transaction
    this.blocks = this.blockChainService.chain;
  }

  addStoreEntry() {
    const store = {id: 's1', name: 'Walmart', location: 'Dallas, TX', aisleId: 'A24'} as Store;
    this.blockChainService.addBlock(store); // first transaction
    this.blocks = this.blockChainService.chain;
  }

  jsonString(data: any){
    return JSON.stringify(data);
  }
}
