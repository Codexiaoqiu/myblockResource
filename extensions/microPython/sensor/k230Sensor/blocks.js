/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    Blockly.Blocks.microbit_k230Peripheral_k230InitSensor = {
        init: function () {
            this.jsonInit({
                colour: '#c282b5',
                colourSecondary: '#c27295',
                colourTertiary: '#c252a5',
                args0: [{
                    type: 'field_dropdown',
                    name: 'I2C',
                    options: [
                        [
                            '1',
                            '1'
                        ],
                        [
                            '0',
                            '0'
                        ]
                    ]
                }],
                message0: '初始化陀螺仪，I2C引脚 %1',
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.microbit_k230Peripheral_k230ReadSensor = {
        init: function () {
            this.jsonInit({
                colour: '#c282b5',
                colourSecondary: '#c27295',
                colourTertiary: '#c252a5',
                args0: [{
                    type: 'field_dropdown',
                    name: 'SENSOR',
                    options: [
                        [
                            'x轴加速度',
                            '0'
                        ],
                        [
                            'y轴加速度',
                            '1'
                        ],
                        [
                            'z轴加速度',
                            '2'
                        ],
                        [
                            'x轴角速度',
                            '3'
                        ],
                        [
                            'y轴角速度',
                            '4'
                        ],
                        [
                            'z轴角速度',
                            '5'
                        ],
                        [
                            '温度',
                            '6'
                        ]
                    ]
                }],
                message0: '读取陀螺仪的 %1 值',
                extensions: ['output_string']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
