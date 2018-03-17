import 'jest';
import {
  JoiBlock,
  mustBeValidBlockWithFullTransactions,
  mustBeValidLog,
  mustBeValidTransaction,
  mustBeValidTransactionReceipt
} from '../src/ethercast-models';
import {
  PARITY_EXAMPLE_BLOCK_WITH_FULL_TRANSACTIONS,
  PARITY_EXAMPLE_EMPTY_BLOCK,
  PARITY_EXAMPLE_NO_FROM_BLOCK,
  PARITY_EXAMPLE_TRANSACTION_RECEIPT,
  PARITY_TX_NO_TOPICS,
  PARITY_TX_RECEIPT_NO_LOGS
} from './parity-test-data';

describe('ethercast-models', () => {
  describe('JoiBlock', () => {
    it('fails on empty block', () => {
      expect(JoiBlock.validate({}).error).not.toBeNull();
    });
  });

  describe('validate', () => {
    describe('mustBeValidBlock', () => {
      it('fails on invalid blocks', () => {
        expect(() => mustBeValidBlockWithFullTransactions({} as any))
          .toThrow();
        expect(() => mustBeValidBlockWithFullTransactions({ blockNumber: 'abc' } as any))
          .toThrow();
        expect(() => mustBeValidBlockWithFullTransactions({ hash: 'ahs' } as any))
          .toThrow();
        expect(() => mustBeValidBlockWithFullTransactions({ unknown: 'key' } as any))
          .toThrow();
      });

      it('succeeds with example parity kovan block', () => {
        expect(
          () => mustBeValidBlockWithFullTransactions(PARITY_EXAMPLE_BLOCK_WITH_FULL_TRANSACTIONS)
        ).not.toThrow();
      });

      it('succeeds with empty kovan block', () => {
        expect(
          () => mustBeValidBlockWithFullTransactions(PARITY_EXAMPLE_EMPTY_BLOCK)
        ).not.toThrow();
      });

      it('succeeds with empty from transaction kovan block', () => {
        expect(
          () => mustBeValidBlockWithFullTransactions(PARITY_EXAMPLE_NO_FROM_BLOCK)
        ).not.toThrow();
      });

      it('succeeds for transaction receipt with no logs', () => {
        expect(
          () => mustBeValidTransactionReceipt(PARITY_TX_RECEIPT_NO_LOGS as any)
        ).not.toThrow();
      });

    });

    describe('mustBeValidLog', () => {
      it('succeeds with parity empty topics', () => {
        expect(
          () => mustBeValidTransaction(PARITY_TX_NO_TOPICS)
        ).not.toThrow();
      });
    });

    describe('mustBeValidTransactionReceipt', () => {
      it('succeeds with a transaction receipt from kovan parity', () => {
        expect(
          () => mustBeValidTransactionReceipt(PARITY_EXAMPLE_TRANSACTION_RECEIPT as any)
        ).not.toThrow();
      });
    });
  });

});
