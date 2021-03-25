import type { Bytes, Option, Vec, bool, u32, u64 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import type { BabeAuthorityWeight, MaybeRandomness, NextConfigDescriptor, Randomness } from '@polkadot/types/interfaces/babe';
import type { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { CodeHash, ContractInfo, DeletedContract, PrefabWasmModule, Schedule } from '@polkadot/types/interfaces/contracts';
import type { EthBlock, EthReceipt, EthTransaction, EthTransactionStatus } from '@polkadot/types/interfaces/eth';
import type { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import type { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import type { DeferredOffenceOf, Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import type { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, H160, H256, Hash, KeyTypeId, Moment, Releases, Slot, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { Scheduled, TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import type { ActiveEraInfo, EraIndex, Forcing } from '@polkadot/types/interfaces/staking';
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { ApiTypes } from '@polkadot/api/types';
declare module '@polkadot/api/types/storage' {
    interface AugmentedQueries<ApiType> {
        authorship: {
            /**
             * Author of current block.
             **/
            author: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
            /**
             * Whether uncles were already set in this block.
             **/
            didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>, []>;
            /**
             * Uncles
             **/
            uncles: AugmentedQuery<ApiType, () => Observable<Vec<UncleEntryItem>>, []>;
        };
        babe: {
            /**
             * Current epoch authorities.
             **/
            authorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>, []>;
            /**
             * Temporary value (cleared at block finalization) that includes the VRF output generated
             * at this block. This field should always be populated during block processing unless
             * secondary plain slots are enabled (which don't contain a VRF output).
             **/
            authorVrfRandomness: AugmentedQuery<ApiType, () => Observable<MaybeRandomness>, []>;
            /**
             * Current slot number.
             **/
            currentSlot: AugmentedQuery<ApiType, () => Observable<Slot>, []>;
            /**
             * Current epoch index.
             **/
            epochIndex: AugmentedQuery<ApiType, () => Observable<u64>, []>;
            /**
             * The slot at which the first epoch actually started. This is 0
             * until the first block of the chain.
             **/
            genesisSlot: AugmentedQuery<ApiType, () => Observable<Slot>, []>;
            /**
             * Temporary value (cleared at block finalization) which is `Some`
             * if per-block initialization has already been called for current block.
             **/
            initialized: AugmentedQuery<ApiType, () => Observable<Option<MaybeRandomness>>, []>;
            /**
             * How late the current block is compared to its parent.
             *
             * This entry is populated as part of block execution and is cleaned up
             * on block finalization. Querying this storage entry outside of block
             * execution context should always yield zero.
             **/
            lateness: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
            /**
             * Next epoch authorities.
             **/
            nextAuthorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>, []>;
            /**
             * Next epoch configuration, if changed.
             **/
            nextEpochConfig: AugmentedQuery<ApiType, () => Observable<Option<NextConfigDescriptor>>, []>;
            /**
             * Next epoch randomness.
             **/
            nextRandomness: AugmentedQuery<ApiType, () => Observable<Randomness>, []>;
            /**
             * The epoch randomness for the *current* epoch.
             *
             * # Security
             *
             * This MUST NOT be used for gambling, as it can be influenced by a
             * malicious validator in the short term. It MAY be used in many
             * cryptographic protocols, however, so long as one remembers that this
             * (like everything else on-chain) it is public. For example, it can be
             * used where a number is needed that cannot have been chosen by an
             * adversary, for purposes such as public-coin zero-knowledge proofs.
             **/
            randomness: AugmentedQuery<ApiType, () => Observable<Randomness>, []>;
            /**
             * Randomness under construction.
             *
             * We make a tradeoff between storage accesses and list length.
             * We store the under-construction randomness in segments of up to
             * `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
             *
             * Once a segment reaches this length, we begin the next one.
             * We reset all segments and return to `0` at the beginning of every
             * epoch.
             **/
            segmentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []>;
            /**
             * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
             **/
            underConstruction: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Randomness>>, [u32]>;
        };
        balances: {
            /**
             * The balance of an account.
             *
             * NOTE: This is only used in the case that this pallet is used to store balances.
             **/
            account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountData>, [AccountId]>;
            /**
             * Any liquidity locks on some account balances.
             * NOTE: Should only be accessed when setting, changing and freeing a lock.
             **/
            locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<BalanceLock>>, [AccountId]>;
            /**
             * Storage version of the pallet.
             *
             * This is set to v2.0.0 for new networks.
             **/
            storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
            /**
             * The total units issued in the system.
             **/
            totalIssuance: AugmentedQuery<ApiType, () => Observable<Balance>, []>;
        };
        contracts: {
            /**
             * The subtrie counter.
             **/
            accountCounter: AugmentedQuery<ApiType, () => Observable<u64>, []>;
            /**
             * A mapping between an original code hash and instrumented wasm code, ready for execution.
             **/
            codeStorage: AugmentedQuery<ApiType, (arg: CodeHash | string | Uint8Array) => Observable<Option<PrefabWasmModule>>, [CodeHash]>;
            /**
             * The code associated with a given account.
             *
             * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
             **/
            contractInfoOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ContractInfo>>, [AccountId]>;
            /**
             * Current cost schedule for contracts.
             **/
            currentSchedule: AugmentedQuery<ApiType, () => Observable<Schedule>, []>;
            /**
             * Evicted contracts that await child trie deletion.
             *
             * Child trie deletion is a heavy operation depending on the amount of storage items
             * stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
             **/
            deletionQueue: AugmentedQuery<ApiType, () => Observable<Vec<DeletedContract>>, []>;
            /**
             * A mapping from an original code hash to the original code, untouched by instrumentation.
             **/
            pristineCode: AugmentedQuery<ApiType, (arg: CodeHash | string | Uint8Array) => Observable<Option<Bytes>>, [CodeHash]>;
        };
        ethereum: {
            /**
             * The current Ethereum block.
             **/
            currentBlock: AugmentedQuery<ApiType, () => Observable<Option<EthBlock>>, []>;
            /**
             * The current Ethereum receipts.
             **/
            currentReceipts: AugmentedQuery<ApiType, () => Observable<Option<Vec<EthReceipt>>>, []>;
            /**
             * The current transaction statuses.
             **/
            currentTransactionStatuses: AugmentedQuery<ApiType, () => Observable<Option<Vec<EthTransactionStatus>>>, []>;
            /**
             * Current building block's transactions and receipts.
             **/
            pending: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[EthTransaction, EthTransactionStatus, EthReceipt]>>>, []>;
        };
        evm: {
            accountCodes: AugmentedQuery<ApiType, (arg: H160 | string | Uint8Array) => Observable<Bytes>, [H160]>;
            accountStorages: AugmentedQueryDoubleMap<ApiType, (key1: H160 | string | Uint8Array, key2: H256 | string | Uint8Array) => Observable<H256>, [H160, H256]>;
        };
        grandpa: {
            /**
             * The number of changes (both in terms of keys and underlying economic responsibilities)
             * in the "set" of Grandpa validators from genesis.
             **/
            currentSetId: AugmentedQuery<ApiType, () => Observable<SetId>, []>;
            /**
             * next block number where we can force a change.
             **/
            nextForced: AugmentedQuery<ApiType, () => Observable<Option<BlockNumber>>, []>;
            /**
             * Pending change: (signaled at, scheduled change).
             **/
            pendingChange: AugmentedQuery<ApiType, () => Observable<Option<StoredPendingChange>>, []>;
            /**
             * A mapping from grandpa set ID to the index of the *most recent* session for which its
             * members were responsible.
             *
             * TWOX-NOTE: `SetId` is not under user control.
             **/
            setIdSession: AugmentedQuery<ApiType, (arg: SetId | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>, [SetId]>;
            /**
             * `true` if we are currently stalled.
             **/
            stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[BlockNumber, BlockNumber]>>>, []>;
            /**
             * State of the current authority set.
             **/
            state: AugmentedQuery<ApiType, () => Observable<StoredState>, []>;
        };
        imOnline: {
            /**
             * For each session index, we keep a mapping of `ValidatorId<T>` to the
             * number of blocks authored by the given authority.
             **/
            authoredBlocks: AugmentedQueryDoubleMap<ApiType, (key1: SessionIndex | AnyNumber | Uint8Array, key2: ValidatorId | string | Uint8Array) => Observable<u32>, [SessionIndex, ValidatorId]>;
            /**
             * The block number after which it's ok to send heartbeats in current session.
             *
             * At the beginning of each session we set this to a value that should
             * fall roughly in the middle of the session duration.
             * The idea is to first wait for the validators to produce a block
             * in the current session, so that the heartbeat later on will not be necessary.
             **/
            heartbeatAfter: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
            /**
             * The current set of keys that may issue a heartbeat.
             **/
            keys: AugmentedQuery<ApiType, () => Observable<Vec<AuthorityId>>, []>;
            /**
             * For each session index, we keep a mapping of `AuthIndex` to
             * `offchain::OpaqueNetworkState`.
             **/
            receivedHeartbeats: AugmentedQueryDoubleMap<ApiType, (key1: SessionIndex | AnyNumber | Uint8Array, key2: AuthIndex | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [SessionIndex, AuthIndex]>;
        };
        indices: {
            /**
             * The lookup from index to account.
             **/
            accounts: AugmentedQuery<ApiType, (arg: AccountIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId, BalanceOf, bool]>>>, [AccountIndex]>;
        };
        nicks: {
            /**
             * The lookup table for names.
             **/
            nameOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ITuple<[Bytes, BalanceOf]>>>, [AccountId]>;
        };
        offences: {
            /**
             * A vector of reports of the same kind that happened at the same time slot.
             **/
            concurrentReportsIndex: AugmentedQueryDoubleMap<ApiType, (key1: Kind | string | Uint8Array, key2: OpaqueTimeSlot | string | Uint8Array) => Observable<Vec<ReportIdOf>>, [Kind, OpaqueTimeSlot]>;
            /**
             * Deferred reports that have been rejected by the offence handler and need to be submitted
             * at a later time.
             **/
            deferredOffences: AugmentedQuery<ApiType, () => Observable<Vec<DeferredOffenceOf>>, []>;
            /**
             * The primary structure that holds all offence records keyed by report identifiers.
             **/
            reports: AugmentedQuery<ApiType, (arg: ReportIdOf | string | Uint8Array) => Observable<Option<OffenceDetails>>, [ReportIdOf]>;
            /**
             * Enumerates all reports of a kind along with the time they happened.
             *
             * All reports are sorted by the time of offence.
             *
             * Note that the actual type of this mapping is `Vec<u8>`, this is because values of
             * different types are not supported at the moment so we are doing the manual serialization.
             **/
            reportsByKindIndex: AugmentedQuery<ApiType, (arg: Kind | string | Uint8Array) => Observable<Bytes>, [Kind]>;
        };
        plasmRewards: {
            /**
             * The active era information, it holds index and start.
             *
             * The active era is the era currently rewarded.
             * Validator set of this era must be equal to `SessionInterface::validators`.
             **/
            activeEra: AugmentedQuery<ApiType, () => Observable<Option<ActiveEraInfo>>, []>;
            /**
             * A mapping from still-bonded eras to the first session index of that era.
             *
             * Must contains information for eras for the range:
             * `[active_era - bounding_duration; active_era]`
             **/
            bondedEras: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[EraIndex, SessionIndex]>>>, []>;
            /**
             * The current era index.
             *
             * This is the latest planned era, depending on how session module queues the validator
             * set, it might be active or not.
             **/
            currentEra: AugmentedQuery<ApiType, () => Observable<Option<EraIndex>>, []>;
            /**
             * The session index at which the era start for the last `HISTORY_DEPTH` eras
             **/
            erasStartSessionIndex: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>, [EraIndex]>;
            /**
             * True if the next session change will be a new era regardless of index.
             **/
            forceEra: AugmentedQuery<ApiType, () => Observable<Forcing>, []>;
            /**
             * This is the compensation paid for the dapps operator of the Plasm Network.
             * This is stored on a per-era basis.
             **/
            forDappsEraReward: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Option<BalanceOf>>, [EraIndex]>;
            /**
             * This is the compensation paid for the security of the Plasm Network.
             * This is stored on a per-era basis.
             **/
            forSecurityEraReward: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Option<BalanceOf>>, [EraIndex]>;
            /**
             * Number of era to keep in history.
             *
             * Information is kept for eras in `[current_era - history_depth; current_era]`
             *
             * Must be more than the number of era delayed by session otherwise.
             * i.e. active era must always be in history.
             * i.e. `active_era > current_era - history_depth` must be guaranteed.
             *
             * 24 * 28 = 672 eras is roughly 28 days on current Plasm Network.
             * That seems like a reasonable length of time for users to claim a payout
             **/
            historyDepth: AugmentedQuery<ApiType, () => Observable<u32>, []>;
            /**
             * Storage version of the pallet.
             *
             * This is set to v1.0.0 for new networks.
             **/
            storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
        };
        plasmValidator: {
            /**
             * The currently elected validator set keyed by stash account ID.
             **/
            electedValidators: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Option<Vec<AccountId>>>, [EraIndex]>;
            /**
             * The already untreated era is EraIndex.
             **/
            untreatedEra: AugmentedQuery<ApiType, () => Observable<EraIndex>, []>;
            /**
             * Set of next era accounts that can validate blocks.
             **/
            validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []>;
        };
        randomnessCollectiveFlip: {
            /**
             * Series of block headers from the last 81 blocks that acts as random seed material. This
             * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
             * the oldest hash.
             **/
            randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []>;
        };
        scheduler: {
            /**
             * Items to be executed, indexed by the block number that they should be executed on.
             **/
            agenda: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<Option<Scheduled>>>, [BlockNumber]>;
            /**
             * Lookup from identity to the block number and index of the task.
             **/
            lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<TaskAddress>>, [Bytes]>;
            /**
             * Storage version of the pallet.
             *
             * New networks start with last version.
             **/
            storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
        };
        session: {
            /**
             * Current index of the session.
             **/
            currentIndex: AugmentedQuery<ApiType, () => Observable<SessionIndex>, []>;
            /**
             * Indices of disabled validators.
             *
             * The set is cleared when `on_session_ending` returns a new set of identities.
             **/
            disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []>;
            /**
             * The owner of a key. The key is the `KeyTypeId` + the encoded key.
             **/
            keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[KeyTypeId, Bytes]> | [KeyTypeId | AnyNumber | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<ValidatorId>>, [ITuple<[KeyTypeId, Bytes]>]>;
            /**
             * The next session keys for a validator.
             **/
            nextKeys: AugmentedQuery<ApiType, (arg: ValidatorId | string | Uint8Array) => Observable<Option<Keys>>, [ValidatorId]>;
            /**
             * True if the underlying economic identities or weighting behind the validators
             * has changed in the queued validator set.
             **/
            queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []>;
            /**
             * The queued keys for the next session. When the next session begins, these keys
             * will be used to determine the validator's session keys.
             **/
            queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ValidatorId, Keys]>>>, []>;
            /**
             * The current set of validators.
             **/
            validators: AugmentedQuery<ApiType, () => Observable<Vec<ValidatorId>>, []>;
        };
        sudo: {
            /**
             * The `AccountId` of the sudo key.
             **/
            key: AugmentedQuery<ApiType, () => Observable<AccountId>, []>;
        };
        system: {
            /**
             * The full account information for a particular account ID.
             **/
            account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountInfo>, [AccountId]>;
            /**
             * Total length (in bytes) for all extrinsics put together, for the current block.
             **/
            allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
            /**
             * Map of block numbers to block hashes.
             **/
            blockHash: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Hash>, [BlockNumber]>;
            /**
             * The current weight for the block.
             **/
            blockWeight: AugmentedQuery<ApiType, () => Observable<ConsumedWeight>, []>;
            /**
             * Digest of the current block, also part of the block header.
             **/
            digest: AugmentedQuery<ApiType, () => Observable<DigestOf>, []>;
            /**
             * The number of events in the `Events<T>` list.
             **/
            eventCount: AugmentedQuery<ApiType, () => Observable<EventIndex>, []>;
            /**
             * Events deposited for the current block.
             **/
            events: AugmentedQuery<ApiType, () => Observable<Vec<EventRecord>>, []>;
            /**
             * Mapping between a topic (represented by T::Hash) and a vector of indexes
             * of events in the `<Events<T>>` list.
             *
             * All topic vectors have deterministic storage locations depending on the topic. This
             * allows light-clients to leverage the changes trie storage tracking mechanism and
             * in case of changes fetch the list of events of interest.
             *
             * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
             * the `EventIndex` then in case if the topic has the same contents on the next block
             * no notification will be triggered thus the event might be lost.
             **/
            eventTopics: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>, [Hash]>;
            /**
             * The execution phase of the block.
             **/
            executionPhase: AugmentedQuery<ApiType, () => Observable<Option<Phase>>, []>;
            /**
             * Total extrinsics count for the current block.
             **/
            extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
            /**
             * Extrinsics data for the current block (maps an extrinsic's index to its data).
             **/
            extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]>;
            /**
             * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
             **/
            lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<LastRuntimeUpgradeInfo>>, []>;
            /**
             * The current block number being processed. Set by `execute_block`.
             **/
            number: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
            /**
             * Hash of the previous block.
             **/
            parentHash: AugmentedQuery<ApiType, () => Observable<Hash>, []>;
            /**
             * True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
             * (default) if not.
             **/
            upgradedToDualRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
            /**
             * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
             **/
            upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
        };
        timestamp: {
            /**
             * Did the timestamp get updated in this block?
             **/
            didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []>;
            /**
             * Current time for the current block.
             **/
            now: AugmentedQuery<ApiType, () => Observable<Moment>, []>;
        };
        transactionPayment: {
            nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>, []>;
            storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
        };
    }
    interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
    }
}
