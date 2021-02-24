/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const nextTranslate = require('next-translate');

const pwaPlugin = [
    withPWA,
    {
        pwa: {
            disable: process.env.ENVIRONMENT === 'development',
            dest: 'public',
            runtimeCaching,
        },
    },
];

const nextTranslatePlugin = [nextTranslate];

module.exports = withPlugins([pwaPlugin, nextTranslatePlugin]);
