const esp32Rain = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32Rain',
        default: '雨滴传感器'
    }),
    extensionId: 'esp32Rain',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/raindrop.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32Rain',
        default: '雨滴传感器',
        description: '雨滴传感器'
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

module.exports = esp32Rain;
