const esp32Servo = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32Servo',
        default: '舵机'
    }),
    extensionId: 'esp32Servo',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/a.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32Servo',
        default: '舵机',
        description: '舵机'
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

module.exports = esp32Servo;
