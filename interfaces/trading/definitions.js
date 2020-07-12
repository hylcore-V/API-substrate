"use strict";
/* eslint-disable @typescript-eslint/camelcase */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    types: {
        OfferState: {
            _enum: ['Waiting', 'Reject', 'Accept'],
        },
        OfferOf: {
            buyer: 'AccountId',
            sender: 'AccountId',
            contracts: 'Vec<AccountId>',
            amount: 'Balance',
            expired: 'BlockNumber',
            state: 'OfferState',
        },
    },
};
