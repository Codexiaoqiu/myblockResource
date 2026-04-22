const servo = formatMessage => ({
    name: formatMessage({
        id: 'servo.name',
        default: '舵机'
    }),
    extensionId: 'esp32s3Servo',
    version: '1.0.0',
    supportDevice: ['esp32s3Car'],
    author: 'maxblock',
    iconURL: `asset/servo.png`,
    description: formatMessage({
        id: 'servo.description',
        default: '舵机扩展，控制4个舵机的角度'
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

module.exports = servo;
