const esp32Buzzer = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32Buzzer',
        default: '蜂鸣器'
    }),
    extensionId: 'esp32Buzzer',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/buzzer.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32Buzzer',
        default: '蜂鸣器',
        description: '蜂鸣器'
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

module.exports = esp32Buzzer;
