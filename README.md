# Spend-JS

Spend-JS is a JavaScript library for creating addresses and signing transactions on Spend Network. It's main benefit is that it does not require a locally installed Spend node, and instead utilizes the existing peers on the network. It can be used from the client as a [browserify](http://browserify.org/) compiled module.

## Installation

``` git clone https://github.com/Spend/Spend-JS ```

## Building

Build the browserify module for client use:

```
npm install

npm run browserify
```


## Usage

On the client:

```html
<script src="node_modules/Spendjs/bundle.min.js"></script>
```

On the server:

```js
var spendCrypto = require("spend-js").spendCrypto;
```

### Generating a key pair

To generate a public / private key pair from a given passphrase:

```js
let mnemonic = spendCrypto.generateMnemonic()
console.log("mnemonic: ", mnemonic)
let wallet = spendCrypto.getWalletFromSeed(mnemonic)
console.log(JSON.stringify(wallet, null, "\t"))
```

It will Return:

```json
    "keys": {
        "privateKey": {
            "buffer": {
                "type": "Buffer",
                "data": [buffer]       
            },
            "hex": "hex"
        },
        "publicKey": {
            "buffer": {
                "type": "Buffer",
                "data": [buffer]
            },
            "base64": "pubkeyString",
            "hex": "hex",
            "secp256k1prefix": "eb5ae98721",
            "bech32": {
                "string": "spendpubkeyString",
                "words": [],
                "prefix": "spendpub"
            }
        }
    },
    "address": {
        "buffer": {
            "type": "Buffer",
            "data": [buffer]
        },
        "bech32": {
            "string": "addressString",
            "words": [buffer],
            "prefix": "spend"
        },
        "hex": "HEX"
    }
}
```

The section key contains the public keys(pubkey and address) and the private key in hex, bech and buffer formats for later use.

