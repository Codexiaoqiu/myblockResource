const rotaryEncoder = formatMessage => ({
    name: formatMessage({
        id: 'rotaryEncoder.name',
        default: 'Rotart Encoder'
    }),
    extensionId: 'rotaryEncoder',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'zpx',
    iconURL: `asset/rotary_encoder.png`,
    description: formatMessage({
        id: 'rotaryEncoder.description',
        default: 'Rotart encoder module',
        description: 'Description of rotart encoder'
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

module.exports = rotaryEncoder;
