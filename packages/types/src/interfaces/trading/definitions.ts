/* eslint-disable @typescript-eslint/naming-convention */

export default {
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
