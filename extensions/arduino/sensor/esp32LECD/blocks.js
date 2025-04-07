/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    Blockly.Blocks.arduino_smarthome_initLECD = {
        init: function () {
            this.jsonInit({
                colour: '#CF6363',
                colourSecondary: '#C94F4F',
                colourTertiary: '#BD4242',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LECDPIN',
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
                message0: '初始化灯带，引脚%1',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.arduino_smarthome_setLecdLight = {
        init: function () {
            this.jsonInit({
                colour: '#CF6363',
                colourSecondary: '#C94F4F',
                colourTertiary: '#BD4242',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LECDPIN',
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
                    },
                    {
                        type: 'input_value',
                        name: 'LIGHT'
                    }
                ],
                message0: '设置灯条-引脚%1-亮度 %2',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.arduino_smarthome_setLecdLine = {
        init: function () {
            this.jsonInit({
                colour: '#CF6363',
                colourSecondary: '#C94F4F',
                colourTertiary: '#BD4242',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LECDPIN',
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
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LED',
                        options: [
                            [
                                '1',
                                '1'
                            ],
                            [
                                '2',
                                '2'
                            ],
                            [
                                '3',
                                '3'
                            ],
                            [
                                '4',
                                '4'
                            ],
                            [
                                '5',
                                '5'
                            ],
                            [
                                '6',
                                '6'
                            ],
                            [
                                '7',
                                '7'
                            ],
                            [
                                '8',
                                '8'
                            ],
                            [
                                '9',
                                '9'
                            ],
                            [
                                '10',
                                '10'
                            ]
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'COLOR'
                    }
                ],
                message0: '设置-引脚%1-彩灯 %2 的颜色 %3',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.arduino_smarthome_setLecdAll = {
        init: function () {
            this.jsonInit({
                colour: '#CF6363',
                colourSecondary: '#C94F4F',
                colourTertiary: '#BD4242',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LECDPIN',
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
                    },
                    {
                        type: 'field_dropdown',
                        name: 'START',
                        options: [
                            [
                                '1',
                                '1'
                            ],
                            [
                                '2',
                                '2'
                            ],
                            [
                                '3',
                                '3'
                            ],
                            [
                                '4',
                                '4'
                            ],
                            [
                                '5',
                                '5'
                            ],
                            [
                                '6',
                                '6'
                            ],
                            [
                                '7',
                                '7'
                            ],
                            [
                                '8',
                                '8'
                            ],
                            [
                                '9',
                                '9'
                            ],
                            [
                                '10',
                                '10'
                            ]
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'END',
                        options: [
                            [
                                '1',
                                '1'
                            ],
                            [
                                '2',
                                '2'
                            ],
                            [
                                '3',
                                '3'
                            ],
                            [
                                '4',
                                '4'
                            ],
                            [
                                '5',
                                '5'
                            ],
                            [
                                '6',
                                '6'
                            ],
                            [
                                '7',
                                '7'
                            ],
                            [
                                '8',
                                '8'
                            ],
                            [
                                '9',
                                '9'
                            ],
                            [
                                '10',
                                '10'
                            ]
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'COLOR'
                    }
                ],
                message0: '设置-引脚%1-彩灯 从%2到%3 的颜色 %4',
                extensions: ['shape_statement']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
