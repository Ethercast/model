export default {
  $ref: '#/definitions/Schema',
  $schema: 'http://json-schema.org/draft-06/schema#',
  definitions: {
    Address: {
      $ref: '#/definitions/Hex160'
    },
    Block: {
      properties: {
        difficulty: {
          $ref: '#/definitions/Hex'
        },
        extraData: {
          $ref: '#/definitions/Hex'
        },
        gasLimit: {
          $ref: '#/definitions/Hex'
        },
        gasUsed: {
          $ref: '#/definitions/Hex'
        },
        hash: {
          $ref: '#/definitions/Hex256'
        },
        logsBloom: {
          $ref: '#/definitions/Hex'
        },
        miner: {
          $ref: '#/definitions/Address'
        },
        mixHash: {
          $ref: '#/definitions/Hex'
        },
        nonce: {
          $ref: '#/definitions/Hex'
        },
        number: {
          $ref: '#/definitions/Hex'
        },
        parentHash: {
          $ref: '#/definitions/Hex256'
        },
        receiptsRoot: {
          $ref: '#/definitions/Hex'
        },
        sha3Uncles: {
          $ref: '#/definitions/Hex256'
        },
        size: {
          $ref: '#/definitions/Hex'
        },
        stateRoot: {
          $ref: '#/definitions/Hex'
        },
        timestamp: {
          $ref: '#/definitions/Hex'
        },
        totalDifficulty: {
          $ref: '#/definitions/Hex'
        },
        transactionsRoot: {
          $ref: '#/definitions/Hex256'
        },
        uncles: {
          items: {
            $ref: '#/definitions/Hex256'
          },
          type: 'array'
        }
      },
      required: [
        'hash',
        'difficulty',
        'extraData',
        'gasLimit',
        'gasUsed',
        'logsBloom',
        'miner',
        'number',
        'parentHash',
        'receiptsRoot',
        'sha3Uncles',
        'size',
        'stateRoot',
        'timestamp',
        'totalDifficulty',
        'transactionsRoot',
        'uncles'
      ],
      type: 'object'
    },
    BlockWithFullTransactions: {
      properties: {
        difficulty: {
          $ref: '#/definitions/Hex'
        },
        extraData: {
          $ref: '#/definitions/Hex'
        },
        gasLimit: {
          $ref: '#/definitions/Hex'
        },
        gasUsed: {
          $ref: '#/definitions/Hex'
        },
        hash: {
          $ref: '#/definitions/Hex256'
        },
        logsBloom: {
          $ref: '#/definitions/Hex'
        },
        miner: {
          $ref: '#/definitions/Address'
        },
        mixHash: {
          $ref: '#/definitions/Hex'
        },
        nonce: {
          $ref: '#/definitions/Hex'
        },
        number: {
          $ref: '#/definitions/Hex'
        },
        parentHash: {
          $ref: '#/definitions/Hex256'
        },
        receiptsRoot: {
          $ref: '#/definitions/Hex'
        },
        sha3Uncles: {
          $ref: '#/definitions/Hex256'
        },
        size: {
          $ref: '#/definitions/Hex'
        },
        stateRoot: {
          $ref: '#/definitions/Hex'
        },
        timestamp: {
          $ref: '#/definitions/Hex'
        },
        totalDifficulty: {
          $ref: '#/definitions/Hex'
        },
        transactions: {
          items: {
            $ref: '#/definitions/Transaction'
          },
          type: 'array'
        },
        transactionsRoot: {
          $ref: '#/definitions/Hex256'
        },
        uncles: {
          items: {
            $ref: '#/definitions/Hex256'
          },
          type: 'array'
        }
      },
      required: [
        'difficulty',
        'extraData',
        'gasLimit',
        'gasUsed',
        'hash',
        'logsBloom',
        'miner',
        'number',
        'parentHash',
        'receiptsRoot',
        'sha3Uncles',
        'size',
        'stateRoot',
        'timestamp',
        'totalDifficulty',
        'transactions',
        'transactionsRoot',
        'uncles'
      ],
      type: 'object'
    },
    BlockWithTransactionHashes: {
      properties: {
        difficulty: {
          $ref: '#/definitions/Hex'
        },
        extraData: {
          $ref: '#/definitions/Hex'
        },
        gasLimit: {
          $ref: '#/definitions/Hex'
        },
        gasUsed: {
          $ref: '#/definitions/Hex'
        },
        hash: {
          $ref: '#/definitions/Hex256'
        },
        logsBloom: {
          $ref: '#/definitions/Hex'
        },
        miner: {
          $ref: '#/definitions/Address'
        },
        mixHash: {
          $ref: '#/definitions/Hex'
        },
        nonce: {
          $ref: '#/definitions/Hex'
        },
        number: {
          $ref: '#/definitions/Hex'
        },
        parentHash: {
          $ref: '#/definitions/Hex256'
        },
        receiptsRoot: {
          $ref: '#/definitions/Hex'
        },
        sha3Uncles: {
          $ref: '#/definitions/Hex256'
        },
        size: {
          $ref: '#/definitions/Hex'
        },
        stateRoot: {
          $ref: '#/definitions/Hex'
        },
        timestamp: {
          $ref: '#/definitions/Hex'
        },
        totalDifficulty: {
          $ref: '#/definitions/Hex'
        },
        transactions: {
          items: {
            $ref: '#/definitions/Hex256'
          },
          type: 'array'
        },
        transactionsRoot: {
          $ref: '#/definitions/Hex256'
        },
        uncles: {
          items: {
            $ref: '#/definitions/Hex256'
          },
          type: 'array'
        }
      },
      required: [
        'difficulty',
        'extraData',
        'gasLimit',
        'gasUsed',
        'hash',
        'logsBloom',
        'miner',
        'number',
        'parentHash',
        'receiptsRoot',
        'sha3Uncles',
        'size',
        'stateRoot',
        'timestamp',
        'totalDifficulty',
        'transactions',
        'transactionsRoot',
        'uncles'
      ],
      type: 'object'
    },
    DecodedLog: {
      properties: {
        address: {
          $ref: '#/definitions/Address'
        },
        blockHash: {
          $ref: '#/definitions/Hex256'
        },
        blockNumber: {
          $ref: '#/definitions/Hex'
        },
        data: {
          $ref: '#/definitions/Hex'
        },
        ethercast: {
          additionalProperties: false,
          properties: {
            eventName: {
              type: 'string'
            },
            parameters: {
              type: 'object'
            }
          },
          required: ['eventName', 'parameters'],
          type: 'object'
        },
        logIndex: {
          $ref: '#/definitions/Hex'
        },
        removed: {
          type: 'boolean'
        },
        topics: {
          items: {
            $ref: '#/definitions/Topic'
          },
          type: 'array'
        },
        transactionHash: {
          $ref: '#/definitions/Hex256'
        },
        transactionIndex: {
          $ref: '#/definitions/Hex'
        }
      },
      required: [
        'address',
        'blockHash',
        'blockNumber',
        'data',
        'ethercast',
        'logIndex',
        'topics',
        'transactionHash',
        'transactionIndex'
      ],
      type: 'object'
    },
    DecodedTransaction: {
      properties: {
        blockHash: {
          $ref: '#/definitions/Hex256'
        },
        blockNumber: {
          $ref: '#/definitions/Hex'
        },
        ethercast: {
          additionalProperties: false,
          properties: {
            methodName: {
              type: 'string'
            },
            parameters: {
              type: 'object'
            }
          },
          required: ['methodName', 'parameters'],
          type: 'object'
        },
        from: {
          $ref: '#/definitions/Address'
        },
        gas: {
          $ref: '#/definitions/Hex'
        },
        gasPrice: {
          $ref: '#/definitions/Hex'
        },
        hash: {
          $ref: '#/definitions/Hex256'
        },
        input: {
          $ref: '#/definitions/Hex'
        },
        nonce: {
          $ref: '#/definitions/Hex'
        },
        r: {
          $ref: '#/definitions/Hex'
        },
        s: {
          $ref: '#/definitions/Hex'
        },
        to: {
          anyOf: [
            {
              $ref: '#/definitions/Address'
            },
            {
              type: 'null'
            }
          ]
        },
        transactionIndex: {
          $ref: '#/definitions/Hex'
        },
        v: {
          $ref: '#/definitions/Hex'
        },
        value: {
          $ref: '#/definitions/Hex'
        }
      },
      required: [
        'blockHash',
        'blockNumber',
        'ethercast',
        'from',
        'gas',
        'gasPrice',
        'hash',
        'input',
        'nonce',
        'to',
        'transactionIndex',
        'value'
      ],
      type: 'object'
    },
    Hex: {
      pattern: '^0x[a-fA-F0-9]*$',
      type: 'string'
    },
    Hex160: {
      pattern: '^0x[a-fA-F0-9]{40}$',
      type: 'string'
    },
    Hex256: {
      pattern: '^0x[a-fA-F0-9]{64}$',
      type: 'string'
    },
    Log: {
      properties: {
        address: {
          $ref: '#/definitions/Address'
        },
        blockHash: {
          $ref: '#/definitions/Hex256'
        },
        blockNumber: {
          $ref: '#/definitions/Hex'
        },
        data: {
          $ref: '#/definitions/Hex'
        },
        logIndex: {
          $ref: '#/definitions/Hex'
        },
        removed: {
          type: 'boolean'
        },
        topics: {
          items: {
            $ref: '#/definitions/Topic'
          },
          type: 'array'
        },
        transactionHash: {
          $ref: '#/definitions/Hex256'
        },
        transactionIndex: {
          $ref: '#/definitions/Hex'
        }
      },
      required: [
        'logIndex',
        'blockNumber',
        'blockHash',
        'transactionHash',
        'transactionIndex',
        'address',
        'data',
        'topics'
      ],
      type: 'object'
    },
    Schema: {
      anyOf: [
        {
          $ref: '#/definitions/BlockWithFullTransactions'
        },
        {
          $ref: '#/definitions/BlockWithTransactionHashes'
        },
        {
          $ref: '#/definitions/TransactionReceipt'
        },
        {
          $ref: '#/definitions/Block'
        },
        {
          $ref: '#/definitions/DecodedTransaction'
        },
        {
          $ref: '#/definitions/Transaction'
        },
        {
          $ref: '#/definitions/DecodedLog'
        },
        {
          $ref: '#/definitions/Log'
        }
      ]
    },
    Topic: {
      $ref: '#/definitions/Hex256'
    },
    Transaction: {
      properties: {
        blockHash: {
          $ref: '#/definitions/Hex256'
        },
        blockNumber: {
          $ref: '#/definitions/Hex'
        },
        from: {
          $ref: '#/definitions/Address'
        },
        gas: {
          $ref: '#/definitions/Hex'
        },
        gasPrice: {
          $ref: '#/definitions/Hex'
        },
        hash: {
          $ref: '#/definitions/Hex256'
        },
        input: {
          $ref: '#/definitions/Hex'
        },
        nonce: {
          $ref: '#/definitions/Hex'
        },
        r: {
          $ref: '#/definitions/Hex'
        },
        s: {
          $ref: '#/definitions/Hex'
        },
        to: {
          anyOf: [
            {
              $ref: '#/definitions/Address'
            },
            {
              type: 'null'
            }
          ]
        },
        transactionIndex: {
          $ref: '#/definitions/Hex'
        },
        v: {
          $ref: '#/definitions/Hex'
        },
        value: {
          $ref: '#/definitions/Hex'
        }
      },
      required: [
        'hash',
        'nonce',
        'blockHash',
        'blockNumber',
        'transactionIndex',
        'from',
        'to',
        'value',
        'gas',
        'gasPrice',
        'input'
      ],
      type: 'object'
    },
    TransactionReceipt: {
      properties: {
        blockHash: {
          $ref: '#/definitions/Hex256'
        },
        blockNumber: {
          $ref: '#/definitions/Hex'
        },
        contractAddress: {
          anyOf: [
            {
              $ref: '#/definitions/Address'
            },
            {
              type: 'null'
            }
          ]
        },
        cumulativeGasUsed: {
          $ref: '#/definitions/Hex'
        },
        from: {
          $ref: '#/definitions/Address'
        },
        gasUsed: {
          $ref: '#/definitions/Hex'
        },
        logs: {
          items: {
            $ref: '#/definitions/Log'
          },
          type: 'array'
        },
        logsBloom: {
          $ref: '#/definitions/Hex'
        },
        status: {
          $ref: '#/definitions/TransactionReceiptStatus'
        },
        to: {
          $ref: '#/definitions/Address'
        },
        transactionHash: {
          $ref: '#/definitions/Hex256'
        },
        transactionIndex: {
          $ref: '#/definitions/Hex'
        }
      },
      required: [
        'transactionHash',
        'transactionIndex',
        'blockNumber',
        'blockHash',
        'cumulativeGasUsed',
        'gasUsed',
        'contractAddress',
        'logs',
        'logsBloom',
        'status'
      ],
      type: 'object'
    },
    TransactionReceiptStatus: {
      enum: ['0x0', '0x1'],
      type: 'string'
    }
  }
};