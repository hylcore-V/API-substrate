// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, Vec, u32 } from '@polkadot/types';
import type { AccountId, BlockNumber, Hash, Weight } from '@polkadot/types/interfaces/runtime';

/** @name ChallengeGameOf */
export interface ChallengeGameOf extends Struct {
  readonly propertyHash: Hash;
  readonly challenges: Vec<Hash>;
  readonly decision: Decision;
  readonly createdBlock: BlockNumber;
}

/** @name Decision */
export interface Decision extends Enum {
  readonly isUndecided: boolean;
  readonly isTrue: boolean;
  readonly isFalse: boolean;
}

/** @name PredicateContractOf */
export interface PredicateContractOf extends Struct {
  readonly predicateHash: Hash;
  readonly inputs: Bytes;
}

/** @name PredicateHash */
export interface PredicateHash extends Hash {}

/** @name PrefabOvmModule */
export interface PrefabOvmModule extends Struct {
  readonly scheduleVersion: u32;
  readonly code: Bytes;
}

/** @name Property */
export interface Property extends Struct {
  readonly predicateAddress: AccountId;
  readonly inputs: Vec<Bytes>;
}

/** @name PropertyOf */
export interface PropertyOf extends Struct {
  readonly predicateAddress: AccountId;
  readonly inputs: Vec<Bytes>;
}

/** @name Schedule */
export interface Schedule extends Struct {
  readonly version: u32;
  readonly putCodePerByteCost: Weight;
}

export type PHANTOM_OVM = 'ovm';
