const esp32Infrared = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32Infrared',
        default: '红外传感器'
    }),
    extensionId: 'esp32Infrared',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/infrared.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32Infrared',
        default: '红外传感器',
        description: '红外传感器'
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

module.exports = esp32Infrared;
