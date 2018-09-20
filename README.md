# @ethercast/model
[![Build Status](https://travis-ci.org/Ethercast/model.svg?branch=master)](https://travis-ci.org/Ethercast/model)
[![codecov](https://codecov.io/gh/Ethercast/model/branch/master/graph/badge.svg)](https://codecov.io/gh/Ethercast/model)
[![NPM version][npm-svg]][npm]

   [npm]: https://www.npmjs.com/package/@ethercast/model
   [npm-svg]: https://img.shields.io/npm/v/@ethercast/model.svg?style=flat

Models for the [Ethercast](https://ethercast.io) service

These models are delivered to the subscribed webhooks (particularly, Logs and Transactions)
and also used in the API

## Installation

`npm install --save @ethercast/model`

## Usage

The exports of `@ethercast/model` are:

- a set of TypeScript interfaces representing the types passed around by Ethercast, e.g. Logs, Transactions and Blocks: `EthereumTypes`
- a set of TypeScript interfaces representing the schema of the public Ethercast API `EthercastTypes`

You can use the TypeScript interfaces when writing TypeScript code to handle Webhooks or communicate with the API.

The standard draft 6 JSON schemas are useful for a variety of use cases, including validating requests sent 
to your webhooks. 

To use the JSON schemas, you must import one of:

- `@ethercast/model/ethercast-api-types-schema.json`
- `@ethercast/model/ethereum-types.json`

## API Docs

https://docs.ethercast.io/model/index.html
