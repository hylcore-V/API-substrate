"use strict";
/* eslint-disable @typescript-eslint/camelcase */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    types: {
        OfferState: {
            _enum: ['Waiting', 'Reject', 'Accept'],
        },
        Offer: {
            buyer: 'AccountId',
            sender: 'AccountId',
            contracts: 'Vec<AccountId>',
            amount: 'Balance',
            expired: 'Moment',
            state: 'OfferState',
        },
        OfferOf: 'Offer',
    },
};
