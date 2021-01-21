import type { Vec, u32, u64 } from '@polkadot/types';
import type { AccountId, Balance, BalanceOf, BlockNumber, Moment, RuntimeDbWeight, Weight } from '@polkadot/types/interfaces/runtime';
import type { SessionIndex } from '@polkadot/types/interfaces/session';
import type { WeightToFeeCoefficient } from '@polkadot/types/interfaces/support';
import type { ApiTypes } from '@polkadot/api/types';
declare module '@polkadot/api/types/consts' {
    interface AugmentedConsts<ApiType> {
        babe: {
            /**
             * The number of **slots** that an epoch takes. We couple sessions to
             * epochs, i.e. we start a new session once the new epoch begins.
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
            /**
             * The minimum amount required to keep an account open.
             **/
            existentialDeposit: Balance & AugmentedConst<ApiType>;
        };
        contracts: {
            /**
             * The maximum nesting level of a call/instantiate stack. A reasonable default
             * value is 100.
             **/
            maxDepth: u32 & AugmentedConst<ApiType>;
            /**
             * The maximum size of a storage value in bytes. A reasonable default is 16 KiB.
             **/
            maxValueSize: u32 & AugmentedConst<ApiType>;
            /**
             * Price of a byte of storage per one block interval. Should be greater than 0.
             **/
            rentByteFee: BalanceOf & AugmentedConst<ApiType>;
            /**
             * The amount of funds a contract should deposit in order to offset
             * the cost of one byte.
             *
             * Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day,
             * then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent.
             * But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000,
             * then it would pay 500 BU/day.
             **/
            rentDepositOffset: BalanceOf & AugmentedConst<ApiType>;
            /**
             * Number of block delay an extrinsic claim surcharge has.
             *
             * When claim surcharge is called by an extrinsic the rent is checked
             * for current_block - delay
             **/
            signedClaimHandicap: BlockNumber & AugmentedConst<ApiType>;
            /**
             * A size offset for an contract. A just created account with untouched storage will have that
             * much of storage from the perspective of the state rent.
             *
             * This is a simple way to ensure that contracts with empty storage eventually get deleted
             * by making them pay rent. This creates an incentive to remove them early in order to save
             * rent.
             **/
            storageSizeOffset: u32 & AugmentedConst<ApiType>;
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
        finalityTracker: {
            /**
             * The delay after which point things become suspicious. Default is 1000.
             **/
            reportLatency: BlockNumber & AugmentedConst<ApiType>;
            /**
             * The number of recent samples to keep from this chain. Default is 101.
             **/
            windowSize: BlockNumber & AugmentedConst<ApiType>;
        };
        indices: {
            /**
             * The deposit needed for reserving an index.
             **/
            deposit: BalanceOf & AugmentedConst<ApiType>;
        };
        nicks: {
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
        ovm: {
            /**
             * During the dispute period defined here, the user can challenge.
             * If nothing is found, the state is determined after the dispute period.
             **/
            disputePeriod: BlockNumber & AugmentedConst<ApiType>;
        };
        plasma: {
            maximumTokenAddress: AccountId & AugmentedConst<ApiType>;
        };
        plasmRewards: {
            /**
             * Number of sessions per era.
             **/
            sessionsPerEra: SessionIndex & AugmentedConst<ApiType>;
        };
        system: {
            /**
             * The base weight of executing a block, independent of the transactions in the block.
             **/
            blockExecutionWeight: Weight & AugmentedConst<ApiType>;
            /**
             * The maximum number of blocks to allow in mortal eras.
             **/
            blockHashCount: BlockNumber & AugmentedConst<ApiType>;
            /**
             * The weight of runtime database operations the runtime can invoke.
             **/
            dbWeight: RuntimeDbWeight & AugmentedConst<ApiType>;
            /**
             * The base weight of an Extrinsic in the block, independent of the of extrinsic being executed.
             **/
            extrinsicBaseWeight: Weight & AugmentedConst<ApiType>;
            /**
             * The maximum length of a block (in bytes).
             **/
            maximumBlockLength: u32 & AugmentedConst<ApiType>;
            /**
             * The maximum weight of a block.
             **/
            maximumBlockWeight: Weight & AugmentedConst<ApiType>;
        };
        timestamp: {
            /**
             * The minimum period between blocks. Beware that this is different to the *expected* period
             * that the block production apparatus provides. Your chosen consensus system will generally
             * work with this to determine a sensible block time. e.g. For Aura, it will be double this
             * period on default settings.
             **/
            minimumPeriod: Moment & AugmentedConst<ApiType>;
        };
        transactionPayment: {
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
    interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
    }
}
