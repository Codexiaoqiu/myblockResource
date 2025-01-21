const k230Motor = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Motor',
        default: '电机'
    }),
    extensionId: 'k230Motor',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/motor.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Motor',
        default: '电机模块',
        description: '电机模块'
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

module.exports = k230Motor;
