"use strict";
/* eslint-disable @typescript-eslint/camelcase */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    types: {
        Decision: {
            _enum: ["Undecided", "True", "False"]
        },
        ChallengeGameOf: {
            propertyHash: "Hash",
            challenges: "Vec<Hash>",
            decision: "Decision",
            createdBlock: "BlockNumber"
        },
        PredicateContractOf: {
            predicateHash: "Hash",
            inputs: "Vec<u8>"
        },
        PredicateHash: "Hash",
        Schedule: {
            version: "u32",
            putCodePerByteCost: "Weight"
        },
        PrefabOvmModule: {
            scheduleVersion: "u32",
            code: "Vec<u8>"
        },
        Property: {
            predicateAddress: "AccountId",
            inputs: "Vec<Vec<u8>>"
        },
        PropertyOf: {
            predicateAddress: "AccountId",
            inputs: "Vec<Vec<u8>>"
        },
    }
};
