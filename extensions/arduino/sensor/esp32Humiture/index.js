const esp32Humiture = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32Humiture',
        default: '温湿度传感器'
    }),
    extensionId: 'esp32Humiture',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/HS-S26P.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32Humiture',
        default: '温湿度传感器',
        description: '温湿度传感器'
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

module.exports = esp32Humiture;
