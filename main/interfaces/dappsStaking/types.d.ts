import type { BTreeMap, Compact, Option, Struct, Vec, bool } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { AccountId, Balance } from '@polkadot/types/interfaces/runtime';
import type { EraIndex } from '@polkadot/types/interfaces/staking';
/** @name EraStakingPoints */
export interface EraStakingPoints extends Struct {
    readonly total: Balance;
    readonly individual: BTreeMap<AccountId, Balance>;
}
/** @name Nominations */
export interface Nominations extends Struct {
    readonly targets: Vec<ITuple<[AccountId, Balance]>>;
    readonly submittedIn: EraIndex;
    readonly suppressed: bool;
}
/** @name StakingLedger */
export interface StakingLedger extends Struct {
    readonly stash: AccountId;
    readonly total: Compact<Balance>;
    readonly active: Compact<Balance>;
    readonly unlocking: Vec<UnlockChunk>;
    readonly lastReward: Option<EraIndex>;
}
/** @name UnlockChunk */
export interface UnlockChunk extends Struct {
    readonly value: Compact<Balance>;
    readonly era: Compact<EraIndex>;
}
export declare type PHANTOM_DAPPSSTAKING = 'dappsStaking';
