const k2302PWMMotor = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k2302PWMMotor',
        default: '双通道电机'
    }),
    extensionId: 'k2302PWMMotor',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/2pwm.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k2302PWMMotor',
        default: '双通道电机',
        description: '双通道电机'
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

module.exports = k2302PWMMotor;
