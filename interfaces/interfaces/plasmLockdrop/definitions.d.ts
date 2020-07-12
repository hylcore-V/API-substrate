declare const _default: {
    types: {
        ClaimId: string;
        Lockdrop: {
            type: string;
            transaction_hash: string;
            public_key: string;
            duration: string;
            value: string;
        };
        TickerRate: {
            authority: string;
            btc: string;
            eth: string;
        };
        DollarRate: string;
        AuthorityId: string;
        AuthorityVote: string;
        ClaimVote: {
            claim_id: string;
            approve: string;
            authority: string;
        };
        Claim: {
            params: string;
            approve: string;
            decline: string;
            amount: string;
            complete: string;
        };
    };
};
export default _default;
