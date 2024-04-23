const touchSensor = formatMessage => ({
    name: formatMessage({
        id: 'touchSensor.name',
        default: 'Touch Sensor'
    }),
    extensionId: 'touchSensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'zpx',
    iconURL: `asset/touch_sensor.png`,
    description: formatMessage({
        id: 'touchSensor.description',
        default: 'Touch Sensor module',
        description: 'Description of touch sensor'
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

module.exports = touchSensor;
