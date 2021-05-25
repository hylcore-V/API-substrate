import { dustyDefinitions } from '../src';
import { WsProvider, ApiPromise } from '@polkadot/api';
import networkConfig from '../src/networkSpecs/specs';

const connectToNode = async (endpoint: string) => {
    const wsProvider = new WsProvider(endpoint);
    const api = await ApiPromise.create({
        provider: wsProvider,
    });

    return await api.isReady;
};

describe('Establishing a connection with Plasm nodes', () => {
    let api: ApiPromise;

    // initialize the API connection before the test
    beforeAll(async () => {
        const DUSTY_ENDPOINT = 'wss://rpc.dusty.plasmnet.io:9944';

        api = await connectToNode(DUSTY_ENDPOINT);
    });

    it('reads the chain modules', async () => {
        const nodeModules = Object.keys(api.tx);

        const dustyModules = networkConfig.dusty.customFrames;

        console.log(nodeModules);

        // register types on runtime
        await api.registerTypes(dustyDefinitions);

        // get the name of modules that are the same from the chain and the config file
        const matchModules = dustyModules.filter((i) => {
            const currentModule = nodeModules.find((modName) => {
                return modName === i;
            });
            return currentModule;
        });

        console.log(matchModules);

        expect(matchModules.length).toEqual(dustyModules.length);
    });

    afterAll(async () => {
        await api.disconnect();
    }, 10 * 1000);
});
