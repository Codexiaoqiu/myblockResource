const ttMotor = formatMessage => ({
    name: formatMessage({
        id: 'ttMotor.name',
        default: 'TT电机'
    }),
    extensionId: 'ttMotor',
    version: '1.0.0',
    supportDevice: ['esp32s3Car'],
    author: 'maxblock',
    iconURL: `asset/ttMotor.png`,
    description: formatMessage({
        id: 'ttMotor.description',
        default: 'TT电机控制扩展，支持麦克纳姆轮运动'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    official: true,
    tags: ['sensor'],
    helpLink: '*'
});

module.exports = ttMotor;
