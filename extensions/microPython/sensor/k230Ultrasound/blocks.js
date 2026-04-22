/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    Blockly.Blocks.microbit_k230Peripheral_k230InitUltrasound = {
        init: function () {
            this.jsonInit({
                colour: '#c282b5',
                colourSecondary: '#c27295',
                colourTertiary: '#c252a5',
                args0: [{
                    type: 'field_dropdown',
                    name: 'PINS',
                    options: [
                        ['P9', '9'],
                        ['P10', '10'],
                        ['P26', '26'],
                        ['P32', '32'],
                        ['P33', '33'],
                        ['P34', '34'],
                        ['P35', '35'],
                        ['P42', '42'],
                        ['P43', '43']
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'PINS1',
                    options: [
                        ['P9', '9'],
                        ['P10', '10'],
                        ['P26', '26'],
                        ['P32', '32'],
                        ['P33', '33'],
                        ['P34', '34'],
                        ['P35', '35'],
                        ['P42', '42'],
                        ['P43', '43']
                    ]
                }
                ],
                message0: '初始化超声波传感器，触发引脚 %1 - 接收引脚 %2',
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.microbit_k230Peripheral_k230ReadUltrasound = {
        init: function () {
            this.jsonInit({
                colour: '#c282b5',
                colourSecondary: '#c27295',
                colourTertiary: '#c252a5',
                args0: [{
                    type: 'field_dropdown',
                    name: 'PINS',
                    options: [
                        ['P9', '9'],
                        ['P10', '10'],
                        ['P26', '26'],
                        ['P32', '32'],
                        ['P33', '33'],
                        ['P34', '34'],
                        ['P35', '35'],
                        ['P42', '42'],
                        ['P43', '43']
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'PINS1',
                    options: [
                        ['P9', '9'],
                        ['P10', '10'],
                        ['P26', '26'],
                        ['P32', '32'],
                        ['P33', '33'],
                        ['P34', '34'],
                        ['P35', '35'],
                        ['P42', '42'],
                        ['P43', '43']
                    ]
                }
                ],
                message0: '读取触发引脚 %1 - 接收引脚 %2超声波探测的值',
                extensions: ['output_string']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
