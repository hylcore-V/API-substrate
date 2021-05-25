// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, bool, u128 } from '@polkadot/types';
import type { AccountId, H160 } from '@polkadot/types/interfaces/runtime';

/** @name Parameters */
export interface Parameters extends Struct {
  readonly canBeNominated: bool;
  readonly optionExpired: u128;
  readonly optionP: u128;
}

/** @name SmartContract */
export interface SmartContract extends Enum {
  readonly isWasm: boolean;
  readonly asWasm: AccountId;
  readonly isEvm: boolean;
  readonly asEvm: H160;
}

export type PHANTOM_OPERATOR = 'operator';
