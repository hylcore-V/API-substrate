// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Vec, u32, u64, u8 } from '@polkadot/types';
import type { Codec } from '@polkadot/types/types';
import type { Balance, BalanceOf, BlockNumber, Moment, Perbill, RuntimeDbWeight, Weight } from '@polkadot/types/interfaces/runtime';
import type { SessionIndex } from '@polkadot/types/interfaces/session';
import type { RuntimeVersion } from '@polkadot/types/interfaces/state';
import type { WeightToFeeCoefficient } from '@polkadot/types/interfaces/support';
import type { BlockLength, BlockWeights } from '@polkadot/types/interfaces/system';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/consts' {
  export interface AugmentedConsts<ApiType> {
    babe: {
      [key: string]: Codec;
      /**
       * The number of **slots** that an epoch takes. We couple sessions to
       * epochs, i.e. we start a new session once the new epoch begins.
       * NOTE: Currently it is not possible to change the epoch duration
       * after the chain has started. Attempting to do so will brick block
       * production.
       **/
      epochDuration: u64 & AugmentedConst<ApiType>;
      /**
       * The expected average block time at which BABE should be creating
       * blocks. Since BABE is probabilistic it is not trivial to figure out
       * what the expected average block time should be based on the slot
       * duration and the security parameter `c` (where `1 - c` represents
       * the probability of a slot being empty).
       **/
      expectedBlockTime: Moment & AugmentedConst<ApiType>;
    };
    balances: {
      [key: string]: Codec;
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: Balance & AugmentedConst<ApiType>;
    };
    contracts: {
      [key: string]: Codec;
      /**
       * The maximum number of tries that can be queued for deletion.
       **/
      deletionQueueDepth: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of weight that can be consumed per block for lazy trie removal.
       **/
      deletionWeightLimit: Weight & AugmentedConst<ApiType>;
      /**
       * The balance every contract needs to deposit to stay alive indefinitely.
       * 
       * This is different from the [`Self::TombstoneDeposit`] because this only needs to be
       * deposited while the contract is alive. Costs for additional storage are added to
       * this base cost.
       * 
       * This is a simple way to ensure that contracts with empty storage eventually get deleted by
       * making them pay rent. This creates an incentive to remove them early in order to save rent.
       **/
      depositPerContract: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The balance a contract needs to deposit per storage byte to stay alive indefinitely.
       * 
       * Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day,
       * then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent.
       * But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000,
       * then it would pay 500 BU/day.
       **/
      depositPerStorageByte: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The balance a contract needs to deposit per storage item to stay alive indefinitely.
       * 
       * It works the same as [`Self::DepositPerStorageByte`] but for storage items.
       **/
      depositPerStorageItem: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The maximum length of a contract code in bytes. This limit applies to the instrumented
       * version of the code. Therefore `instantiate_with_code` can fail even when supplying
       * a wasm binary below this maximum size.
       **/
      maxCodeSize: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum nesting level of a call/instantiate stack.
       **/
      maxDepth: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum size of a storage value and event payload in bytes.
       **/
      maxValueSize: u32 & AugmentedConst<ApiType>;
      /**
       * The fraction of the deposit that should be used as rent per block.
       * 
       * When a contract hasn't enough balance deposited to stay alive indefinitely it needs
       * to pay per block for the storage it consumes that is not covered by the deposit.
       * This determines how high this rent payment is per block as a fraction of the deposit.
       **/
      rentFraction: Perbill & AugmentedConst<ApiType>;
      /**
       * Number of block delay an extrinsic claim surcharge has.
       * 
       * When claim surcharge is called by an extrinsic the rent is checked
       * for current_block - delay
       **/
      signedClaimHandicap: BlockNumber & AugmentedConst<ApiType>;
      /**
       * Reward that is received by the party whose touch has led
       * to removal of a contract.
       **/
      surchargeReward: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The minimum amount required to generate a tombstone.
       **/
      tombstoneDeposit: BalanceOf & AugmentedConst<ApiType>;
    };
    indices: {
      [key: string]: Codec;
      /**
       * The deposit needed for reserving an index.
       **/
      deposit: BalanceOf & AugmentedConst<ApiType>;
    };
    nicks: {
      [key: string]: Codec;
      /**
       * The maximum length a name may be.
       **/
      maxLength: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum length a name may be.
       **/
      minLength: u32 & AugmentedConst<ApiType>;
      /**
       * Reservation fee.
       **/
      reservationFee: BalanceOf & AugmentedConst<ApiType>;
    };
    plasmRewards: {
      [key: string]: Codec;
      /**
       * Number of sessions per era.
       **/
      sessionsPerEra: SessionIndex & AugmentedConst<ApiType>;
    };
    system: {
      [key: string]: Codec;
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: BlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: BlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: RuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS85 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u8 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: RuntimeVersion & AugmentedConst<ApiType>;
    };
    timestamp: {
      [key: string]: Codec;
      /**
       * The minimum period between blocks. Beware that this is different to the *expected* period
       * that the block production apparatus provides. Your chosen consensus system will generally
       * work with this to determine a sensible block time. e.g. For Aura, it will be double this
       * period on default settings.
       **/
      minimumPeriod: Moment & AugmentedConst<ApiType>;
    };
    transactionPayment: {
      [key: string]: Codec;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The polynomial that is applied in order to derive fee from weight.
       **/
      weightToFee: Vec<WeightToFeeCoefficient> & AugmentedConst<ApiType>;
    };
  }

  export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
    [key: string]: QueryableModuleConsts;
  }
}
