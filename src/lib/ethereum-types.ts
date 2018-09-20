/**
 * @pattern ^0x[a-fA-F0-9]*$
 */
export type Hex = string;
/**
 * @pattern ^0x[a-fA-F0-9]{64}$
 */
export type Hex256 = string;
/**
 * @pattern ^0x[a-fA-F0-9]{40}$
 */
export type Hex160 = string;
export type Address = Hex160;
export type Topic = Hex256;

export interface Log {
  logIndex: Hex;
  blockNumber: Hex;
  blockHash: Hex256;
  transactionHash: Hex256;
  transactionIndex: Hex;
  address: Address;
  data: Hex;
  topics: Topic[];
  removed?: boolean;

  [key: string]: any;
}

export interface DecodedLog extends Log {
  ethercast: {
    eventName: string;
    parameters: {
      [parameter: string]: any;
    };
  };

  [key: string]: any;
}

/**
 * @additionalProperties true
 */
export interface Transaction {
  hash: Hex256;
  nonce: Hex;
  blockHash: Hex256;
  blockNumber: Hex;
  transactionIndex: Hex;
  from: Address;
  to: Address | null;
  value: Hex;
  gas: Hex;
  gasPrice: Hex;
  input: Hex;
  // these are included by both geth and parity but not required
  v?: Hex;
  r?: Hex;
  s?: Hex;

  [key: string]: any;
}

export interface DecodedTransaction extends Transaction {
  ethercast: {
    methodName: string;
    parameters: {
      [parameter: string]: any;
    };
  };

  [key: string]: any;
}

export interface Block {
  hash: Hex256;
  difficulty: Hex;
  extraData: Hex;
  gasLimit: Hex;
  gasUsed: Hex;
  logsBloom: Hex;
  miner: Address;
  mixHash?: Hex;
  nonce?: Hex;
  number: Hex;
  parentHash: Hex256;
  receiptsRoot: Hex;
  sha3Uncles: Hex256;
  size: Hex;
  stateRoot: Hex;
  timestamp: Hex;
  totalDifficulty: Hex;
  transactionsRoot: Hex256;
  uncles: Hex256[];

  [key: string]: any;
}

// 0x0 (FAILURE) or 0x1 (SUCCESS)
export type TransactionReceiptStatus = '0x0' | '0x1';

export interface TransactionReceipt {
  transactionHash: Hex256;
  transactionIndex: Hex;
  blockNumber: Hex;
  blockHash: Hex256;
  cumulativeGasUsed: Hex;
  gasUsed: Hex;
  from?: Address;
  to?: Address;
  contractAddress: Address | null;
  logs: Log[];
  logsBloom: Hex;
  status: TransactionReceiptStatus;

  [key: string]: any;
}

export interface BlockWithTransactionHashes extends Block {
  transactions: Hex256[];

  [key: string]: any;
}

export interface BlockWithFullTransactions extends Block {
  transactions: Transaction[];

  [key: string]: any;
}

/**
 * This export is necessary for the schema generator to work
 * @hidden
 */
export type Schema =
  | BlockWithFullTransactions
  | BlockWithTransactionHashes
  | TransactionReceipt
  | Block
  | DecodedTransaction
  | Transaction
  | DecodedLog
  | Log;
