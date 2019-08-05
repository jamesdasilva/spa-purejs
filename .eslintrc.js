module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": 0,
        "no-param-reassign": [2, { "props": false }]
    }
};