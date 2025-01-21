const k230Brightness = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Brightness',
        default: '环境亮度传感器'
    }),
    extensionId: 'k230Brightness',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/brightness.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Brightness',
        default: '环境亮度传感器',
        description: '环境亮度传感器'
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

module.exports = k230Brightness;
