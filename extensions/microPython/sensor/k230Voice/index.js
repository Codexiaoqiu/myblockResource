const k230Voice = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Voice',
        default: '声音传感器'
    }),
    extensionId: 'k230Voice',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/声音传感器.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Voice',
        default: '声音传感器',
        description: '声音传感器'
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

module.exports = k230Voice;
