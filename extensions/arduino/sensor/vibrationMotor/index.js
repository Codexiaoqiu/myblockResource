const vibrationMotor = formatMessage => ({
    name: formatMessage({
        id: 'vibrationMotor.name',
        default: 'Vibration Motor'
    }),
    extensionId: 'vibrationMotor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'zpx',
    iconURL: `asset/motor.png`,
    description: formatMessage({
        id: 'vibrationMotor.description',
        default: 'Vibration motor module',
        description: 'Description of vibration motor'
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

module.exports = vibrationMotor;
