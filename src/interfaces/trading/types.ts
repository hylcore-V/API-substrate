// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, Vec } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name OfferOf */
export interface OfferOf extends Struct {
  readonly buyer: AccountId;
  readonly sender: AccountId;
  readonly contracts: Vec<AccountId>;
  readonly amount: Balance;
  readonly expired: BlockNumber;
  readonly state: OfferState;
}

/** @name OfferState */
export interface OfferState extends Enum {
  readonly isWaiting: boolean;
  readonly isReject: boolean;
  readonly isAccept: boolean;
}

export type PHANTOM_TRADING = 'trading';
