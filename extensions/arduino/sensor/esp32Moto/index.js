const esp32Motor = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32Motor',
        default: '电机'
    }),
    extensionId: 'esp32Motor',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/motor.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32Motor',
        default: '电机',
        description: '电机'
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

module.exports = esp32Motor;
