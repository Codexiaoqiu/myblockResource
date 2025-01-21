const k230Sensor = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Sensor',
        default: '陀螺仪'
    }),
    extensionId: 'k230Sensor',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/a.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Sensor',
        default: '陀螺仪',
        description: '陀螺仪'
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

module.exports = k230Sensor;
