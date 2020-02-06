module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": [
        "react-app",
        "standart",
        "airbnb",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
        "linebreak-style": [
            "error",
            "windows"
        ],
        "semi": [
            "error", 
            "never"
        ],
        "arrow-spacing": [
            "error",
            "always"
        ],
        "no-console": [
            "error",
            "always"
        ],
    }
};