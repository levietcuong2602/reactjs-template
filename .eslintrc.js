module.exports = {
    root: true, // Make sure eslint picks up the config at the root of the directory
    parserOptions: {
        ecmaVersion: 2020, // Use the latest ecmascript standard
        sourceType: 'module', // Allows using import/export statements
        ecmaFeatures: {
            jsx: true // Enable JSX since we're using React
        }
    },
    settings: {
        react: {
            version: 'detect' // Automatically detect the react version
        }
    },
    env: {
        browser: true, // Enables browser globals like window and document
        amd: true, // Enables require() and define() as global variables as per the amd spec.
        node: true // Enables Node.js global variables and Node.js scoping.
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
        'airbnb'
    ],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 0,
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/self-closing-comp': 1,
        'react/jsx-max-props-per-line': 1,
        'react/jsx-indent': 0,
        'react/button-has-type': 1,
        'react/jsx-indent-props': 0,
        'react/jsx-closing-bracket-location': 1,
        'jsx-a11y/no-onchange': 'warn',
        'no-var': 'error',
        'comma-dangle': ['error', 'never'],
        indent: ['error', 4],
        'no-console': 0,
        'prefer-arrow-callback': 0
    }
};
