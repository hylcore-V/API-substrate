/* eslint-disable @typescript-eslint/naming-convention */

export default {
    types: {
        Parameters: {
            canBeNominated: 'bool',
            optionExpired: 'u128',
            optionP: 'u128',
        },
        SmartContract: {
            _enum: {
                Wasm: 'AccountId',
                Evm: 'H160',
            },
        },
    },
};
