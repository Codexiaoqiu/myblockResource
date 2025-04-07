const esp32Gas = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32Gas',
        default: '气体传感器'
    }),
    extensionId: 'esp32Gas',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/gas.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32Gas',
        default: '气体传感器',
        description: '气体传感器'
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

module.exports = esp32Gas;
