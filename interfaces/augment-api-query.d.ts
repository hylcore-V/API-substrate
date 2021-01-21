import type { Bytes, Option, Vec, bool, u32, u64 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { EraStakingPoints, Parameters, StakingParameters, VoteCounts } from '@plasm/types/interfaces/dappsStaking';
import type { ChallengeGameOf, PredicateContractOf, PredicateHash, PrefabOvmModule } from '@plasm/types/interfaces/ovm';
import type { AuthorityVote, Claim, ClaimId, DollarRate } from '@plasm/types/interfaces/plasmLockdrop';
import type { RangeOf } from '@plasm/types/interfaces/plasma';
import type { OfferOf } from '@plasm/types/interfaces/trading';
import type { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import type { BabeAuthorityWeight, MaybeRandomness, NextConfigDescriptor, Randomness } from '@polkadot/types/interfaces/babe';
import type { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { CodeHash, ContractInfo, PrefabWasmModule, Schedule } from '@polkadot/types/interfaces/contracts';
import type { EthBlock, EthReceipt, EthTransaction, EthTransactionStatus } from '@polkadot/types/interfaces/eth';
import type { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import type { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, ExtrinsicsWeight, H160, H256, Hash, KeyTypeId, Moment, Perbill, Releases, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import type { ActiveEraInfo, EraIndex, Forcing, Nominations, RewardDestination, StakingLedger } from '@polkadot/types/interfaces/staking';
import type { AccountInfo, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
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
             * Current slot number.
             **/
            currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []>;
            /**
             * Current epoch index.
             **/
            epochIndex: AugmentedQuery<ApiType, () => Observable<u64>, []>;
            /**
             * The slot at which the first epoch actually started. This is 0
             * until the first block of the chain.
             **/
            genesisSlot: AugmentedQuery<ApiType, () => Observable<u64>, []>;
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
             * NOTE: This is only used in the case that this module is used to store balances.
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
             * A mapping from an original code hash to the original code, untouched by instrumentation.
             **/
            pristineCode: AugmentedQuery<ApiType, (arg: CodeHash | string | Uint8Array) => Observable<Option<Bytes>>, [CodeHash]>;
        };
        dappsStaking: {
            /**
             * Votes for pairs of an account and a contract
             **/
            accountsVote: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<VoteCounts>, [AccountId, AccountId]>;
            /**
             * Map from all locked "stash" accounts to the controller account.
             **/
            bonded: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<AccountId>>, [AccountId]>;
            contractsUntreatedEra: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<EraIndex>, [AccountId]>;
            contractVotesUntreatedEra: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<EraIndex>, [AccountId]>;
            /**
             * The map from nominator stash key to the set of stash keys of all contracts to nominate.
             *
             * NOTE: is private so that we can ensure upgraded before all typical accesses.
             * Direct storage APIs can still bypass this protection.
             **/
            dappsNominations: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<Nominations>>, [AccountId]>;
            /**
             * Similarly to `ErasStakers` this holds the parameters of contracts.
             *
             * This is keyed first by the era index to allow bulk deletion and then the contracts account.
             *
             * Is it removed after `HISTORY_DEPTH` eras.
             **/
            erasContractsParameters: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Option<StakingParameters>>, [EraIndex, AccountId]>;
            /**
             * The total amounts of staking for each nominators
             **/
            erasNominateTotals: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<BalanceOf>, [EraIndex, AccountId]>;
            /**
             * Rewards of stakers for contracts(called by "Dapps Nominator") at era.
             *
             * This is keyed first by the era index, 2nd keyed contract account to allow the stash account.
             * Rewards for the last `HISTORY_DEPTH` eras.
             *
             * If reward hasn't been set or has been removed then 0 reward is returned.
             **/
            erasStakingPoints: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<EraStakingPoints>, [EraIndex, AccountId]>;
            /**
             * The total amount staked for the last `HISTORY_DEPTH` eras.
             * If total hasn't been set or has been removed then 0 stake is returned.
             **/
            erasTotalStake: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<BalanceOf>, [EraIndex]>;
            /**
             * Votes for pairs of an era and a contract
             **/
            erasVotes: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<VoteCounts>, [EraIndex, AccountId]>;
            /**
             * Map from all (unlocked) "controller" accounts to the info regarding the staking.
             **/
            ledger: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<StakingLedger>>, [AccountId]>;
            nominatorsUntreatedEra: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<EraIndex>, [AccountId]>;
            /**
             * Where the reward payment should be made. Keyed by stash.
             **/
            payee: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<RewardDestination>, [AccountId]>;
            /**
             * Storage version of the pallet.
             *
             * This is set to v1.0.0 for new networks.
             **/
            storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
            /**
             * The total amounts of staking for pairs of nominator and contract
             **/
            totalStakes: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<BalanceOf>, [AccountId, AccountId]>;
            /**
             * The already untreated era is EraIndex.
             **/
            untreatedEra: AugmentedQuery<ApiType, () => Observable<EraIndex>, []>;
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
        operator: {
            /**
             * A mapping from operated contract by operator to it.
             **/
            contractHasOperator: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<AccountId>>, [AccountId]>;
            /**
             * A mapping from contract to it's parameters.
             **/
            contractParameters: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<Parameters>>, [AccountId]>;
            /**
             * A mapping from operators to operated contracts by them.
             **/
            operatorHasContracts: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<AccountId>>, [AccountId]>;
        };
        ovm: {
            /**
             * Current cost schedule for contracts.
             **/
            currentSchedule: AugmentedQuery<ApiType, () => Observable<Schedule>, []>;
            /**
             * Mapping the game id to Challenge Game.
             **/
            games: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<ChallengeGameOf>>, [Hash]>;
            /**
             * A mapping between an original code hash and instrumented ovm(predicate) code, ready for execution.
             **/
            predicateCache: AugmentedQuery<ApiType, (arg: PredicateHash | string | Uint8Array) => Observable<Option<PrefabOvmModule>>, [PredicateHash]>;
            /**
             * A mapping from an original code hash to the original code, untouched by instrumentation.
             **/
            predicateCodes: AugmentedQuery<ApiType, (arg: PredicateHash | string | Uint8Array) => Observable<Option<Bytes>>, [PredicateHash]>;
            /**
             * Mapping the predicate address to Predicate.
             * Predicate is handled similar to contracts.
             **/
            predicates: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<PredicateContractOf>>, [AccountId]>;
        };
        plasma: {
            /**
             * Single aggregator address: AggregatorId
             **/
            aggregatorAddress: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountId>, [AccountId]>;
            /**
             * History of Merkle Root
             **/
            blocks: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: BlockNumber | AnyNumber | Uint8Array) => Observable<Hash>, [AccountId, BlockNumber]>;
            /**
             * Range's Checkpoints.
             **/
            checkpoints: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: Hash | string | Uint8Array) => Observable<bool>, [AccountId, Hash]>;
            /**
             * Current block number of commitment chain: BlockNumber
             **/
            currentBlock: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<BlockNumber>, [AccountId]>;
            /**
             * DepositedRanges are currently deposited ranges.
             **/
            depositedRanges: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: BalanceOf | AnyNumber | Uint8Array) => Observable<RangeOf>, [AccountId, BalanceOf]>;
            /**
             * mapping from Plapps address to ERC20 based contract address.
             **/
            erc20: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountId>, [AccountId]>;
            /**
             * mapping from Plapps address to ExitDeposit predicate address.
             **/
            exitDepositPredicate: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountId>, [AccountId]>;
            /**
             * mapping from Plapps address to Exit predicate address.
             **/
            exitPredicate: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountId>, [AccountId]>;
            /**
             * predicate address => payout address
             **/
            payout: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountId>, [AccountId]>;
            /**
             * mapping from Plapps address to StateUpdate predicate address.
             **/
            stateUpdatePredicate: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountId>, [AccountId]>;
            /**
             * TotalDeposited is the most right coin id which has been deposited.
             **/
            totalDeposited: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<BalanceOf>, [AccountId]>;
        };
        plasmLockdrop: {
            /**
             * Lockdrop alpha parameter, where α ∈ [0; 1]
             **/
            alpha: AugmentedQuery<ApiType, () => Observable<Perbill>, []>;
            /**
             * Token claim requests.
             **/
            claims: AugmentedQuery<ApiType, (arg: ClaimId | string | Uint8Array) => Observable<Claim>, [ClaimId]>;
            /**
             * Lockdrop dollar rate parameter: BTC, ETH.
             **/
            dollarRate: AugmentedQuery<ApiType, () => Observable<ITuple<[DollarRate, DollarRate]>>, []>;
            /**
             * Lockdrop dollar rate median filter table: Time, BTC, ETH.
             **/
            dollarRateF: AugmentedQuery<ApiType, (arg: AuthorityId | string | Uint8Array) => Observable<ITuple<[Moment, DollarRate, DollarRate]>>, [AuthorityId]>;
            /**
             * Double vote prevention registry.
             **/
            hasVote: AugmentedQueryDoubleMap<ApiType, (key1: AuthorityId | string | Uint8Array, key2: ClaimId | string | Uint8Array) => Observable<bool>, [AuthorityId, ClaimId]>;
            /**
             * List of lockdrop authority id's.
             **/
            keys: AugmentedQuery<ApiType, () => Observable<Vec<AuthorityId>>, []>;
            /**
             * Timestamp bounds of lockdrop held period.
             **/
            lockdropBounds: AugmentedQuery<ApiType, () => Observable<ITuple<[BlockNumber, BlockNumber]>>, []>;
            /**
             * How much positive votes requered to approve claim.
             * Positive votes = approve votes - decline votes.
             **/
            positiveVotes: AugmentedQuery<ApiType, () => Observable<AuthorityVote>, []>;
            /**
             * Offchain lock check requests made within this block execution.
             **/
            requests: AugmentedQuery<ApiType, () => Observable<Vec<ClaimId>>, []>;
            /**
             * How much authority votes module should receive to decide claim result.
             **/
            voteThreshold: AugmentedQuery<ApiType, () => Observable<AuthorityVote>, []>;
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
            blockWeight: AugmentedQuery<ApiType, () => Observable<ExtrinsicsWeight>, []>;
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
             * Extrinsics root of the current block, also part of the block header.
             **/
            extrinsicsRoot: AugmentedQuery<ApiType, () => Observable<Hash>, []>;
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
        trading: {
            /**
             * A mapping from the offering account id to Offer
             **/
            offers: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<OfferOf>>, [AccountId]>;
        };
        transactionPayment: {
            nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>, []>;
            storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
        };
    }
    interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
    }
}
