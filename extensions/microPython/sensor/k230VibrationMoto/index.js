const k230VibrationMoto = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230VibrationMoto',
        default: '震动马达'
    }),
    extensionId: 'k230VibrationMoto',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/震动马达.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230VibrationMoto',
        default: '震动马达',
        description: '震动马达'
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

module.exports = k230VibrationMoto;
