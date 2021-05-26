#!/usr/bin/env ts-node

import { exec } from 'child_process';

import { dustyDefinitions, plasmDefinitions, allDefinitions } from '../src';

const METADATA_REQ_PAYLOAD = {
    id: '1',
    jsonrpc: '2.0',
    method: 'state_getMetadata',
    params: [],
};

const DEFAULT_PORT = 9944;

// a wrapper function that executes a shell command asynchronously
const executeShell = async (cmd: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.warn(error);
                reject(error);
            }
            resolve(stdout ? stdout : stderr);
        });
    });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const buildScript = async () => {
    const localNode = `http://localhost:${DEFAULT_PORT}`;

    //! this requires curl and a running local node to work!
    const result = await executeShell(
        `curl -H "Content-Type: application/json" -d '${JSON.stringify(METADATA_REQ_PAYLOAD)}' ${localNode}`,
    );

    const nodeMetadata = JSON.parse(result).result;

    console.log({ endpoint: localNode, metadata: nodeMetadata });
};

// script entry point
(async () => {
    //await buildScript();

    //note: just for testing
    const dusty = dustyDefinitions;
    const plasm = plasmDefinitions;

    console.log('Dusty Types');
    console.log(dusty);
    console.log('Plasm Types');
    console.log(plasm);
    console.log('All types');
    console.log(allDefinitions);

    process.exit(0);
})().catch((err) => {
    console.error(`ERROR: ${err}`);
    process.exit(1);
});
