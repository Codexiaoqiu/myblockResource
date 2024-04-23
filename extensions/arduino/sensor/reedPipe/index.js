const reedPipe = formatMessage => ({
    name: formatMessage({
        id: 'reedPipe.name',
        default: 'Reed Pipe'
    }),
    extensionId: 'reedPipe',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'zpx',
    iconURL: `asset/reed_pipe.png`,
    description: formatMessage({
        id: 'reedPipe.description',
        default: 'Reed pipe module',
        description: 'Description of reed pipe'
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

module.exports = reedPipe;
