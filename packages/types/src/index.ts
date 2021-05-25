import './interfaces/augment-api';
import './interfaces/augment-types';

import * as allTypes from './interfaces/definitions';
import { regTypesFromObject } from './helpers';

// export all network types
export * from './networkSpecs';

export const allDefinitions = regTypesFromObject(allTypes);

// export all the type definitions by default
export default allDefinitions;
