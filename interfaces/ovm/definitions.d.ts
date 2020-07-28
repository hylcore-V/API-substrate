declare const _default: {
    types: {
        Decision: {
            _enum: string[];
        };
        ChallengeGameOf: {
            propertyHash: string;
            challenges: string;
            decision: string;
            createdBlock: string;
        };
        PredicateContractOf: {
            predicateHash: string;
            inputs: string;
        };
        PredicateHash: string;
        Schedule: {
            version: string;
            putCodePerByteCost: string;
        };
        PrefabOvmModule: {
            scheduleVersion: string;
            code: string;
        };
        Property: {
            predicateAddress: string;
            inputs: string;
        };
        PropertyOf: {
            predicateAddress: string;
            inputs: string;
        };
    };
};
export default _default;
