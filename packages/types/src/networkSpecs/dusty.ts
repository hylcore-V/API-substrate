import { typeDefsFromModuleName } from '../helpers';

import chainConfig from './specs';

// types that needs to be manually overridden
const customTypes = {
    AccountInfo: 'AccountInfoWithProviders',
};

/**
 * Type definition for Dusty Plasm Test Network
 */
const dustyDefinitions = typeDefsFromModuleName(chainConfig.dusty.customFrames, customTypes);

export default dustyDefinitions;
