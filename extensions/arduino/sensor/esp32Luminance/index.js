const esp32Luminance = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32Luminance',
        default: '亮度传感器'
    }),
    extensionId: 'esp32Luminance',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/brightness.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32Luminance',
        default: '亮度传感器',
        description: '亮度传感器'
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

module.exports = esp32Luminance;
