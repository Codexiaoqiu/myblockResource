const k230Vibration = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Vibration',
        default: '震动感应传感器'
    }),
    extensionId: 'k230Vibration',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/vibration.jpeg`,
    description: formatMessage({
        id: 'micropythonK230.k230Vibration',
        default: '震动感应传感器',
        description: '震动感应传感器'
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

module.exports = k230Vibration;
