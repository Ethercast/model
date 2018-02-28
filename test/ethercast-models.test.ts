import { JoiBlock, mustBeValidBlockWithFullTransactions } from '../src/ethercast-models';

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

      it('succeeds with good blocks', () => {

        expect(() => mustBeValidBlockWithFullTransactions({ unknown: 'key' } as any))
          .not.toThrow();
      })
    });
  });

});
