import { Component, OnInit } from '@angular/core';
import { Farmer } from '../model/farmer.model';
import { BlockChainService } from '../service/block-chain.service';

@Component({
  selector: 'app-farmer-entry',
  templateUrl: './farmer-entry.component.html',
  styleUrls: ['./farmer-entry.component.css']
})
export class FarmerEntryComponent implements OnInit {

  constructor(private blockChainService: BlockChainService) { }

  id = '';
  name = '';
  prodCd = '';
  location = '';
  batchNo = '';
  farmType = 'REGULAR';
  quantity = 0;


  ngOnInit(): void {
  }

  addFarmerEntry() {
    const farmer = {id: this.id, name: this.name, productCode: this.prodCd, location: this.location, farmType: this.farmType, sourceId: this.id, batchNo: this.batchNo, entryType: 'Shippped'} as Farmer;
    this.blockChainService.addBlock(farmer); // first transaction
  }

}
