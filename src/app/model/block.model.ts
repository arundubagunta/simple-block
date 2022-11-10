import * as bcrypt from 'bcryptjs';
import { Transport } from './transport.model';
import { Farmer } from './farmer.model';
import { Store } from './store.model';
import { Warehouse } from './warehouse.model';

export class Block { // create the block structure or class

    blockid: number;
    timestamp: number;
    blockhash: string;
    prevHash: string;
    data: Transport | Farmer | Store  | Warehouse;
     
    constructor(blockid: number,  previousHash: string, data: Transport | Farmer | Store  | Warehouse){ // create a contractor. in a block we find this information :
        this.blockid = blockid;  // the block id
        this.timestamp = Date.now(); // the timestamp
        this.blockhash = this.getHash(); // the block hash
        this.prevHash = previousHash; // the hash of the previous block
        this.data = data; // and all the transactions   
    }

    getHash(){
        return bcrypt.hashSync(String(this.blockid + this.timestamp + this.blockhash + this.prevHash + JSON.stringify(this.data)) , 10) // this method will hash the data in the block using a salt of 10 and return that hash. We use the bcrypt library
    };
}