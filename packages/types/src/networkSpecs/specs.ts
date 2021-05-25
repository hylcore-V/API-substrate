export default {
    plasm: {
        version: '1.0.0',
        endpoint: 'rpc.plasmnet.io',
        customFrames: ['dappsStaking', 'operator', 'ovm', 'plasma', 'plasmLockdrop', 'plasmRewards', 'trading'],
        metadata: '',
    },
    dusty: {
        version: '1.9.3',
        endpoint: 'rpc.dusty.plasmnet.io',
        customFrames: ['operator', 'plasmRewards', 'trading', 'ovm'],
        metadata: '',
    },
    plasmCollator: {
        version: '1.8.0',
        endpoint: 'rpc.rococo.plasmnet.io',
        customFrames: [],
        metadata: '',
    },
};
