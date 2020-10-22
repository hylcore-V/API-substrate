// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Option, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { Bytes, Text, U256, u32, u64 } from '@polkadot/types/primitive';
import { Log } from '@polkadot/types/interfaces/evm';
import { AccountId, H160, H256 } from '@polkadot/types/interfaces/runtime';

/** @name Account */
export interface Account extends Struct {
  readonly nonce: U256;
  readonly balance: U256;
}

/** @name Address */
export interface Address extends AccountId {}

/** @name Bloom */
export interface Bloom extends U8aFixed {}

/** @name LookupSource */
export interface LookupSource extends AccountId {}

/** @name Receipt */
export interface Receipt extends Struct {
  readonly transaction_hash: Option<H256>;
  readonly transaction_index: Option<U256>;
  readonly block_hash: Option<H256>;
  readonly from: Option<H160>;
  readonly to: Option<H160>;
  readonly block_number: Option<U256>;
  readonly cumulative_gas_used: U256;
  readonly gas_used: Option<U256>;
  readonly contract_address: Option<H160>;
  readonly logs: Vec<Log>;
  readonly state_root: Option<H256>;
  readonly logs_bloom: Bloom;
  readonly status_code: Option<u64>;
}

/** @name Signature */
export interface Signature extends Struct {
  readonly v: u64;
  readonly r: H256;
  readonly s: H256;
}

/** @name Transaction */
export interface Transaction extends Struct {
  readonly nonce: U256;
  readonly action: Text;
  readonly gas_price: u64;
  readonly gas_limit: u64;
  readonly value: U256;
  readonly input: Bytes;
  readonly signature: Signature;
}

/** @name TransactionStatus */
export interface TransactionStatus extends Struct {
  readonly transaction_hash: H256;
  readonly transaction_index: u32;
  readonly from: H160;
  readonly to: Option<H160>;
  readonly contract_address: Option<H160>;
  readonly logs: Vec<Log>;
  readonly logs_bloom: Bloom;
}

export type PHANTOM_ETHEREUM = 'ethereum';
