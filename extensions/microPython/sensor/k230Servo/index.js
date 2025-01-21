const k230Servo = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Servo',
        default: '舵机'
    }),
    extensionId: 'k230Servo',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/a.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Servo',
        default: '舵机模块',
        description: '舵机模块'
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

module.exports = k230Servo;
