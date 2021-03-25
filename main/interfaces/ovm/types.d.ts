import type { Bytes, Enum, Struct, Vec, u32 } from '@polkadot/types';
import type { AccountId, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';
/** @name ChallengeGame */
export interface ChallengeGame extends Struct {
    readonly property: Property;
    readonly challenges: Vec<Hash>;
    readonly decision: Decision;
    readonly createdBlock: BlockNumber;
}
/** @name Config */
export interface Config extends Struct {
    readonly schedule: Schedule;
    readonly maxDepth: u32;
}
/** @name Decision */
export interface Decision extends Enum {
    readonly isUndecided: boolean;
    readonly isTrue: boolean;
    readonly isFalse: boolean;
}
/** @name PredicateContract */
export interface PredicateContract extends Struct {
    readonly predicateHash: Hash;
    readonly inputs: Bytes;
}
/** @name Property */
export interface Property extends Struct {
    readonly predicateAddress: AccountId;
    readonly inputs: Vec<Bytes>;
}
/** @name Schedule */
export interface Schedule extends Struct {
    readonly version: u32;
    readonly maxStackHeight: u32;
    readonly maxMemoryPages: u32;
    readonly maxTableSize: u32;
}
export declare type PHANTOM_OVM = 'ovm';
