/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    Blockly.Blocks.microbit_k230Peripheral_k230initServo = {
        init: function () {
            this.jsonInit({
                colour: '#c282b5',
                colourSecondary: '#c27295',
                colourTertiary: '#c252a5',

                message0: '初始化舵机模块',
                extensions: ['shape_statement']

            });
        }
    };


    Blockly.Blocks.microbit_k230Peripheral_k230initServoChan = {
        init: function () {
            this.jsonInit({
                colour: '#c282b5',
                colourSecondary: '#c27295',
                colourTertiary: '#c252a5',
                args0: [{
                    type: 'field_dropdown',
                    name: 'PWM1',
                    options: [
                        [
                            '0',
                            '0'
                        ],
                        [
                            '1',
                            '1'
                        ],
                        [
                            '4',
                            '4'
                        ]
                    ]
                }],
                message0: '初始化舵机，使用PWM通道 %1',
                extensions: ['shape_statement']

            });
        }
    };

    Blockly.Blocks.microbit_k230Peripheral_k230letServoRun = {
        init: function () {
            this.jsonInit({
                colour: '#c282b5',
                colourSecondary: '#c27295',
                colourTertiary: '#c252a5',
                args0: [{
                    type: 'field_dropdown',
                    name: 'PWM1',
                    options: [
                        [
                            '0',
                            '0'
                        ],
                        [
                            '1',
                            '1'
                        ],
                        [
                            '4',
                            '4'
                        ]
                    ]
                },
                {
                    type: 'input_value',
                    name: 'DEGREE'
                }
                ],
                message0: '控制PWM通道 %1的舵机旋转%2',
                extensions: ['shape_statement']

            });
        }
    };

    Blockly.Blocks.microbit_k230Peripheral_k230StopServo = {
        init: function () {
            this.jsonInit({
                colour: '#c282b5',
                colourSecondary: '#c27295',
                colourTertiary: '#c252a5',
                args0: [{
                    type: 'field_dropdown',
                    name: 'PWM1',
                    options: [
                        [
                            '0',
                            '0'
                        ],
                        [
                            '1',
                            '1'
                        ],
                        [
                            '4',
                            '4'
                        ]
                    ]
                }],
                message0: '控制舵机通道 %1,停止运行',
                extensions: ['shape_statement']

            });
        }
    };

    return Blockly;
}

exports = addBlocks;
