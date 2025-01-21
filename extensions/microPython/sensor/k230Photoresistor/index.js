const k230Photoresistor = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Photoresistor',
        default: '光敏电阻传感器'
    }),
    extensionId: 'k230Photoresistor',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/光敏电阻传感器.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Photoresistor',
        default: '光敏电阻传感器',
        description: '光敏电阻传感器'
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

module.exports = k230Photoresistor;
