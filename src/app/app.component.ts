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
    this.blocks = this.blockChainService.chain.slice().reverse();
    this.blockChainService.blocks$.subscribe(blocks => {
      this.blocks = blocks.slice().reverse();
    })
  }

  jsonString(data: any){
    return JSON.stringify(data);
  }
}
