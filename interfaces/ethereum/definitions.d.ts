declare const _default: {
    types: {
        Address: string;
        LookupSource: string;
        Account: {
            nonce: string;
            balance: string;
        };
        Transaction: {
            nonce: string;
            action: string;
            gas_price: string;
            gas_limit: string;
            value: string;
            input: string;
            signature: string;
        };
        Signature: {
            v: string;
            r: string;
            s: string;
        };
        TransactionStatus: {
            transaction_hash: string;
            transaction_index: string;
            from: string;
            to: string;
            contract_address: string;
            logs: string;
            logs_bloom: string;
        };
        Bloom: string;
        Receipt: {
            transaction_hash: string;
            transaction_index: string;
            block_hash: string;
            from: string;
            to: string;
            block_number: string;
            cumulative_gas_used: string;
            gas_used: string;
            contract_address: string;
            logs: string;
            state_root: string;
            logs_bloom: string;
            status_code: string;
        };
    };
};
export default _default;
