const k230ReedPipe = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230ReedPipe',
        default: '干簧管传感器'
    }),
    extensionId: 'k230ReedPipe',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/干簧管模块.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230ReedPipe',
        default: '干簧管传感器',
        description: '干簧管传感器'
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

module.exports = k230ReedPipe;
