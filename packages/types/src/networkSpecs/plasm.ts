import { typeDefsFromModuleName } from '../helpers';

import ChainConfig from './specs';

// types that needs to be manually overridden
const customTypes = {
    AccountInfo: 'AccountInfoWithProviders',
};

/**
 * Type definition for Plasm Main Network
 */
const plasmDefinitions = typeDefsFromModuleName(ChainConfig.plasm.customFrames, customTypes);

export default plasmDefinitions;
