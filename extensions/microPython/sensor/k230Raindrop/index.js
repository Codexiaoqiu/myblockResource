const k230Raindrop = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Raindrop',
        default: '雨滴传感器'
    }),
    extensionId: 'k230Raindrop',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/raindrop.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Raindrop',
        default: '雨滴传感器',
        description: '雨滴传感器'
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

module.exports = k230Raindrop;
