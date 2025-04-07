const esp32Nixie = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32Nixie',
        default: '数码管'
    }),
    extensionId: 'esp32Nixie',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/nixie.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32Nixie',
        default: '数码管',
        description: '数码管'
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

module.exports = esp32Nixie;
