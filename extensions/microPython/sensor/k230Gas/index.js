const k230Gas = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Gas',
        default: '气体传感器'
    }),
    extensionId: 'k230Gas',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/gas.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Gas',
        default: '气体传感器',
        description: '气体传感器'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    official: true,
    tags: ['sensor'],
    helpLink: ''
});

module.exports = k230Gas;
