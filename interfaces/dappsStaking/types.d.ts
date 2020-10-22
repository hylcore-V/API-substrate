import { BTreeMap, Enum, Struct } from '@polkadot/types/codec';
import { bool, u128, u32 } from '@polkadot/types/primitive';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';
/** @name EraStakingPoints */
export interface EraStakingPoints extends Struct {
    readonly total: Balance;
    readonly individual: BTreeMap<AccountId, Balance>;
}
/** @name Parameters */
export interface Parameters extends Struct {
    readonly canBeNominated: bool;
    readonly optionExpired: u128;
    readonly optionP: u32;
}
/** @name Releases */
export interface Releases extends Enum {
    readonly isV100: boolean;
}
/** @name StakingParameters */
export interface StakingParameters extends Struct {
    readonly canBeNominated: bool;
    readonly optionExpired: u128;
    readonly optionP: u32;
}
/** @name VoteCounts */
export interface VoteCounts extends Struct {
    readonly bad: u32;
    readonly good: u32;
}
export declare type PHANTOM_DAPPSSTAKING = 'dappsStaking';
