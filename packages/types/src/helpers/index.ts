import * as AllTypes from '../interfaces/definitions';
import { RegistryTypes } from '@polkadot/types/types';

interface ModuleTypeDef {
    [key: string]: {
        types: Record<string, unknown>;
    };
}

export const typeDefsFromModuleName = (chainFrames: string[], typeOverride?: RegistryTypes) => {
    const nodeTypes = Object.fromEntries(
        Object.entries(AllTypes).filter((i) => {
            const frameName = i[0];

            // check if the object contains the property name
            if (chainFrames.includes(frameName)) {
                return true;
            } else {
                // note that this will skip the check if the frame name is incorrect
                return false;
            }
        }),
    );

    const types = regTypesFromObject(nodeTypes);

    // const bundleDef: OverrideBundleDefinition = {
    //     types: [
    //         {
    //             minmax: [0, undefined],
    //             types: { ...types, ...typeOverride },
    //         },
    //     ],
    // };

    // return bundleDef;

    return { ...types, ...typeOverride } as RegistryTypes;
};

export const regTypesFromObject = (moduleDef: ModuleTypeDef) => {
    const types = Object.values(moduleDef).reduce(
        (res, { types }): Record<string, unknown> => ({ ...res, ...types }),
        {},
    );
    return { ...types } as RegistryTypes;
};
