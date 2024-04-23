const ps2Rocker = formatMessage => ({
    name: formatMessage({
        id: 'ps2Rocker.name',
        default: 'PS2 Rocker'
    }),
    extensionId: 'ps2Rocker',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'zpx',
    iconURL: `asset/ps2_rocker.png`,
    description: formatMessage({
        id: 'ps2Rocker.description',
        default: 'PS2 rocker module',
        description: 'Description of ps2 rocker'
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

module.exports = ps2Rocker;
