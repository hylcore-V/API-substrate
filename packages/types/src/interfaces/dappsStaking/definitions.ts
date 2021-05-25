/* eslint-disable @typescript-eslint/naming-convention */

export default {
    types: {
        Nominations: {
            targets: 'Vec<(AccountId, Balance)>',
            submittedIn: 'EraIndex',
            suppressed: 'bool',
        },
        EraStakingPoints: {
            total: 'Balance',
            individual: 'BTreeMap<AccountId, Balance>',
        },
        UnlockChunk: {
            value: 'Compact<Balance>',
            era: 'Compact<EraIndex>',
        },
        StakingLedger: {
            stash: 'AccountId',
            total: 'Compact<Balance>',
            active: 'Compact<Balance>',
            unlocking: 'Vec<UnlockChunk<Balance>>',
            lastReward: 'Option<EraIndex>',
        },
    },
};
