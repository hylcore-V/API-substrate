# Plasm Network node types

This is a substrate type definitions made with [@polkadot-js/typegen](https://www.npmjs.com/package/@polkadot/typegen).
It is meant for developers working with TypeScript to interact with the plasm node.
This package is meant to be used with the [@polakdot-js/api](https://github.com/polkadot-js/api) library.

## Usage

### Importing Types

```ts
... // API imports
import * as plasmDefinitions from 'plasm-types/interfaces/definitions';

const types = Object.values(plasmDefinitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

const networkEndpoint = 'ws://localhost:9944';

const options: ApiOptions = {
    provider: new WsProvider(networkEndpoint),
    types: {
        ...types,
        // aliases that don't do well as part of interfaces
        'voting::VoteType': 'VoteType',
        'voting::TallyType': 'TallyType',
        // chain-specific overrides
        Address: 'GenericAddress',
        Keys: 'SessionKeys4',
        StakingLedger: 'StakingLedgerTo223',
        Votes: 'VotesTo230',
        ReferendumInfo: 'ReferendumInfoTo239',
    },
    // override duplicate type name
    typesAlias: { voting: { Tally: 'VotingTally' } },
};

const api = new ApiRx(options);
```

### Generating Types

First you'll have to run a local Plasm node.
You can start by visiting <https://github.com/staketechnologies/Plasm> to learn more.

Once you have a running node, execute the following commands on your terminal.

```bash
# get meta data from a local node. This will generate plasm.json
$ chmod +x get-types.sh

# install dependencies
$ yarn

# generate type definitions and compiled JS
$ yarn build

# lint output
$ yarn lint
```

If everything worked well, you can see the `src/interfaces/` folder being populated with new definitions files.

### Build Package for Publishing

For publishing to NPM, run `yarn run tsc` in the root of this project.

## Adding New Types

For every new runtime module added to Plasm Network, you will have to generate a new one.
Custom types are defined inside `definitions.ts`.
`/src/interfaces/definitions.ts` exports all the runtime definitions while the actual type definitions are defined in `/src/interfaces/<module>/definitions.ts`.
You can add new types or edit existing ones by working with the respective folders.
