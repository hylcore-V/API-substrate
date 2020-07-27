// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Struct, Vec } from '@polkadot/types/codec';
import { u32, u8 } from '@polkadot/types/primitive';
import { AccountId, Hash, BlockNumber, Weight } from '@polkadot/types/interfaces/runtime';

/** @name Decision */
export interface Decision extends Enum {
  readonly isUndecided: boolean;
  readonly isTrue: boolean;
  readonly isFalse: boolean;
}

/** @name ChallengeGameOf */
export interface ChallengeGameOf extends Struct {
  readonly propertyHash: Hash;
  readonly challenges: Vec<Hash>;
  readonly decision: Decision;
  readonly createdBlock: BlockNumber;
}

/** @name PredicateContractOf */
export interface PredicateContractOf extends Struct {
  readonly predicateHash: Hash;
  readonly inputs: Vec<u8>;
}

/** @name PredicateHash */
export interface PredicateHash extends Hash {}

/** @name Schedule */
export interface Schedule extends Struct {
  readonly version: u32;
  readonly putCodePerByteCost: Weight;
}

/** @name PrefabOvmModule */
export interface PrefabOvmModule extends Struct {
  readonly scheduleVersion: u32;
  readonly code: Vec<u8>;
}

/** @name Property */
export interface Property extends Struct {
  readonly predicateAddress: AccountId;
  readonly inputs: Vec<Vec<u8>>;
}

/** @name PropertyOf */
export interface PropertyOf extends Struct {
  readonly predicateAddress: AccountId;
  readonly inputs: Vec<Vec<u8>>;
}