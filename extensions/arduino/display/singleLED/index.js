const singleLED = formatMessage => ({
    name: 'Single LED',
    extensionId: 'singleLED',
    version: '0.0.1',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'ArthurZheng',
    iconURL: `asset/dht.png`,
    description: formatMessage({
        id: 'singleLED.description',
        default: 'Single led module.',
        description: 'Description of single LED'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    official: true,
    tags: ['display'],
    helpLink: 'https://wiki.openblock.cc'
});

module.exports = singleLED;

