const track = formatMessage => ({
    name: formatMessage({
        id: 'track.name',
        default: '循迹传感器'
    }),
    extensionId: 'esp32s3Track',
    version: '1.0.0',
    supportDevice: ['esp32s3Car'],
    author: 'maxblock',
    iconURL: `asset/track.png`,
    description: formatMessage({
        id: 'track.description',
        default: '循迹传感器扩展，读取四个红外循迹传感器的值'
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

module.exports = track;
