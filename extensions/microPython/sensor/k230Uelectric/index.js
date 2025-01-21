const k230Uelectric = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Uelectric',
        default: 'U型光电传感器'
    }),
    extensionId: 'k230Uelectric',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/U型光电传感器.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Uelectric',
        default: 'U型光电传感器',
        description: 'U型光电传感器'
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

module.exports = k230Uelectric;
