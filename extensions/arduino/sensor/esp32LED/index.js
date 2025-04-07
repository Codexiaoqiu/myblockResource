const esp32LED = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32LED',
        default: 'LED灯'
    }),
    extensionId: 'esp32LED',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/led.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32LED',
        default: 'LED灯',
        description: 'LED灯'
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

module.exports = esp32LED;
