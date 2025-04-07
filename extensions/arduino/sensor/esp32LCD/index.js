const esp32LCD = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32LCD',
        default: '显示器'
    }),
    extensionId: 'esp32LCD',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/LCD.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32LCD',
        default: '显示器',
        description: '显示器'
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

module.exports = esp32LCD;
