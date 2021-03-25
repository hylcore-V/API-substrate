declare const _default: {
    types: {
        Range: {
            start: string;
            end: string;
        };
        RangeOf: {
            start: string;
            end: string;
        };
        StateUpdate: {
            depositContractAddress: string;
            range: string;
            blockNumber: string;
            stateObject: string;
        };
        Checkpoint: {
            stateUpdate: string;
        };
        Exit: {
            stateUpdate: string;
            inclusionProof: string;
        };
        InclusionProof: {
            addressInclusionProof: string;
            intervalInclusionProof: string;
        };
        IntervalInclusionProof: {
            leafIndex: string;
            leafPosition: string;
            siblings: string;
        };
        AddressInclusionProof: {
            leafIndex: string;
            leafPosition: string;
            siblings: string;
        };
        IntervalTreeNode: {
            data: string;
            start: string;
        };
        AddressTreeNode: {
            data: string;
            tokenAddress: string;
        };
        ExitDeposit: {
            stateUpdate: string;
            checkpoint: string;
        };
    };
};
export default _default;
