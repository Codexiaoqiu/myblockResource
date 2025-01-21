const k230KeyBoard = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230KeyBoard',
        default: '按键'
    }),
    extensionId: 'k230KeyBoard',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/按键模块.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230KeyBoard',
        default: '按键模块',
        description: '按键模块'
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

module.exports = k230KeyBoard;
