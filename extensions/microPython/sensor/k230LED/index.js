const k230LED = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230LED',
        default: 'LED灯'
    }),
    extensionId: 'k230LED',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/led.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230LED',
        default: 'LED灯',
        description: 'LED灯'
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

module.exports = k230LED;
