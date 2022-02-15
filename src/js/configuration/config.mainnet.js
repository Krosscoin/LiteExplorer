const nodeUrl = 'http://134.209.75.3:6869';

export default {
    networkId: 'mainnet',
    displayName: 'Mainnet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: false,
    nodes: [{url: nodeUrl, maintainer: 'KSS'}],
    dappsUrl: 'https://raw.githubusercontent.com/wavesplatform/waves-client-config/dapp-names/official_waves_dapps.json'
};
