"use strict";
/* eslint-disable @typescript-eslint/camelcase */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    types: {
        Address: 'AccountId',
        LookupSource: 'AccountId',
        Account: {
            nonce: 'U256',
            balance: 'U256',
        },
        Transaction: {
            nonce: 'U256',
            action: 'String',
            gas_price: 'u64',
            gas_limit: 'u64',
            value: 'U256',
            input: 'Vec<u8>',
            signature: 'Signature',
        },
        Signature: {
            v: 'u64',
            r: 'H256',
            s: 'H256',
        },
        TransactionStatus: {
            transaction_hash: 'H256',
            transaction_index: 'u32',
            from: 'H160',
            to: 'Option<H160>',
            contract_address: 'Option<H160>',
            logs: 'Vec<Log>',
            logs_bloom: 'Bloom',
        },
        // Log: {
        //     address: 'H160',
        //     topics: 'Vec<H256>',
        //     data: 'Bytes',
        //     block_hash: 'Option<H256>',
        //     block_number: 'Option<U256>',
        //     transaction_hash: 'Option<H256>',
        //     transaction_index: 'Option<U256>',
        //     log_index: 'Option<U256>',
        //     transaction_log_index: 'Option<U256>',
        //     removed: 'bool',
        // },
        Bloom: '[u8; 256]',
        Receipt: {
            transaction_hash: 'Option<H256>',
            transaction_index: 'Option<U256>',
            block_hash: 'Option<H256>',
            from: 'Option<H160>',
            to: 'Option<H160>',
            block_number: 'Option<U256>',
            cumulative_gas_used: 'U256',
            gas_used: 'Option<U256>',
            contract_address: 'Option<H160>',
            logs: 'Vec<Log>',
            state_root: 'Option<H256>',
            logs_bloom: 'Bloom',
            status_code: 'Option<u64>',
        },
    },
};
