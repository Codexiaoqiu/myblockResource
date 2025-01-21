const k230Touch = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Touch',
        default: '触摸传感器'
    }),
    extensionId: 'k230Touch',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/touch.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Touch',
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

module.exports = k230Touch;
