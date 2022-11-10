import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../model/warehouse.model';
import { BlockChainService } from '../service/block-chain.service';

@Component({
  selector: 'app-warehouse-entry',
  templateUrl: './warehouse-entry.component.html',
  styleUrls: ['./warehouse-entry.component.css']
})
export class WarehouseEntryComponent implements OnInit {

  
  constructor(private blockChainService: BlockChainService) { }

  id = '';
  name = '';
  prodCd = '';
  location = '';
  sourceId = '';
  batchNo = '';
  destination = '';
  entryType = '';
  shelfId = '';

  ngOnInit(): void {
  }

  onSubmit() {
    const warehouse = {id: this.id, name: this.name, productCode: this.prodCd, location: this.location, batchNo: this.batchNo, sourceId: this.sourceId, entryType: this.entryType, shelfId: this.shelfId } as Warehouse;
    this.blockChainService.addBlock(warehouse); 
  }

}
