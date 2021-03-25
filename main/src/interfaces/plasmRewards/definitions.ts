/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
        EraIndex: 'u32',
        Releases: {
            _enum: ['V1_0_0'],
        },
        ActiveEraInfo: {
            index: 'EraIndex',
            start: 'Option<Moment>',
        }
    },
    
};
