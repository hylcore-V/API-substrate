// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, U256, Vec, bool, u32 } from '@polkadot/types';
import type { Parameters } from '@plasm/types/interfaces/dappsStaking';
import type { Property } from '@plasm/types/interfaces/ovm';
import type { ClaimId, DollarRate } from '@plasm/types/interfaces/plasmLockdrop';
import type { Checkpoint, Range } from '@plasm/types/interfaces/plasma';
import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { EvmLog } from '@polkadot/types/interfaces/evm';
import type { AuthorityList } from '@polkadot/types/interfaces/grandpa';
import type { AccountId, AccountIndex, Balance, BlockNumber, H160, H256, Hash } from '@polkadot/types/interfaces/runtime';
import type { SessionIndex } from '@polkadot/types/interfaces/session';
import type { EraIndex } from '@polkadot/types/interfaces/staking';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    balances: {
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId, AccountId, Balance, BalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    contracts: {
      /**
       * Code with the specified hash has been stored.
       * \[code_hash\]
       **/
      CodeStored: AugmentedEvent<ApiType, [Hash]>;
      /**
       * An event deposited upon execution of a contract from the account.
       * \[account, data\]
       **/
      ContractExecution: AugmentedEvent<ApiType, [AccountId, Bytes]>;
      /**
       * Contract has been evicted and is now in tombstone state.
       * \[contract, tombstone\]
       * 
       * # Params
       * 
       * - `contract`: `AccountId`: The account ID of the evicted contract.
       * - `tombstone`: `bool`: True if the evicted contract left behind a tombstone.
       **/
      Evicted: AugmentedEvent<ApiType, [AccountId, bool]>;
      /**
       * Contract deployed by address at the specified address. \[owner, contract\]
       **/
      Instantiated: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * Restoration for a contract has been successful.
       * \[donor, dest, code_hash, rent_allowance\]
       * 
       * # Params
       * 
       * - `donor`: `AccountId`: Account ID of the restoring contract
       * - `dest`: `AccountId`: Account ID of the restored contract
       * - `code_hash`: `Hash`: Code hash of the restored contract
       * - `rent_allowance: `Balance`: Rent allowance of the restored contract
       **/
      Restored: AugmentedEvent<ApiType, [AccountId, AccountId, Hash, Balance]>;
      /**
       * Triggered when the current \[schedule\] is updated.
       **/
      ScheduleUpdated: AugmentedEvent<ApiType, [u32]>;
    };
    dappsStaking: {
      /**
       * An account has bonded this amount.
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      Bonded: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Nominate of stash address.
       **/
      Nominate: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * The amount of minted rewards. (for dapps with nominators)
       **/
      Reward: AugmentedEvent<ApiType, [Balance, Balance]>;
      /**
       * The total amount of minted rewards for dapps.
       **/
      TotalDappsRewards: AugmentedEvent<ApiType, [EraIndex, Balance]>;
      /**
       * An account has unbonded this amount.
       **/
      Unbonded: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
       * from the unlocking queue.
       **/
      Withdrawn: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    ethereum: {
      /**
       * An ethereum transaction was successfully executed. [from, transaction_hash]
       **/
      Executed: AugmentedEvent<ApiType, [H160, H256]>;
    };
    evm: {
      /**
       * A deposit has been made at a given address. \[sender, address, value\]
       **/
      BalanceDeposit: AugmentedEvent<ApiType, [AccountId, H160, U256]>;
      /**
       * A withdrawal has been made from a given address. \[sender, address, value\]
       **/
      BalanceWithdraw: AugmentedEvent<ApiType, [AccountId, H160, U256]>;
      /**
       * A contract has been created at given \[address\].
       **/
      Created: AugmentedEvent<ApiType, [H160]>;
      /**
       * A \[contract\] was attempted to be created, but the execution failed.
       **/
      CreatedFailed: AugmentedEvent<ApiType, [H160]>;
      /**
       * A \[contract\] has been executed successfully with states applied.
       **/
      Executed: AugmentedEvent<ApiType, [H160]>;
      /**
       * A \[contract\] has been executed with errors. States are reverted with only gas fees applied.
       **/
      ExecutedFailed: AugmentedEvent<ApiType, [H160]>;
      /**
       * Ethereum events from contracts.
       **/
      Log: AugmentedEvent<ApiType, [EvmLog]>;
    };
    grandpa: {
      /**
       * New authority set has been applied. \[authority_set\]
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
       * A account index was assigned. \[who, index\]
       **/
      IndexAssigned: AugmentedEvent<ApiType, [AccountId, AccountIndex]>;
      /**
       * A account index has been freed up (unassigned). \[index\]
       **/
      IndexFreed: AugmentedEvent<ApiType, [AccountIndex]>;
      /**
       * A account index has been frozen to its current account ID. \[who, index\]
       **/
      IndexFrozen: AugmentedEvent<ApiType, [AccountIndex, AccountId]>;
    };
    nicks: {
      /**
       * A name was changed. \[who\]
       **/
      NameChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A name was cleared, and the given balance returned. \[who, deposit\]
       **/
      NameCleared: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was forcibly set. \[target\]
       **/
      NameForced: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A name was removed and the given balance slashed. \[target, deposit\]
       **/
      NameKilled: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was set. \[who\]
       **/
      NameSet: AugmentedEvent<ApiType, [AccountId]>;
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
    ovm: {
      /**
       * (game_id: Hash, challengeGameId: Hash)
       **/
      ChallengeRemoved: AugmentedEvent<ApiType, [Hash, Hash]>;
      /**
       * (predicate_address: AccountId);
       **/
      InstantiatePredicate: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * (gameId: Hash, challenge_game_id: Hash)
       **/
      PropertyChallenged: AugmentedEvent<ApiType, [Hash, Hash]>;
      /**
       * (game_id: Hash, property: Property, created_block: BlockNumber)
       **/
      PropertyClaimed: AugmentedEvent<ApiType, [Hash, Property, BlockNumber]>;
      /**
       * (game_id: Hash, decision: bool)
       **/
      PropertyDecided: AugmentedEvent<ApiType, [Hash, bool]>;
      /**
       * (predicate_address: AccountId);
       **/
      PutPredicate: AugmentedEvent<ApiType, [Hash]>;
    };
    plasma: {
      /**
       * Event definitions (AccountID: PlappsAddress, BlockNumber, Hash: root)
       **/
      BlockSubmitted: AugmentedEvent<ApiType, [AccountId, BlockNumber, Hash]>;
      /**
       * (AccountID: PlappsAddress, checkpointId: Hash, checkpoint: Checkpoint);
       **/
      CheckpointFinalized: AugmentedEvent<ApiType, [AccountId, Hash, Checkpoint]>;
      /**
       * Deplpoyed Plapps. (creator: AccountId, plapps_id: AccountId)
       **/
      Deploy: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * (AccountID: PlappsAddress, new_range: Range)
       **/
      DepositedRangeExtended: AugmentedEvent<ApiType, [AccountId, Range]>;
      /**
       * (AccountID: PlappsAddress, removed_range: Range)
       **/
      DepositedRangeRemoved: AugmentedEvent<ApiType, [AccountId, Range]>;
      /**
       * (AccountID: PlappsAddress, exit_id: Hash)
       **/
      ExitFinalized: AugmentedEvent<ApiType, [AccountId, Hash]>;
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
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [SessionIndex]>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [bool]>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
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
       * well as the error. \[index, error\]
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [u32, DispatchError]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
  }
}
