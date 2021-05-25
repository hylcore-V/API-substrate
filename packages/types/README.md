# Plasm Network node types

[![NPM](https://nodei.co/npm/@plasm/types.png?downloads=true)](https://www.npmjs.com/package/@plasm/types)

[![GitHub license](https://img.shields.io/github/license/PlasmNetwork/plasm-types.svg)](https://github.com/staketechnologies/plasm-types/blob/main/LICENSE)

This is a substrate type definitions made with [@polkadot-js/typegen](https://www.npmjs.com/package/@polkadot/typegen).
It is meant for developers working with TypeScript to interact with the Plasm node.
This package is meant to be used with the [@polakdot-js/api](https://github.com/polkadot-js/api) library.

## Usage

### Importing Types

```ts
... // API imports
import * as plasmDefinitions from '@plasm/types/interfaces/definitions';

const types = Object.values(plasmDefinitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

const networkEndpoint = 'ws://localhost:9944';

const options: ApiOptions = {
    provider: new WsProvider(networkEndpoint),
    types: {
        ...types,
    },
};

const api = new ApiRx(options);
```

### Generating Types

First, you'll have to manually define chain specific types for each pallets to the `interfaces/<module>/definitions.ts` file.
It should be in the following format:

```typescript
export default {
    types: {
        StructA: {
            id: 'u8',
            value_hash: 'H256',
        },
        TypeA: 'H256',
        ...
    },
};
```

Once that is done, you can simply run the following command to build the package.

```bash
# install dependencies
$ yarn

# generate type definitions and compile to JS
$ yarn build

# lint output
$ yarn lint
```

If everything worked well, you can see the `src/interfaces/` folder being populated with new definitions files.

Currently, the build script uses `wss://rpc.dusty.plasmnet.io` as the endpoint for fetching chain metadata.
