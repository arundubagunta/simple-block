import { Injectable } from "@angular/core";
import { Block, ProdBlock } from "../model/block.model";
import { Transport } from "../model/transport.model";
import { Farmer } from "../model/farmer.model";
import { Store } from "../model/store.model";
import { Warehouse } from "../model/warehouse.model";
import { Observable, of, Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class BlockChainService { // the blochain structure or class
    prodChain : ProdBlock[];
    chain: Block[] = [];
    blocks$: Subject<Block[]> = new Subject<Block[]>();
    constructor(){ // create a constractor. 
        if(sessionStorage.getItem("chain")) {
            this.prodChain = JSON.parse(sessionStorage.getItem("prodChain") as string);
            this.chain = JSON.parse(sessionStorage.getItem("chain") as string);
            this.blocks$.next(this.chain);
        } else {
            this.chain = []; // a blockchain is a series of blocks, so we need an array []
            this.prodChain = [];
        }
       
    }

    addBlock(data: Farmer | Warehouse | Store | Transport){ // create a method that will take the entire block and add it to the blockchain
        let prodBlock = {} as ProdBlock;
        const timestamp =  Date.now();
        if (data.prodHash) {
            prodBlock = this.prodChain.filter( pb => { return pb.blockhash === data.prodHash})[0];
        } else {
            prodBlock = new ProdBlock(data.productCode, data.id, timestamp)
            this.prodChain.push(prodBlock);

        }
        data.prodHash = prodBlock.blockhash;
        let blockid = this.chain.length; // The block id will be the length or the total number of blocks in the chain minus 1, so the first block will have 0 as an index
        let previousHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].blockhash : ''; // if it's the first block then its previous hash will be empty, if not then it will take the hash of the previous block
        let block = new Block(blockid, previousHash, timestamp, data, ('farmType' in data) ? prodBlock : undefined); // Now create the block
        this.chain.push(block); // Add the block to the blockchain 
        this.blocks$.next(this.chain);
        sessionStorage.setItem("chain", JSON.stringify(this.chain));
        sessionStorage.setItem("prodChain", JSON.stringify(this.prodChain));
    }

}
