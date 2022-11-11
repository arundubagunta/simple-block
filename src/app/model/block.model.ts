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
    data2? : ProdBlock;
     
    constructor(blockid: number, previousHash: string,  timestamp: number,  data: Transport | Farmer | Store  | Warehouse, data2?: ProdBlock){ // create a contractor. in a block we find this information :
        this.blockid = blockid;  // the block id
        this.timestamp = timestamp; // the timestamp
        this.prevHash = previousHash; // the hash of the previous block
        this.data = data; // and all the transactions   
        this.data2 = data2;
        this.blockhash = this.getHash(); // the block hash
       
    }

    getHash(){
        return bcrypt.hashSync(String(this.blockid + this.timestamp + this.blockhash + this.prevHash + JSON.stringify(this.data) + (this.data2?  JSON.stringify(this.data2) :'')) , 10) // this method will hash the data in the block using a salt of 10 and return that hash. We use the bcrypt library
    };
}

export class ProdBlock { // create the block structure or class

    prodCd: string;
    timestamp: number;
    farmerId: string;
    blockhash: string;
    data: any;
     
    constructor(prodCd: string, farmerId: string, timestamp: number){ // create a contractor. in a block we find this information :
        this.prodCd = prodCd;  // the block id
        this.timestamp = timestamp; // the timestamp
        this.data = { prodCd, farmerId, timestamp}; // and all the transactions   
        this.blockhash = this.getHash(); // the block hash
        this.farmerId = farmerId; // the hash of the previous block
    }

    getHash(){
        return bcrypt.hashSync(JSON.stringify(this.data), 10) // this method will hash the data in the block using a salt of 10 and return that hash. We use the bcrypt library
    };
}