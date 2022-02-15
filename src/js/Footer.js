import React from 'react';

const socialLinks = [{
    id: 'github',
    url: 'https://github.com/orgs/Krosscoin/dashboard'
}, {
    id: 'twitter',
    url: 'https://twitter.com/krosscoin_team'
}, {
    id: 'facebook',
    url: 'https://facebook.com/krosscoin'
}, {
    id: 'discord',
    url: 'https://discord.gg/QJEHU5e2'
}, {
    id: 'telegram',
    url: 'http://t.me/krosscoin_kss'
}, {
    id: 'reddit',
    url: 'https://www.reddit.com/user/Krosscoin_team/'
}];

const Footer = ({version}) => {
    return (
        <div className="menu-footer">
            <div>Version: {version}</div>
            <div>Brought to you by KSS Team</div>
            <div>
                {socialLinks.map(item =>
                    (<a key={item.id} className={`social ${item.id}`} href={item.url} target="_blank"></a>))}
            </div>
            <div>
                <a className="fade" href="https://www.krosscoin.io/" target="_blank">KSS Ecosystem</a>
            </div>
        </div>
    );
}

export default Footer;
