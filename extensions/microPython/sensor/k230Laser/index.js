const k230Laser = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Laser',
        default: '直线激光射灯'
    }),
    extensionId: 'k230Laser',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/laser.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Laser',
        default: '直线激光射灯',
        description: '直线激光射灯'
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

module.exports = k230Laser;
