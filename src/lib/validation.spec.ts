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
  JoiBlock,
  mustBeValidBlockWithFullTransactions,
  mustBeValidTransaction,
  mustBeValidTransactionReceipt
} from './validation';

test('JoiBlock', t => {
  t.not(JoiBlock.validate({}).error, null);
});

test('#mustBeValidBlock', t => {
  t.throws(() => mustBeValidBlockWithFullTransactions({} as any));
  t.throws(() => mustBeValidBlockWithFullTransactions({ blockNumber: 'abc' } as any));
  t.throws(() => mustBeValidBlockWithFullTransactions({ hash: 'ahs' } as any));
  t.throws(() => mustBeValidBlockWithFullTransactions({ unknown: 'key' } as any));
});

test('#mustBeValidBlock succeeds with example blocks', t => {
  t.notThrows(() =>
    mustBeValidBlockWithFullTransactions(PARITY_EXAMPLE_BLOCK_WITH_FULL_TRANSACTIONS)
  );
  t.notThrows(() => mustBeValidBlockWithFullTransactions(PARITY_EXAMPLE_EMPTY_BLOCK));
  t.notThrows(() => mustBeValidBlockWithFullTransactions(PARITY_EXAMPLE_NO_FROM_BLOCK));
  t.notThrows(() => mustBeValidTransactionReceipt(PARITY_TX_RECEIPT_NO_LOGS as any));
  t.notThrows(() => mustBeValidTransaction(PARITY_TX_NO_TOPICS));
  t.notThrows(() => mustBeValidTransactionReceipt(PARITY_EXAMPLE_TRANSACTION_RECEIPT as any));
});
