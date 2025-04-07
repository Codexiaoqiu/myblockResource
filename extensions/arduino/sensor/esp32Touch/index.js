const esp32Touch = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32Touch',
        default: '触摸传感器'
    }),
    extensionId: 'esp32Touch',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/touch.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32Touch',
        default: '触摸传感器',
        description: '触摸传感器'
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

module.exports = esp32Touch;
