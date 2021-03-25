import type { Bytes, Vec, bool, u32 } from '@polkadot/types';
import type { Parameters } from '@plasm/types-main/interfaces/operator';
import type { ClaimId, DollarRate } from '@plasm/types-main/interfaces/plasmLockdrop';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { AuthorityList } from '@polkadot/types/interfaces/grandpa';
import type { AccountId, AccountIndex, Balance, Hash } from '@polkadot/types/interfaces/runtime';
import type { SessionIndex } from '@polkadot/types/interfaces/session';
import type { EraIndex } from '@polkadot/types/interfaces/staking';
import type { DispatchError, DispatchInfo } from '@polkadot/types/interfaces/system';
import type { ApiTypes } from '@polkadot/api/types';
declare module '@polkadot/api/types/events' {
    interface AugmentedEvents<ApiType> {
        balances: {
            /**
             * A balance was set by root (who, free, reserved).
             **/
            BalanceSet: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
            /**
             * Some amount was deposited (e.g. for transaction fees).
             **/
            Deposit: AugmentedEvent<ApiType, [AccountId, Balance]>;
            /**
             * An account was removed whose balance was non-zero but below ExistentialDeposit,
             * resulting in an outright loss.
             **/
            DustLost: AugmentedEvent<ApiType, [AccountId, Balance]>;
            /**
             * An account was created with some free balance.
             **/
            Endowed: AugmentedEvent<ApiType, [AccountId, Balance]>;
            /**
             * Transfer succeeded (from, to, value).
             **/
            Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
        };
        contracts: {
            /**
             * Code with the specified hash has been stored.
             **/
            CodeStored: AugmentedEvent<ApiType, [Hash]>;
            /**
             * An event deposited upon execution of a contract from the account.
             **/
            ContractExecution: AugmentedEvent<ApiType, [AccountId, Bytes]>;
            /**
             * A call was dispatched from the given account. The bool signals whether it was
             * successful execution or not.
             **/
            Dispatched: AugmentedEvent<ApiType, [AccountId, bool]>;
            /**
             * Contract has been evicted and is now in tombstone state.
             *
             * # Params
             *
             * - `contract`: `AccountId`: The account ID of the evicted contract.
             * - `tombstone`: `bool`: True if the evicted contract left behind a tombstone.
             **/
            Evicted: AugmentedEvent<ApiType, [AccountId, bool]>;
            /**
             * Contract deployed by address at the specified address.
             **/
            Instantiated: AugmentedEvent<ApiType, [AccountId, AccountId]>;
            /**
             * Restoration for a contract has been initiated.
             *
             * # Params
             *
             * - `donor`: `AccountId`: Account ID of the restoring contract
             * - `dest`: `AccountId`: Account ID of the restored contract
             * - `code_hash`: `Hash`: Code hash of the restored contract
             * - `rent_allowance: `Balance`: Rent allowance of the restored contract
             * - `success`: `bool`: True if the restoration was successful
             **/
            Restored: AugmentedEvent<ApiType, [AccountId, AccountId, Hash, Balance, bool]>;
            /**
             * Triggered when the current schedule is updated.
             **/
            ScheduleUpdated: AugmentedEvent<ApiType, [u32]>;
            /**
             * Transfer happened `from` to `to` with given `value` as part of a `call` or `instantiate`.
             **/
            Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
        };
        grandpa: {
            /**
             * New authority set has been applied.
             **/
            NewAuthorities: AugmentedEvent<ApiType, [AuthorityList]>;
            /**
             * Current authority set has been paused.
             **/
            Paused: AugmentedEvent<ApiType, []>;
            /**
             * Current authority set has been resumed.
             **/
            Resumed: AugmentedEvent<ApiType, []>;
        };
        indices: {
            /**
             * A account index was assigned.
             **/
            IndexAssigned: AugmentedEvent<ApiType, [AccountId, AccountIndex]>;
            /**
             * A account index has been freed up (unassigned).
             **/
            IndexFreed: AugmentedEvent<ApiType, [AccountIndex]>;
        };
        operator: {
            /**
             * When operator changed,
             * it is issued that 1-st Operator AccountId and 2-nd Contract AccountId.
             **/
            SetOperator: AugmentedEvent<ApiType, [AccountId, AccountId]>;
            /**
             * When contract's parameters changed,
             * it is issued that 1-st Contract AccountId and 2-nd the contract's new parameters.
             **/
            SetParameters: AugmentedEvent<ApiType, [AccountId, Parameters]>;
        };
        plasmLockdrop: {
            /**
             * Lockdrop token claim paid
             **/
            ClaimComplete: AugmentedEvent<ApiType, [ClaimId, AccountId, Balance]>;
            /**
             * Lockdrop token claims requested by user
             **/
            ClaimRequest: AugmentedEvent<ApiType, [ClaimId]>;
            /**
             * Lockdrop token claims response by authority
             **/
            ClaimResponse: AugmentedEvent<ApiType, [ClaimId, AuthorityId, bool]>;
            /**
             * New authority list registered
             **/
            NewAuthorities: AugmentedEvent<ApiType, [Vec<AuthorityId>]>;
            /**
             * Dollar rate updated by oracle: BTC, ETH.
             **/
            NewDollarRate: AugmentedEvent<ApiType, [DollarRate, DollarRate]>;
        };
        plasmRewards: {
            /**
             * The whole reward issued in that Era.
             * (era_index: EraIndex, reward: Balance)
             **/
            WholeEraReward: AugmentedEvent<ApiType, [EraIndex, Balance]>;
        };
        plasmValidator: {
            /**
             * Validator set changed.
             **/
            NewValidators: AugmentedEvent<ApiType, [Vec<AccountId>]>;
            /**
             * The total amount of minted rewards for validators.
             **/
            TotalValidatorRewards: AugmentedEvent<ApiType, [EraIndex, Balance]>;
            /**
             * The amount of minted rewards for validators.
             **/
            ValidatorReward: AugmentedEvent<ApiType, [EraIndex, AccountId, Balance]>;
        };
        session: {
            /**
             * New session has happened. Note that the argument is the session index, not the block
             * number as the type might suggest.
             **/
            NewSession: AugmentedEvent<ApiType, [SessionIndex]>;
        };
        sudo: {
            /**
             * The sudoer just switched identity; the old key is supplied.
             **/
            KeyChanged: AugmentedEvent<ApiType, [AccountId]>;
            /**
             * A sudo just took place.
             **/
            Sudid: AugmentedEvent<ApiType, [bool]>;
            /**
             * A sudo just took place.
             **/
            SudoAsDone: AugmentedEvent<ApiType, [bool]>;
        };
        system: {
            /**
             * `:code` was updated.
             **/
            CodeUpdated: AugmentedEvent<ApiType, []>;
            /**
             * An extrinsic failed.
             **/
            ExtrinsicFailed: AugmentedEvent<ApiType, [DispatchError, DispatchInfo]>;
            /**
             * An extrinsic completed successfully.
             **/
            ExtrinsicSuccess: AugmentedEvent<ApiType, [DispatchInfo]>;
            /**
             * An account was reaped.
             **/
            KilledAccount: AugmentedEvent<ApiType, [AccountId]>;
            /**
             * A new account was created.
             **/
            NewAccount: AugmentedEvent<ApiType, [AccountId]>;
        };
        trading: {
            /**
             * When call reject,
             * it is issued arguments:
             * 1: Acceptor account id(current operator and sender)
             * 2: Offer account id
             **/
            Accept: AugmentedEvent<ApiType, [AccountId, AccountId]>;
            /**
             * When call offer,
             * it is issued arguments:
             * 1: New Operator(buyer)
             * 2: Current Operator(sender)
             **/
            Offer: AugmentedEvent<ApiType, [AccountId, AccountId]>;
            /**
             * When call reject,
             * it is issued arguments:
             * 1: Rejector account id(current operator and sender)
             * 2: Offer account id
             **/
            Reject: AugmentedEvent<ApiType, [AccountId, AccountId]>;
            /**
             * When call remove,
             * it is issued arguments:
             * 1: the remover
             **/
            Remove: AugmentedEvent<ApiType, [AccountId]>;
        };
        utility: {
            /**
             * Batch of dispatches completed fully with no error.
             **/
            BatchCompleted: AugmentedEvent<ApiType, []>;
            /**
             * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
             * well as the error.
             **/
            BatchInterrupted: AugmentedEvent<ApiType, [u32, DispatchError]>;
        };
    }
    interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    }
}
