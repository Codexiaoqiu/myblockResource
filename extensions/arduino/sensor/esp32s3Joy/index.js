const joy = formatMessage => ({
    name: formatMessage({
        id: 'joy.name',
        default: '蓝牙手柄'
    }),
    extensionId: 'esp32s3Joy',
    version: '1.0.0',
    supportDevice: ['esp32s3Car'],
    author: 'maxblock',
    iconURL: `asset/Joy.png`,
    description: formatMessage({
        id: 'joy.description',
        default: '蓝牙手柄扩展，读取手柄按钮和摇杆模拟值'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    official: true,
    tags: ['sensor'],
    helpLink: '*'
});

module.exports = joy;
