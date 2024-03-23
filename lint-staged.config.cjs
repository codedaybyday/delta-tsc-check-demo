const path = require('path');
const { performMultiTSCheck } = require('delta-tsc-check');

module.exports = {
    '**/*.ts': ['npx tsc-check --files'],
    '**/*.tsx': async (filenames) => {
        // Generate tsc-related execution commands
        const { commands = [] } = await performMultiTSCheck({ filenames, lintstaged: true });
        // Other commands such as eslint
        // commands.push(`prettier ${filenames.join(' ')} --write`);
        // commands.push(`eslint --ignore-path ${eslintignorePath} ${filenames.join(' ')} --fix --quiet --cache`);
        return commands;
    },
}