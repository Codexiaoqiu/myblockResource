const utypePhotoelectric = formatMessage => ({
    name: formatMessage({
        id: 'utypePhotoelectric.name',
        default: 'Utype Photoelectric'
    }),
    extensionId: 'utypePhotoelectric',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'zpx',
    iconURL: `asset/Utype_photoelectric.png`,
    description: formatMessage({
        id: 'utypePhotoelectric.description',
        default: 'Utype photoelectric module',
        description: 'Description of utype photoelectric'
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

module.exports = utypePhotoelectric;
