const esp32LECD = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32LECD',
        default: '灯带'
    }),
    extensionId: 'esp32LECD',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/LECD.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32LECD',
        default: '灯带',
        description: '灯带'
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

module.exports = esp32LECD;
