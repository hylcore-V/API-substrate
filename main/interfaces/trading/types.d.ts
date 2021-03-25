import type { Enum, Struct, Vec } from '@polkadot/types';
import type { AccountId, Balance, Moment } from '@polkadot/types/interfaces/runtime';
/** @name Offer */
export interface Offer extends Struct {
    readonly buyer: AccountId;
    readonly sender: AccountId;
    readonly contracts: Vec<AccountId>;
    readonly amount: Balance;
    readonly expired: Moment;
    readonly state: OfferState;
}
/** @name OfferOf */
export interface OfferOf extends Offer {
}
/** @name OfferState */
export interface OfferState extends Enum {
    readonly isWaiting: boolean;
    readonly isReject: boolean;
    readonly isAccept: boolean;
}
export declare type PHANTOM_TRADING = 'trading';
