const esp32People = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32People',
        default: '人体传感器'
    }),
    extensionId: 'esp32People',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/people.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32People',
        default: '人体传感器',
        description: '人体传感器'
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

module.exports = esp32People;
