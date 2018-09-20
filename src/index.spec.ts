import test from 'ava';
import * as index from './index';

test('index.ts', t => {
  t.true(typeof index === 'object');
  t.deepEqual(Object.keys(index), ['EthercastTypes', 'EthereumTypes']);
  t.deepEqual(Object.keys(index.EthercastTypes), ['Scope']);
  t.deepEqual(Object.keys(index.EthereumTypes), []);
});
