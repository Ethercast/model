import * as Joi from 'joi';
import {
  BlockWithFullTransactions,
  BlockWithTransactionHashes,
  DecodedLog,
  DecodedTransaction,
  Log,
  Transaction,
  TransactionReceipt
} from './types';

export const JoiHex = Joi.string().regex(/^0x[0-9A-Fa-f]*$/);
export const JoiHex256 = JoiHex.length(66);
export const JoiHex160 = JoiHex.length(42);
export const JoiHexUint = JoiHex.max(66);

export const JoiAddress = JoiHex160;
export const JoiTopic = JoiHex256;

export const JoiLog = Joi.object({
  logIndex: JoiHexUint.required(),
  blockNumber: JoiHexUint.required(),
  blockHash: JoiHex256.required(),
  transactionHash: JoiHex256.required(),
  transactionIndex: JoiHexUint.required(),
  address: JoiAddress.required(),
  data: JoiHex.required(),
  topics: Joi.array()
    .items(JoiTopic)
    .max(4)
    .required(),
  removed: Joi.boolean()
});

export const JoiDecodedLog = JoiLog.keys({
  ethercast: Joi.object({
    eventName: Joi.string().allow(''),
    parameters: Joi.object().unknown(true)
  })
});

export const JoiBlock = Joi.object({
  hash: JoiHex256.required(),
  difficulty: JoiHex.required(),
  extraData: JoiHex.required(),
  gasLimit: JoiHex.required(),
  gasUsed: JoiHex.required(),
  logsBloom: JoiHex.required(),
  miner: JoiAddress.required(),
  mixHash: JoiHex,
  nonce: JoiHex,
  number: JoiHex.required(),
  parentHash: JoiHex256.required(),
  receiptsRoot: JoiHex.required(),
  sha3Uncles: JoiHex256.required(),
  size: JoiHex.required(),
  stateRoot: JoiHex.required(),
  timestamp: JoiHex.required(),
  totalDifficulty: JoiHex.required(),
  transactionsRoot: JoiHex256.required(),
  uncles: Joi.array()
    .items(JoiHex256)
    .required()
});

export const JoiBlockWithTransactionHashes = JoiBlock.keys({
  transactions: Joi.array()
    .items(JoiHex256)
    .required()
});

export const JoiTransaction = Joi.object({
  hash: JoiHex256.required(),
  nonce: JoiHex.required(),
  blockHash: JoiHex256.required(),
  blockNumber: JoiHex.required(),
  transactionIndex: JoiHex.required(),
  from: JoiAddress.required(),
  to: JoiAddress.required().allow(null),
  value: JoiHex.required(),
  gas: JoiHex.required(),
  gasPrice: JoiHex.required(),
  input: JoiHex.required(),
  // these are included by both geth and parity but not required
  v: JoiHex,
  r: JoiHex,
  s: JoiHex
});

export const JoiDecodedTransaction = JoiTransaction.keys({
  ethercast: Joi.object({
    methodName: Joi.string().allow(''),
    parameters: Joi.object().unknown(true)
  })
});

export const JoiBlockWithTransactions = JoiBlock.keys({
  transactions: Joi.array()
    .items(JoiTransaction)
    .required()
});

export const JoiTransactionReceipt = Joi.object({
  transactionHash: JoiHex256.required(),
  transactionIndex: JoiHex.required(),
  blockNumber: JoiHex.required(),
  blockHash: JoiHex256.required(),
  cumulativeGasUsed: JoiHex.required(),
  gasUsed: JoiHex.required(),
  logs: Joi.array()
    .items(JoiLog)
    .required(),
  contractAddress: JoiAddress.allow(null),
  from: JoiAddress,
  to: Joi.any().when('contractAddress', {
    is: null,
    then: JoiAddress,
    otherwise: Joi.any().only(null)
  }),
  logsBloom: JoiHex.required(),
  status: Joi.any().only('0x0', '0x1')
});

export function mustBeValidLog(log: Log): Log {
  return validate(log, JoiLog);
}

export function mustBeValidDecodedLog(decodedLog: DecodedLog): DecodedLog {
  return validate(decodedLog, JoiDecodedLog);
}

export function mustBeValidBlockWithTransactionHashes(
  block: BlockWithTransactionHashes
): BlockWithTransactionHashes {
  return validate(block, JoiBlockWithTransactionHashes);
}

export function mustBeValidBlockWithFullTransactions(
  block: BlockWithFullTransactions
): BlockWithFullTransactions {
  return validate(block, JoiBlockWithTransactions);
}

export function mustBeValidTransaction(transaction: Transaction): Transaction {
  return validate(transaction, JoiTransaction);
}

export function mustBeValidDecodedTransaction(
  decodedTransaction: DecodedTransaction
): DecodedTransaction {
  return validate(decodedTransaction, JoiDecodedTransaction);
}

export function mustBeValidTransactionReceipt(
  transactionReceipt: TransactionReceipt
): TransactionReceipt {
  return validate(transactionReceipt, JoiTransactionReceipt);
}

export function validate<T>(item: T, schema: Joi.Schema, options?: Joi.ValidationOptions): T {
  const { error, value } = schema.validate(item, {
    allowUnknown: true,
    convert: false,
    ...options
  });

  if (error && error.details && error.details.length > 0) {
    throw new Error('schema validation failed: ' + error.message);
  }

  return value;
}
