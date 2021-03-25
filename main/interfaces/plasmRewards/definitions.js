"use strict";
/* eslint-disable @typescript-eslint/camelcase */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
