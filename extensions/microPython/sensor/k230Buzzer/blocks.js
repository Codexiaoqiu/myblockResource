/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    Blockly.Blocks.microbit_k230Peripheral_k230InitBuzzer = {
        init: function () {
            this.jsonInit({
                colour: '#c282b5',
                colourSecondary: '#c27295',
                colourTertiary: '#c252a5',
                args0: [{
                    type: 'field_dropdown',
                    name: 'PWM',
                    options: [
                        ['0', '0'],
                        ['1', '1'],
                        ['4', '4']
                    ]
                }],
                message0: '初始化蜂鸣器，PWM通道%1',
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.microbit_k230Peripheral_k230SetBuzzer = {
        init: function () {
            this.jsonInit({
                colour: '#c282b5',
                colourSecondary: '#c27295',
                colourTertiary: '#c252a5',
                args0: [{
                    type: 'field_dropdown',
                    name: 'Type',
                    options: [
                        [
                            'C4',
                            'C4'
                        ],
                        [
                            'D4',
                            'D4'
                        ],
                        [
                            'E4',
                            'E4'
                        ],
                        [
                            'F4',
                            'F4'
                        ],
                        [
                            'G4',
                            'G4'
                        ],
                        [
                            'A4',
                            'A4'
                        ],
                        [
                            'B4',
                            'B4'
                        ],
                        [
                            'C5',
                            'C5'
                        ]
                    ]
                },
                {
                    type: 'input_value',
                    name: 'duration'
                }
                ],
                message0: '播放音调%1 持续%2',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.microbit_k230Peripheral_k230EndBuzzer = {
        init: function () {
            this.jsonInit({
                colour: '#c282b5',
                colourSecondary: '#c27295',
                colourTertiary: '#c252a5',
                args0: [{
                    type: 'field_dropdown',
                    name: 'PWM',
                    options: [
                        ['0', '0'],
                        ['1', '1'],
                        ['4', '4']
                    ]
                }],
                message0: '释放PWM %1 资源',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.microbit_k230Peripheral_k230PlaySong = {
        init: function () {
            this.jsonInit({
                colour: '#c282b5',
                colourSecondary: '#c27295',
                colourTertiary: '#c252a5',
                args0: [{
                    type: 'field_dropdown',
                    name: 'SONG',
                    options: [
                        ['小星星', 'little_star'],
                        ['两只老虎', 'two_tigers'],
                        ['生日快乐', 'happy_birthday'],
                        ['欢乐颂', 'ode_to_joy'],
                        ['数鸭子', 'count_ducks']
                    ]
                }],
                message0: '播放歌曲 %1',
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
