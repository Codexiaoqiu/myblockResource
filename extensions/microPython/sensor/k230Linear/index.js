const k230Linear = formatMessage => ({
    name: formatMessage({
        id: 'micropythonK230.k230Linear',
        default: '线性霍尔传感器'
    }),
    extensionId: 'k230Linear',
    version: '1.0.0',
    supportDevice: ['micropythonK230'],
    author: 'maxblock',
    iconURL: `asset/霍尔磁性传感器.jpg`,
    description: formatMessage({
        id: 'micropythonK230.k230Linear',
        default: '线性霍尔传感器',
        description: '线性霍尔传感器'
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

module.exports = k230Linear;
