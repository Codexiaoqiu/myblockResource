const hallSensor = formatMessage => ({
    name: formatMessage({
        id: 'hallSensor.name',
        default: 'Hall Sensor'
    }),
    extensionId: 'hallSensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'zpx',
    iconURL: `asset/hall_sensor.png`,
    description: formatMessage({
        id: 'hallSensor.description',
        default: 'Hall Sensor module',
        description: 'Description of hall sensor'
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

module.exports = hallSensor;
