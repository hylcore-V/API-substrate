import type { Struct, Vec, u128 } from '@polkadot/types';
import type { Property } from '@plasm/types/interfaces/ovm';
import type { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';
/** @name AddressInclusionProof */
export interface AddressInclusionProof extends Struct {
    readonly leafIndex: AccountId;
    readonly leafPosition: Balance;
    readonly siblings: Vec<AddressTreeNode>;
}
/** @name AddressTreeNode */
export interface AddressTreeNode extends Struct {
    readonly data: Hash;
    readonly tokenAddress: AccountId;
}
/** @name Checkpoint */
export interface Checkpoint extends Struct {
    readonly stateUpdate: Property;
}
/** @name Exit */
export interface Exit extends Struct {
    readonly stateUpdate: StateUpdate;
    readonly inclusionProof: InclusionProof;
}
/** @name ExitDeposit */
export interface ExitDeposit extends Struct {
    readonly stateUpdate: StateUpdate;
    readonly checkpoint: Checkpoint;
}
/** @name InclusionProof */
export interface InclusionProof extends Struct {
    readonly addressInclusionProof: AddressInclusionProof;
    readonly intervalInclusionProof: IntervalInclusionProof;
}
/** @name IntervalInclusionProof */
export interface IntervalInclusionProof extends Struct {
    readonly leafIndex: Balance;
    readonly leafPosition: Balance;
    readonly siblings: Vec<IntervalTreeNode>;
}
/** @name IntervalTreeNode */
export interface IntervalTreeNode extends Struct {
    readonly data: Hash;
    readonly start: Balance;
}
/** @name Range */
export interface Range extends Struct {
    readonly start: u128;
    readonly end: u128;
}
/** @name RangeOf */
export interface RangeOf extends Struct {
    readonly start: u128;
    readonly end: u128;
}
/** @name StateUpdate */
export interface StateUpdate extends Struct {
    readonly depositContractAddress: AccountId;
    readonly range: Range;
    readonly blockNumber: BlockNumber;
    readonly stateObject: Property;
}
export declare type PHANTOM_PLASMA = 'plasma';
