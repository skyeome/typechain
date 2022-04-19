import * as CryptoJs from "crypto-js";

class Block {
  public index:number;
  public hash:string;
  public previousHash:string;
  public data:string;
  public timestamp:number;

<<<<<<< HEAD
  static calculateBlockHash = (index:number, previousHash:string, data:string, timestamp:number):string => CryptoJs.SHA256(index+previousHash+data+timestamp).toString();
=======
  static calculateBlockHash = (index:number, previousHash:string, data:string, timestamp:number):string => CryptoJs.SHA256(index+previousHash+data+timestamp);
>>>>>>> 4487ec98db6705d1b0b709e2d0ecd868074805c5
  static validateStructure = (aBlock:Block):boolean => typeof aBlock.index === "number" && typeof aBlock.hash === "string" && typeof aBlock.previousHash === "string" && typeof aBlock.data === "string" && typeof aBlock.timestamp === "number";
  constructor(index:number,hash:string,previousHash:string,data:string,timestamp:number){
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock:Block = new Block(0, "101202030","","Hello",123456);

let blockChain:Block[] = [genesisBlock];
<<<<<<< HEAD

//blockChain 배열에는 Block 객체만 들어갈수있다.
//blockChain.push("something..");
const getBlockchain = ():Block[] => blockChain;
const getLatestBlock = ():Block => blockChain[blockChain.length-1];
const getNewTimeStamp = ():number => Math.round(new Date().getTime()/1000);
const createNewBlock = (data:string):Block => {
  const previousBlock:Block = getLatestBlock();
  const newIndex:number = previousBlock.index + 1;
  const newTimeStamp:number = getNewTimeStamp();
  const newHash:string = Block.calculateBlockHash(newIndex,previousBlock.hash,data,newTimeStamp);
  const newBlock:Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
  addBlock(newBlock);
  return newBlock;
};
const getHashforBlock = (aBlock:Block):string => Block.calculateBlockHash(aBlock.index,aBlock.previousHash,aBlock.data,aBlock.timestamp);

const isBlockValid = (candidateBlock:Block, previousBlock:Block):boolean => {
  if(!Block.validateStructure(candidateBlock)) return false;
  else if(previousBlock.index + 1 !== candidateBlock.index) return false;
  else if(previousBlock.hash !== candidateBlock.previousHash) return false;
=======

//blockChain 배열에는 Block 객체만 들어갈수있다.
//blockChain.push("something..");
const getBlockchain = ():Block[] => blockChain;
const getLatestBlock = ():Block => blockChain[blockChain.length-1];
const getNewTimeStamp = ():number => Math.round(new Date().getTime()/1000);
const createNewBlock = (data:string):Block => {
  const previousBlock:Block = getLatestBlock();
  const newIndex:number = previousBlock.index + 1;
  const newTimeStamp:number = getNewTimeStamp();
  const newHash:string = Block.calculateBlockHash(newIndex,previousBlock.hash,data,newTimeStamp);
  const newBlock:Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
  return newBlock;
};
const getHashforBlock = (aBlock:Block):string => Block.calculateBlockHash(aBlock.index,aBlock.previousHash,aBlock.data,aBlock.timestamp);

const isBlockValid = (candidateBlock:Block, previousBlock:Block):boolean => {
  if(!Block.validateStructure(candidateBlock)) return false;
  else if(previousBlock.index + 1 !== candidateBlock.index) return false;
  else if(previousBlock.hash !== candidateBlock.hash) return false;
>>>>>>> 4487ec98db6705d1b0b709e2d0ecd868074805c5
  else if(getHashforBlock(candidateBlock) !== candidateBlock.hash) return false;
  else return true;
}

const addBlock = (candidateBlock:Block):void => {
  if(isBlockValid(candidateBlock, getLatestBlock())) blockChain.push(candidateBlock);
}
<<<<<<< HEAD

createNewBlock("Second Block");
createNewBlock("Third Block");
createNewBlock("Fourth Block");

console.log(blockChain);
=======
>>>>>>> 4487ec98db6705d1b0b709e2d0ecd868074805c5

export {};