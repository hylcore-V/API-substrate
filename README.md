# Plasm Network node types

This is a substrate type definitions made with @polkadot/typegen.
It is meant for developers working with TypeScript to interact with the plasm node.

## Usage

### Importing Types

```ts
import * as plasmDefinitions from '@plasm/types/interfaces/definitions';

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

# generate type definitions
$ yarn build

# check if everything is properly imported
$ yarn lint
```

If everything worked well, you can see the `src/interfaces/` folder being populated with new definitions files.

Because type definitions are generally used for linting and preventing errors in author time, tests for this package is written in `src/index.ts` and checked via `yarn lint`.
