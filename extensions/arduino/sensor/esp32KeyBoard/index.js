const esp32KeyBoard = formatMessage => ({
    name: formatMessage({
        id: 'esp32Home.esp32KeyBoard',
        default: '十二键矩阵键盘'
    }),
    extensionId: 'esp32KeyBoard',
    version: '1.0.0',
    supportDevice: ['esp32Home'],
    author: 'maxblock',
    iconURL: `asset/keyboard.jpg`,
    description: formatMessage({
        id: 'esp32Home.esp32KeyBoard',
        default: '十二键矩阵键盘',
        description: '十二键矩阵键盘'
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

module.exports = esp32KeyBoard;
