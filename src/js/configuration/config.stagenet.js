const nodeUrl = 'http://134.209.75.3:6869';

export default {
    networkId: 'stagenet',
    displayName: 'Stagenet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: true,
    dataServicesBaseUrl: 'https://api-stagenet.wavesplatform.com/v0',
    nodes: [{url: nodeUrl, maintainer: 'Waves', showAsLink: true}],
    faucet: {
        url: 'https://waves-faucet-stagenet.wvservices.com/faucet',
        captchaKey: '6Lfir7MUAAAAAAWip4okLvtW8de3fvZaZbGVN-bn',
        address: '3MgSuT5FfeMrwwZCbztqLhQpcJNxySaFEiT'
    }
};