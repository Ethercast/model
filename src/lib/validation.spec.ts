import test from 'ava';
import {
  PARITY_EXAMPLE_BLOCK_WITH_FULL_TRANSACTIONS,
  PARITY_EXAMPLE_EMPTY_BLOCK,
  PARITY_EXAMPLE_NO_FROM_BLOCK,
  PARITY_EXAMPLE_TRANSACTION_RECEIPT,
  PARITY_TX_NO_TOPICS,
  PARITY_TX_RECEIPT_NO_LOGS
} from './parity-test-data.spec';
import {
  mustBeValidBlockWithFullTransactions,
  mustBeValidBlockWithTransactionHashes,
  mustBeValidDecodedLog,
  mustBeValidDecodedTransaction,
  mustBeValidLog,
  mustBeValidTransaction,
  mustBeValidTransactionReceipt,
  validate
} from './validation';

test('#validate', t => {
  t.throws(() => validate('abc', 'Hex'));
  t.notThrows(() => validate('0x', 'Hex'));
  t.notThrows(() => validate('0x000', 'Hex'));
  t.notThrows(() => validate('0xafaF0f', 'Hex'));

  t.throws(() => validate({}, 'Block'));
  t.throws(() => validate({ blockNumber: 'abc' }, 'Block'));
  t.throws(() => validate({ hash: 'ahs' }, 'Block'));
  t.throws(() => validate({ unknown: 'key' }, 'Block'));

  t.notThrows(() => validate(PARITY_EXAMPLE_BLOCK_WITH_FULL_TRANSACTIONS, 'Block'));
  t.notThrows(() => validate(PARITY_EXAMPLE_EMPTY_BLOCK, 'Block'));
  t.notThrows(() => validate(PARITY_EXAMPLE_NO_FROM_BLOCK, 'Block'));
  t.notThrows(() => validate(PARITY_TX_RECEIPT_NO_LOGS, 'TransactionReceipt'));
  t.notThrows(() => validate(PARITY_TX_NO_TOPICS, 'Transaction'));
  t.notThrows(() => validate(PARITY_EXAMPLE_TRANSACTION_RECEIPT, 'TransactionReceipt'));
});

test('#mustBeValid...', t => {
  t.notThrows(() => mustBeValidLog(PARITY_EXAMPLE_TRANSACTION_RECEIPT.logs[0]));
  t.throws(() => mustBeValidLog(PARITY_TX_RECEIPT_NO_LOGS as any));
  t.notThrows(() =>
    mustBeValidBlockWithFullTransactions(PARITY_EXAMPLE_BLOCK_WITH_FULL_TRANSACTIONS)
  );
  t.throws(() => mustBeValidDecodedTransaction(PARITY_TX_NO_TOPICS as any));
  t.notThrows(() => mustBeValidTransactionReceipt(PARITY_TX_RECEIPT_NO_LOGS as any));
  t.notThrows(() => mustBeValidBlockWithFullTransactions(PARITY_EXAMPLE_EMPTY_BLOCK));
  t.notThrows(() => mustBeValidBlockWithTransactionHashes(PARITY_EXAMPLE_EMPTY_BLOCK));
  t.throws(() => mustBeValidDecodedLog(PARITY_EXAMPLE_EMPTY_BLOCK as any));
  t.throws(() => mustBeValidTransaction(PARITY_EXAMPLE_EMPTY_BLOCK as any));
});
