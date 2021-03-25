import type { Bytes, Compact, Option, Vec, u32, u64 } from '@polkadot/types';
import type { AnyNumber } from '@polkadot/types/types';
import type { Parameters } from '@plasm/types-main/interfaces/operator';
import type { AuthorityVote, ClaimId, ClaimVote, Lockdrop, TickerRate } from '@plasm/types-main/interfaces/plasmLockdrop';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { CodeHash, Gas, Schedule } from '@polkadot/types/interfaces/contracts';
import type { EcdsaSignature, Extrinsic, Signature } from '@polkadot/types/interfaces/extrinsics';
import type { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, Call, ChangesTrieConfiguration, H256, KeyValue, LookupSource, Moment, Perbill } from '@polkadot/types/interfaces/runtime';
import type { Keys } from '@polkadot/types/interfaces/session';
import type { EraIndex } from '@polkadot/types/interfaces/staking';
import type { Key } from '@polkadot/types/interfaces/system';
import type { ApiTypes, SubmittableExtrinsic } from '@polkadot/api/types';
declare module '@polkadot/api/types/submittable' {
    interface AugmentedSubmittables<ApiType> {
        balances: {
            /**
             * Exactly as `transfer`, except the origin must be root and the source account may be
             * specified.
             **/
            forceTransfer: AugmentedSubmittable<(source: LookupSource | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, dest: LookupSource | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, LookupSource, Compact<Balance>]>;
            /**
             * Set the balances of a given account.
             *
             * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
             * also decrease the total issuance of the system (`TotalIssuance`).
             * If the new free or reserved balance is below the existential deposit,
             * it will reset the account nonce (`frame_system::AccountNonce`).
             *
             * The dispatch origin for this call is `root`.
             *
             * # <weight>
             * - Independent of the arguments.
             * - Contains a limited number of reads and writes.
             * # </weight>
             **/
            setBalance: AugmentedSubmittable<(who: LookupSource | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, newFree: Compact<Balance> | AnyNumber | Uint8Array, newReserved: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>, Compact<Balance>]>;
            /**
             * Transfer some liquid free balance to another account.
             *
             * `transfer` will set the `FreeBalance` of the sender and receiver.
             * It will decrease the total issuance of the system by the `TransferFee`.
             * If the sender's account is below the existential deposit as a result
             * of the transfer, the account will be reaped.
             *
             * The dispatch origin for this call must be `Signed` by the transactor.
             *
             * # <weight>
             * - Dependent on arguments but not critical, given proper implementations for
             * input config types. See related functions below.
             * - It contains a limited number of reads and writes internally and no complex computation.
             *
             * Related functions:
             *
             * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
             * - Transferring balances to accounts that did not exist before will cause
             * `T::OnNewAccount::on_new_account` to be called.
             * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
             * - `transfer_keep_alive` works the same way as `transfer`, but has an additional
             * check that the transfer will not kill the origin account.
             *
             * # </weight>
             **/
            transfer: AugmentedSubmittable<(dest: LookupSource | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
            /**
             * Same as the [`transfer`] call, but with a check that the transfer will not kill the
             * origin account.
             *
             * 99% of the time you want [`transfer`] instead.
             *
             * [`transfer`]: struct.Module.html#method.transfer
             **/
            transferKeepAlive: AugmentedSubmittable<(dest: LookupSource | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
        };
        contracts: {
            /**
             * Makes a call to an account, optionally transferring some balance.
             *
             * * If the account is a smart-contract account, the associated code will be
             * executed and any value will be transferred.
             * * If the account is a regular account, any value will be transferred.
             * * If no account exists and the call value is not less than `existential_deposit`,
             * a regular account will be created and any value will be transferred.
             **/
            call: AugmentedSubmittable<(dest: LookupSource | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, value: Compact<BalanceOf> | AnyNumber | Uint8Array, gasLimit: Compact<Gas> | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<BalanceOf>, Compact<Gas>, Bytes]>;
            /**
             * Allows block producers to claim a small reward for evicting a contract. If a block producer
             * fails to do so, a regular users will be allowed to claim the reward.
             *
             * If contract is not evicted as a result of this call, no actions are taken and
             * the sender is not eligible for the reward.
             **/
            claimSurcharge: AugmentedSubmittable<(dest: AccountId | string | Uint8Array, auxSender: Option<AccountId> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Option<AccountId>]>;
            /**
             * Instantiates a new contract from the `codehash` generated by `put_code`, optionally transferring some balance.
             *
             * Instantiation is executed as follows:
             *
             * - The destination address is computed based on the sender and hash of the code.
             * - The smart-contract account is created at the computed address.
             * - The `ctor_code` is executed in the context of the newly-created account. Buffer returned
             * after the execution is saved as the `code` of the account. That code will be invoked
             * upon any call received by this account.
             * - The contract is initialized.
             **/
            instantiate: AugmentedSubmittable<(endowment: Compact<BalanceOf> | AnyNumber | Uint8Array, gasLimit: Compact<Gas> | AnyNumber | Uint8Array, codeHash: CodeHash | string | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BalanceOf>, Compact<Gas>, CodeHash, Bytes]>;
            /**
             * Stores the given binary Wasm code into the chain's storage and returns its `codehash`.
             * You can instantiate contracts only with stored code.
             **/
            putCode: AugmentedSubmittable<(gasLimit: Compact<Gas> | AnyNumber | Uint8Array, code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Gas>, Bytes]>;
            /**
             * Updates the schedule for metering contracts.
             *
             * The schedule must have a greater version than the stored schedule.
             **/
            updateSchedule: AugmentedSubmittable<(schedule: Schedule | {
                version?: any;
                maxStackHeight?: any;
                maxMemoryPages?: any;
                maxTableSize?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Schedule]>;
        };
        finalityTracker: {
            /**
             * Hint that the author of this block thinks the best finalized
             * block is the given number.
             **/
            finalHint: AugmentedSubmittable<(hint: Compact<BlockNumber> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BlockNumber>]>;
        };
        grandpa: {
            /**
             * Report some misbehavior.
             **/
            reportMisbehavior: AugmentedSubmittable<(report: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
        };
        indices: {
            /**
             * Assign an previously unassigned index.
             *
             * Payment: `Deposit` is reserved from the sender account.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * - `index`: the index to be claimed. This must not be in use.
             *
             * Emits `IndexAssigned` if successful.
             *
             * # <weight>
             * - `O(1)`.
             * - One storage mutation (codec `O(1)`).
             * - One reserve operation.
             * - One event.
             * # </weight>
             **/
            claim: AugmentedSubmittable<(index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIndex]>;
            /**
             * Force an index to an account. This doesn't require a deposit. If the index is already
             * held, then any deposit is reimbursed to its current owner.
             *
             * The dispatch origin for this call must be _Root_.
             *
             * - `index`: the index to be (re-)assigned.
             * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
             *
             * Emits `IndexAssigned` if successful.
             *
             * # <weight>
             * - `O(1)`.
             * - One storage mutation (codec `O(1)`).
             * - Up to one reserve operation.
             * - One event.
             * # </weight>
             **/
            forceTransfer: AugmentedSubmittable<(updated: AccountId | string | Uint8Array, index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountIndex]>;
            /**
             * Free up an index owned by the sender.
             *
             * Payment: Any previous deposit placed for the index is unreserved in the sender account.
             *
             * The dispatch origin for this call must be _Signed_ and the sender must own the index.
             *
             * - `index`: the index to be freed. This must be owned by the sender.
             *
             * Emits `IndexFreed` if successful.
             *
             * # <weight>
             * - `O(1)`.
             * - One storage mutation (codec `O(1)`).
             * - One reserve operation.
             * - One event.
             * # </weight>
             **/
            free: AugmentedSubmittable<(index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountIndex]>;
            /**
             * Assign an index already owned by the sender to another account. The balance reservation
             * is effectively transferred to the new account.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * - `index`: the index to be re-assigned. This must be owned by the sender.
             * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
             *
             * Emits `IndexAssigned` if successful.
             *
             * # <weight>
             * - `O(1)`.
             * - One storage mutation (codec `O(1)`).
             * - One transfer operation.
             * - One event.
             * # </weight>
             **/
            transfer: AugmentedSubmittable<(updated: AccountId | string | Uint8Array, index: AccountIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountIndex]>;
        };
        operator: {
            /**
             * Changes an operator for identified contracts.
             **/
            changeOperator: AugmentedSubmittable<(contracts: Vec<AccountId> | (AccountId | string | Uint8Array)[], newOperator: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>, AccountId]>;
            /**
             * Deploys a contact and insert relation of a contract and an operator to mapping.
             **/
            instantiate: AugmentedSubmittable<(endowment: Compact<BalanceOf> | AnyNumber | Uint8Array, gasLimit: Compact<Gas> | AnyNumber | Uint8Array, codeHash: CodeHash | string | Uint8Array, data: Bytes | string | Uint8Array, parameters: Parameters | {
                canBeNominated?: any;
                optionExpired?: any;
                optionP?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BalanceOf>, Compact<Gas>, CodeHash, Bytes, Parameters]>;
            /**
             * Updates parameters for an identified contact.
             **/
            updateParameters: AugmentedSubmittable<(contract: AccountId | string | Uint8Array, parameters: Parameters | {
                canBeNominated?: any;
                optionExpired?: any;
                optionP?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Parameters]>;
        };
        plasmLockdrop: {
            /**
             * Claim tokens for the lockdrop public key.
             **/
            claim: AugmentedSubmittable<(claimId: ClaimId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ClaimId]>;
            /**
             * Claim tokens for any account address.
             **/
            claimTo: AugmentedSubmittable<(claimId: ClaimId | string | Uint8Array, recipient: AccountId | string | Uint8Array, signature: EcdsaSignature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ClaimId, AccountId, EcdsaSignature]>;
            /**
             * Request authorities to check locking transaction.
             **/
            request: AugmentedSubmittable<(params: Lockdrop | {
                type?: any;
                transaction_hash?: any;
                public_key?: any;
                duration?: any;
                value?: any;
            } | string | Uint8Array, nonce: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Lockdrop, H256]>;
            /**
             * Set lockdrop alpha value.
             **/
            setAlpha: AugmentedSubmittable<(alphaParts: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
            /**
             * Set lockdrop authorities list.
             **/
            setAuthorities: AugmentedSubmittable<(authorities: Vec<AuthorityId> | (AuthorityId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AuthorityId>]>;
            /**
             * Set lockdrop held time.
             **/
            setBounds: AugmentedSubmittable<(from: BlockNumber | AnyNumber | Uint8Array, to: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, BlockNumber]>;
            /**
             * Dollar Rate oracle entrypoint. (for authorities only)
             **/
            setDollarRate: AugmentedSubmittable<(rate: TickerRate | {
                authority?: any;
                btc?: any;
                eth?: any;
            } | string | Uint8Array, signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [TickerRate, Signature]>;
            /**
             * Set minimum of positive votes required for lock approve.
             **/
            setPositiveVotes: AugmentedSubmittable<(count: AuthorityVote | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AuthorityVote]>;
            /**
             * Set minimum votes required to pass lock confirmation process.
             **/
            setVoteThreshold: AugmentedSubmittable<(count: AuthorityVote | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AuthorityVote]>;
            /**
             * Vote for claim request according to check results. (for authorities only)
             **/
            vote: AugmentedSubmittable<(vote: ClaimVote | {
                claim_id?: any;
                approve?: any;
                authority?: any;
            } | string | Uint8Array, signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ClaimVote, Signature]>;
        };
        plasmRewards: {
            /**
             * Force there to be a new era at the end of the next session. After this, it will be
             * reset to normal (non-forced) behaviour.
             *
             * # <weight>
             * - No arguments.
             * # </weight>
             **/
            forceNewEra: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Force there to be a new era at the end of sessions indefinitely.
             *
             * # <weight>
             * - One storage write
             * # </weight>
             **/
            forceNewEraAlways: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Force there to be no new eras indefinitely.
             *
             * # <weight>
             * - No arguments.
             * # </weight>
             **/
            forceNoEras: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Set history_depth value.
             *
             * Origin must be root.
             **/
            setHistoryDepth: AugmentedSubmittable<(newHistoryDepth: Compact<EraIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<EraIndex>]>;
        };
        plasmValidator: {
            /**
             * Manually set new validators.
             *
             * # <weight>
             * - One storage write
             * # </weight>
             **/
            setValidators: AugmentedSubmittable<(newValidators: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>]>;
        };
        session: {
            /**
             * Removes any session key(s) of the function caller.
             * This doesn't take effect until the next session.
             *
             * The dispatch origin of this function must be signed.
             *
             * # <weight>
             * - O(N) in number of key types.
             * - Removes N + 1 DB entries.
             * - Reduces system account refs by one on success.
             * # </weight>
             **/
            purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
            /**
             * Sets the session key(s) of the function caller to `keys`.
             * Allows an account to set its session key prior to becoming a validator.
             * This doesn't take effect until the next session.
             *
             * The dispatch origin of this function must be signed.
             *
             * # <weight>
             * - O(log n) in number of accounts.
             * - One extra DB entry.
             * - Increases system account refs by one on success iff there were previously no keys set.
             * In this case, purge_keys will need to be called before the account can be removed.
             * # </weight>
             **/
            setKeys: AugmentedSubmittable<(keys: Keys, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Keys, Bytes]>;
        };
        sudo: {
            /**
             * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * # <weight>
             * - O(1).
             * - Limited storage reads.
             * - One DB change.
             * # </weight>
             **/
            setKey: AugmentedSubmittable<(updated: LookupSource | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource]>;
            /**
             * Authenticates the sudo key and dispatches a function call with `Root` origin.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * # <weight>
             * - O(1).
             * - Limited storage reads.
             * - One DB write (event).
             * - Weight of derivative `call` execution + 10,000.
             * # </weight>
             **/
            sudo: AugmentedSubmittable<(call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
            /**
             * Authenticates the sudo key and dispatches a function call with `Signed` origin from
             * a given account.
             *
             * The dispatch origin for this call must be _Signed_.
             *
             * # <weight>
             * - O(1).
             * - Limited storage reads.
             * - One DB write (event).
             * - Weight of derivative `call` execution + 10,000.
             * # </weight>
             **/
            sudoAs: AugmentedSubmittable<(who: LookupSource | {
                Id: any;
            } | {
                Index: any;
            } | {
                Raw: any;
            } | {
                Address32: any;
            } | {
                Address20: any;
            } | string | Uint8Array, call: Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Call]>;
        };
        system: {
            /**
             * A dispatch that will fill the block weight up to the given ratio.
             **/
            fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
            /**
             * Kill all storage items with a key that starts with the given prefix.
             **/
            killPrefix: AugmentedSubmittable<(prefix: Key | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Key]>;
            /**
             * Kill some items from storage.
             **/
            killStorage: AugmentedSubmittable<(keys: Vec<Key> | (Key | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Key>]>;
            /**
             * Make some on-chain remark.
             **/
            remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Set the new changes trie configuration.
             **/
            setChangesTrieConfig: AugmentedSubmittable<(changesTrieConfig: Option<ChangesTrieConfiguration> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<ChangesTrieConfiguration>]>;
            /**
             * Set the new runtime code.
             **/
            setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Set the new runtime code without doing any checks of the given `code`.
             **/
            setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
            /**
             * Set the number of pages in the WebAssembly environment's heap.
             **/
            setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
            /**
             * Set some items of storage.
             **/
            setStorage: AugmentedSubmittable<(items: Vec<KeyValue> | (KeyValue)[]) => SubmittableExtrinsic<ApiType>, [Vec<KeyValue>]>;
            /**
             * Kill the sending account, assuming there are no references outstanding and the composite
             * data is equal to its default value.
             **/
            suicide: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
        };
        timestamp: {
            /**
             * Set the current time.
             *
             * This call should be invoked exactly once per block. It will panic at the finalization
             * phase, if this call hasn't been invoked by that time.
             *
             * The timestamp should be greater than the previous one by the amount specified by
             * `MinimumPeriod`.
             *
             * The dispatch origin for this call must be `Inherent`.
             **/
            set: AugmentedSubmittable<(now: Compact<Moment> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Moment>]>;
        };
        trading: {
            /**
             * Accept the target offer.
             * Only the offer's sender can accept the offer.
             * After the accept:
             * 1. the buyer's balances will be unlock.
             * 2. the buyer's balances tranfer to the sender.
             * 3. the sender's target contracts transfer to the buyer.
             **/
            accept: AugmentedSubmittable<(offerId: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
            /**
             * Offer is an easy contract to trade.
             * If the sender `accept` during the period, the operator trading will be completed.
             * After the offer, the part of the amount of the buyer's balances will lock.
             *
             * Note: Only one offer can be issued at the same time each an account.
             **/
            offer: AugmentedSubmittable<(sender: AccountId | string | Uint8Array, contracts: Vec<AccountId> | (AccountId | string | Uint8Array)[], amount: BalanceOf | AnyNumber | Uint8Array, expired: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Vec<AccountId>, BalanceOf, BlockNumber]>;
            /**
             * Reject the target offer.
             * the offer's buyer or sender can reject the offer.
             * After the reject, the buyer's balances will be unlock.
             **/
            reject: AugmentedSubmittable<(offerId: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
            /**
             * Remove the offer.
             * The offer's owner can remove the offer.
             * But, if the offer is living(until expired), he can not remove the offer.
             **/
            remove: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
        };
        utility: {
            /**
             * Send a batch of dispatch calls.
             *
             * This will execute until the first one fails and then stop.
             *
             * May be called from any origin.
             *
             * - `calls`: The calls to be dispatched from the same origin.
             *
             * # <weight>
             * - The sum of the weights of the `calls`.
             * - One event.
             * # </weight>
             *
             * This will return `Ok` in all circumstances. To determine the success of the batch, an
             * event is deposited. If a call failed and the batch was interrupted, then the
             * `BatchInterrupted` event is deposited, along with the number of successful calls made
             * and the error of the failed call. If all were successful, then the `BatchCompleted`
             * event is deposited.
             **/
            batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | {
                callIndex?: any;
                args?: any;
            } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
        };
    }
    interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
        (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;
    }
}