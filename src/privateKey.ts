const bs58 = require('bs58');
const fs = require('fs');
const b = bs58.decode('n65wFcKH5xWikxEohZTCffiuJtntJCdkLnHxSZGnAi8Gz1uujCr6Uj5tQG5BgoNvmqyAsJe9FWZHKdCSKGFNHzV');
const j = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);
fs.writeFileSync('key.json', `[${j}]`);