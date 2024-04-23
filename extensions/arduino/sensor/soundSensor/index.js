const soundSensor = formatMessage => ({
    name: formatMessage({
        id: 'soundSensor.name',
        default: 'Sound Sensor'
    }),
    extensionId: 'soundSensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'zpx',
    iconURL: `asset/sound_sensor.png`,
    description: formatMessage({
        id: 'soundSensor.description',
        default: 'Sound Sensor module',
        description: 'Description of sound sensor'
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

module.exports = soundSensor;
