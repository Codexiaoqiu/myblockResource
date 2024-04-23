const relay = formatMessage => ({
    name: formatMessage({
        id: 'relay.name',
        default: 'Relay'
    }),
    extensionId: 'relay',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'zpx',
    iconURL: `asset/relay.png`,
    description: formatMessage({
        id: 'relay.description',
        default: 'Relay module',
        description: 'Description of relay'
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

module.exports = relay;
