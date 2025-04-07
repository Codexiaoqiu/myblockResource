/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    Blockly.Blocks.arduino_smarthome_initLuminance = {
        init: function () {
            this.jsonInit({
                colour: '#CF6363',
                colourSecondary: '#C94F4F',
                colourTertiary: '#BD4242',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PINS',
                        options: [
                            [
                                'IO0',
                                '0'
                            ],
                            [
                                'IO1',
                                '1'
                            ],
                            [
                                'IO2',
                                '2'
                            ],
                            [
                                'IO3',
                                '3'
                            ],
                            [
                                'IO4',
                                '4'
                            ],
                            [
                                'IO5',
                                '5'
                            ],
                            [
                                'IO12',
                                '12'
                            ],
                            [
                                'IO13',
                                '13'
                            ],
                            [
                                'IO14',
                                '14'
                            ],
                            [
                                'IO15',
                                '15'
                            ],
                            [
                                'IO16',
                                '16'
                            ],
                            [
                                'IO17',
                                '17'
                            ],
                            [
                                'IO18',
                                '18'
                            ],
                            [
                                'IO19',
                                '19'
                            ],
                            [
                                'IO21',
                                '21'
                            ],
                            [
                                'IO22',
                                '22'
                            ],
                            [
                                'IO23',
                                '23'
                            ],
                            [
                                'IO25',
                                '25'
                            ],
                            [
                                'IO26',
                                '26'
                            ],
                            [
                                'IO27',
                                '27'
                            ],
                            [
                                'IO32',
                                '32'
                            ],
                            [
                                'IO33',
                                '33'
                            ],
                            [
                                'IO34',
                                '34'
                            ],
                            [
                                'IO35',
                                '35'
                            ],
                            [
                                'IO36',
                                '36'
                            ],
                            [
                                'IO39',
                                '39'
                            ]
                        ]
                    }
                ],
                message0: '初始化亮度传感器，引脚 %1',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduino_smarthome_readLuminance = {
        init: function () {
            this.jsonInit({
                colour: '#CF6363',
                colourSecondary: '#C94F4F',
                colourTertiary: '#BD4242',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PINS',
                        options: [
                            [
                                'IO0',
                                '0'
                            ],
                            [
                                'IO1',
                                '1'
                            ],
                            [
                                'IO2',
                                '2'
                            ],
                            [
                                'IO3',
                                '3'
                            ],
                            [
                                'IO4',
                                '4'
                            ],
                            [
                                'IO5',
                                '5'
                            ],
                            [
                                'IO12',
                                '12'
                            ],
                            [
                                'IO13',
                                '13'
                            ],
                            [
                                'IO14',
                                '14'
                            ],
                            [
                                'IO15',
                                '15'
                            ],
                            [
                                'IO16',
                                '16'
                            ],
                            [
                                'IO17',
                                '17'
                            ],
                            [
                                'IO18',
                                '18'
                            ],
                            [
                                'IO19',
                                '19'
                            ],
                            [
                                'IO21',
                                '21'
                            ],
                            [
                                'IO22',
                                '22'
                            ],
                            [
                                'IO23',
                                '23'
                            ],
                            [
                                'IO25',
                                '25'
                            ],
                            [
                                'IO26',
                                '26'
                            ],
                            [
                                'IO27',
                                '27'
                            ],
                            [
                                'IO32',
                                '32'
                            ],
                            [
                                'IO33',
                                '33'
                            ],
                            [
                                'IO34',
                                '34'
                            ],
                            [
                                'IO35',
                                '35'
                            ],
                            [
                                'IO36',
                                '36'
                            ],
                            [
                                'IO39',
                                '39'
                            ]
                        ]
                    }
                ],
                message0: '读取引脚 %1亮度传感器的值',
                extensions: ['output_string']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
