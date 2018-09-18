export interface Log {
  logIndex: string;
  blockNumber: string;
  blockHash: string;
  transactionHash: string;
  transactionIndex: string;
  address: string;
  data: string;
  topics: string[];
  removed?: boolean;
}

export interface DecodedLog extends Log {
  ethercast: {
    eventName: string;
    parameters: {
      [parameter: string]: any;
    };
  };
}

export interface Transaction {
  hash: string;
  nonce: string;
  blockHash: string;
  blockNumber: string;
  transactionIndex: string;
  from: string;
  to: string | null;
  value: string;
  gas: string;
  gasPrice: string;
  input: string;
  // these are included by both geth and parity but not required
  v?: string;
  r?: string;
  s?: string;
}

export interface DecodedTransaction extends Transaction {
  ethercast: {
    methodName: string;
    parameters: {
      [parameter: string]: any;
    };
  };
}

export interface Block {
  hash: string;
  difficulty: string;
  extraData: string;
  gasLimit: string;
  gasUsed: string;
  logsBloom: string;
  miner: string;
  mixHash?: string;
  nonce?: string;
  number: string;
  parentHash: string;
  receiptsRoot: string;
  sha3Uncles: string;
  size: string;
  stateRoot: string;
  timestamp: string;
  totalDifficulty: string;
  transactionsRoot: string;
  uncles: string[];
}

// 0x0 (FAILURE) or 0x1 (SUCCESS)
export type TransactionReceiptStatus = '0x0' | '0x1';

export interface TransactionReceipt {
  transactionHash: string; // hex256
  transactionIndex: string; // hex
  blockNumber: string; // hex
  blockHash: string; // hex256
  cumulativeGasUsed: string; // hex
  gasUsed: string; // hex
  from?: string; // hex
  to?: string; // hex
  contractAddress: string | null; // address
  logs: Log[];
  logsBloom: string; // hex
  status: TransactionReceiptStatus;
}

export interface BlockWithTransactionHashes extends Block {
  transactions: string[];
}

export interface BlockWithFullTransactions extends Block {
  transactions: Transaction[];
}
