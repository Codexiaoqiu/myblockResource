const k230Relay = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Relay',
        default: '继电器'
    }),
    extensionId: 'k230Relay',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/relay.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Relay',
        default: '继电器',
        description: '继电器'
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

module.exports = k230Relay;
