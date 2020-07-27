/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
        Range: {
            start: "u128",
            end: "u128"
        },
        RangeOf: {
            start: "u128",
            end: "u128"
        },
        StateUpdate: {
            depositContractAddress: "AccountId",
            range: "Range",
            blockNumber: "BlockNumber",
            stateObject: "Property",
        },
        Checkpoint: {
            stateUpdate: "Property",
        },
        Exit: {
            stateUpdate: "StateUpdate",
            inclusionProof: "InclusionProof",
        },
        InclusionProof: {
            addressInclusionProof: "AddressInclusionProof",
            intervalInclusionProof: "IntervalInclusionProof",
        },
        IntervalInclusionProof: {
            leafIndex: "Balance",
            leafPosition: "Balance",
            siblings: "Vec<IntervalTreeNode>",
        },
        AddressInclusionProof: {
            leafIndex: "AccountId",
            leafPosition: "Balance",
            siblings: "Vec<AddressTreeNode>",
        },
        IntervalTreeNode: {
            data: "Hash",
            start: "Balance",
        },
        AddressTreeNode: {
            data: "Hash",
            tokenAddress: "AccountId",
        },
        ExitDeposit: {
            stateUpdate: "StateUpdate",
            checkpoint: "Checkpoint",
        }
    }
}