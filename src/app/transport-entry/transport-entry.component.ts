import { Component, OnInit } from '@angular/core';
import { Transport } from '../model/transport.model';
import { BlockChainService } from '../service/block-chain.service';

@Component({
  selector: 'app-transport-entry',
  templateUrl: './transport-entry.component.html',
  styleUrls: ['./transport-entry.component.css']
})
export class TransportEntryComponent implements OnInit {

  constructor(private blockChainService: BlockChainService) { }

  id = '';
  name = '';
  prodCd = '';
  location = '';
  driverId = '';
  sourceId = '';
  batchNo = '';
  destination = '';
  entryType = '';
  vehicleId = '';

  ngOnInit(): void {
  }

  onSubmit() {
    const transport = {id: this.id, name: this.name, productCode: this.prodCd, location: this.location, driverId: this.driverId, destination: this.destination, batchNo: this.batchNo, sourceId: this.sourceId, entryType: this.entryType, vehicleId: this.vehicleId } as Transport;
    this.blockChainService.addBlock(transport); 
  }

}
