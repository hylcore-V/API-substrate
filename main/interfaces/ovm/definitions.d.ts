declare const _default: {
    types: {
        PredicateContract: {
            predicateHash: string;
            inputs: string;
        };
        Property: {
            predicateAddress: string;
            inputs: string;
        };
        Decision: {
            _enum: string[];
        };
        ChallengeGame: {
            property: string;
            challenges: string;
            decision: string;
            createdBlock: string;
        };
        Schedule: {
            version: string;
            maxStackHeight: string;
            maxMemoryPages: string;
            maxTableSize: string;
        };
        Config: {
            schedule: string;
            maxDepth: string;
        };
    };
};
export default _default;
