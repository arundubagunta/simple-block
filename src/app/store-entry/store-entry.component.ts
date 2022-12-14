import { Component, OnInit } from '@angular/core';
import { ProdBlock } from '../model/block.model';
import { Store } from '../model/store.model';
import { BlockChainService } from '../service/block-chain.service';

@Component({
  selector: 'app-store-entry',
  templateUrl: './store-entry.component.html',
  styleUrls: ['./store-entry.component.css']
})
export class StoreEntryComponent implements OnInit {

  
  
  constructor(private blockChainService: BlockChainService) { }

  id = '';
  name = '';
  prodCd = '';
  location = '';
  sourceId = '';
  batchNo = '';
  destination = '';
  entryType = '';
  aisleId = '';
  price = 0;
  prodHash = '';
  prodBlocks: ProdBlock[] = [];

  ngOnInit(): void {
    this.prodBlocks = this.blockChainService.prodChain;
  }
  onSubmit() {
    const warehouse = {id: this.id, name: this.name, productCode: this.prodCd, location: this.location, batchNo: this.batchNo, sourceId: this.sourceId, entryType: this.entryType, aisleId: this.aisleId, price: this.price, prodHash: this.prodHash } as Store;
    this.blockChainService.addBlock(warehouse); 
  }

}
