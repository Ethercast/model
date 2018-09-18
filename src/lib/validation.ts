import {
  BlockWithFullTransactions,
  BlockWithTransactionHashes,
  DecodedLog,
  DecodedTransaction,
  Log,
  Transaction,
  TransactionReceipt
} from './types';

const Ajv = require('ajv');
import schema from './schema.json';

const ajv = new Ajv({ allErrors: true });

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
ajv.addSchema(schema);

export function validate<TValue, TSchemaKey extends keyof typeof schema.definitions>(
  value: TValue,
  schemaKey: TSchemaKey
): TValue {
  const valid = ajv.validate(`#/definitions/${schemaKey}`, value);
  if (!valid) {
    throw new Error(`validation error encountered: ${JSON.stringify(ajv.errors)}`);
  } else {
    return value;
  }
}

export function mustBeValidLog(log: Log): Log {
  return validate(log, 'Log');
}

export function mustBeValidDecodedLog(decodedLog: DecodedLog): DecodedLog {
  return validate(decodedLog, 'DecodedLog');
}

export function mustBeValidBlockWithTransactionHashes(
  block: BlockWithTransactionHashes
): BlockWithTransactionHashes {
  return validate(block, 'BlockWithTransactionHashes');
}

export function mustBeValidBlockWithFullTransactions(
  block: BlockWithFullTransactions
): BlockWithFullTransactions {
  return validate(block, 'BlockWithFullTransactions');
}

export function mustBeValidTransaction(transaction: Transaction): Transaction {
  return validate(transaction, 'Transaction');
}

export function mustBeValidDecodedTransaction(
  decodedTransaction: DecodedTransaction
): DecodedTransaction {
  return validate(decodedTransaction, 'DecodedTransaction');
}

export function mustBeValidTransactionReceipt(
  transactionReceipt: TransactionReceipt
): TransactionReceipt {
  return validate(transactionReceipt, 'TransactionReceipt');
}
