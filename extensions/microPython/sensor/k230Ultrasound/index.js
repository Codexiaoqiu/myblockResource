const k230Ultrasound = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Ultrasound',
        default: '超声波传感器'
    }),
    extensionId: 'k230Ultrasound',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/a.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Ultrasound',
        default: '超声波传感器',
        description: '超声波传感器'
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

module.exports = k230Ultrasound;
