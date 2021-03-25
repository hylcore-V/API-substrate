// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Option, Struct, u32 } from '@polkadot/types';
import type { Moment } from '@polkadot/types/interfaces/runtime';

/** @name ActiveEraInfo */
export interface ActiveEraInfo extends Struct {
  readonly index: EraIndex;
  readonly start: Option<Moment>;
}

/** @name EraIndex */
export interface EraIndex extends u32 {}

/** @name Releases */
export interface Releases extends Enum {
  readonly isV100: boolean;
}

export type PHANTOM_PLASMREWARDS = 'plasmRewards';
