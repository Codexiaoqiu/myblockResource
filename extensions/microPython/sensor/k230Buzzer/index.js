const k230Buzzer = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Buzzer',
        default: '无源蜂鸣器'
    }),
    extensionId: 'k230Buzzer',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/buzzer.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Buzzer',
        default: '无源蜂鸣器',
        description: '无源蜂鸣器'
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

module.exports = k230Buzzer;
