/* eslint-disable @typescript-eslint/camelcase */

export default {
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
