const k230fog = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230fog',
        default: '雾化器'
    }),
    extensionId: 'k230fog',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/fog.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230fog',
        default: '雾化器',
        description: '雾化器'
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

module.exports = k230fog;
