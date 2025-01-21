const k230AcBuzzer = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230AcBuzzer',
        default: '有源蜂鸣器'
    }),
    extensionId: 'k230AcBuzzer',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/有源蜂鸣器.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230AcBuzzer',
        default: '有源蜂鸣器',
        description: '有源蜂鸣器'
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

module.exports = k230AcBuzzer;
