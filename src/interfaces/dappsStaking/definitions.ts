/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
        Releases: {
            _enum: ['V1_0_0'],
        },
        StakingParameters: {
            canBeNominated: 'bool',
            optionExpired: 'u128',
            optionP: 'u32',
        },
        Parameters: {
            canBeNominated: 'bool',
            optionExpired: 'u128',
            optionP: 'u32',
        },
        EraStakingPoints: {
            total: 'Balance',
            individual: 'BTreeMap<AccountId, Balance>',
        },
        VoteCounts: {
            bad: 'u32',
            good: 'u32',
        },
    },
};
