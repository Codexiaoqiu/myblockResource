const k230Pressure = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Pressure',
        default: '压力传感器'
    }),
    extensionId: 'k230Pressure',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/a.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Pressure',
        default: '压力传感器',
        description: '压力传感器'
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

module.exports = k230Pressure;
