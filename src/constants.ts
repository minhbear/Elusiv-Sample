/**
 * Constants used throughout the samples
 */

import { Cluster } from '@solana/web3.js';
const bs58 = require('bs58');


export const DEVNET_RPC_URL = 'https://api.devnet.solana.com';

export const CLUSTER: Cluster = 'devnet';

/**
 * ONLY FOR SAMPLES NEVER EVER STORE YOUR/ANYONE'S PRIVATE KEY IN PLAIN TEXT
 * TODO: Insert your private key here
 */
const b = bs58.decode('n65wFcKH5xWikxEohZTCffiuJtntJCdkLnHxSZGnAi8Gz1uujCr6Uj5tQG5BgoNvmqyAsJe9FWZHKdCSKGFNHzV');

export const PRIV_KEY = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);
//"n65wFcKH5xWikxEohZTCffiuJtntJCdkLnHxSZGnAi8Gz1uujCr6Uj5tQG5BgoNvmqyAsJe9FWZHKdCSKGFNHzV"