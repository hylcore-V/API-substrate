/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
        PredicateContract: {
            predicateHash: "Hash",
            inputs: "Vec<u8>"
        },
        Property: {
            predicateAddress: "AccountId",
            inputs: "Vec<Vec<u8>>"
        },
        Decision: {
            _enum: ["Undecided", "True", "False"]
        },
        ChallengeGame: {
            property: "Property<AccountId>",
            challenges: "Vec<Hash>",
            decision: "Decision",
            createdBlock: "BlockNumber"
        },
        Schedule: {
            version: "u32",
            maxStackHeight: 'u32',
            maxMemoryPages: 'u32',
            maxTableSize: 'u32',
        },
        Config: {
            schedule: 'Schedule',
            maxDepth: 'u32',
        },
    }
}