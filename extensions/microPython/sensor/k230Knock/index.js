const k230Knock = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Knock',
        default: '敲击传感器'
    }),
    extensionId: 'k230Knock',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/knock.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Knock',
        default: '敲击传感器',
        description: '敲击传感器'
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

module.exports = k230Knock;
