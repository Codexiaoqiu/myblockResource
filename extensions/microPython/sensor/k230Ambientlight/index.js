const k230Ambientlight = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Ambientlight',
        default: '环境光传感器'
    }),
    extensionId: 'k230Ambientlight',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/环境光传感器.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Ambientlight',
        default: '环境光传感器',
        description: '环境光传感器'
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

module.exports = k230Ambientlight;
