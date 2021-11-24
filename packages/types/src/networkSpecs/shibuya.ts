import type { RegistryTypes } from '@polkadot/types/types';

const definitions: RegistryTypes = {
    Keys: 'AccountId',
    SmartContract: {
        _enum: {
            Evm: 'H160',
            Wasm: 'AccountId',
        },
    },
    EraIndex: 'u32',
    EraStakingPoints: {
        total: 'Balance',
        stakers: 'BTreeMap<AccountId, Balance>',
        _formerStakedEra: 'EraIndex',
        claimedRewards: 'Balance',
    },
    PalletDappsStakingEraStakingPoints: {
        total: 'Balance',
        stakers: 'BTreeMap<AccountId, Balance>',
        formerStakedEra: 'EraIndex',
        claimedRewards: 'Balance',
    },
    EraRewardAndStake: {
        rewards: 'Balance',
        staked: 'Balance',
    },
    PalletDappsStakingEraRewardAndStake: {
        rewards: 'Balance',
        staked: 'Balance',
    },
};

export default definitions;
