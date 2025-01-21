/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    Blockly.Blocks['microbit_k230Peripheral_k230initMotor'] = {
        init: function () {
            this.jsonInit({
                message0: '初始化电机模块',
                colour: "#c282b5",
                colourSecondary: "#c27295",
                colourTertiary: "#c252a5",
                // secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks['microbit_k230Peripheral_k230initMotorPins'] = {
        init: function () {
            this.jsonInit({
                colour: "#c282b5",
                colourSecondary: "#c27295",
                colourTertiary: "#c252a5",
                args0: [{
                        type: "field_dropdown",
                        name: "PIN1",
                        options: [
                            [
                                "P2",
                                "2"
                            ],
                            [
                                "P3",
                                "3"
                            ],
                            [
                                "P4",
                                "4"
                            ],
                            [
                                "P5",
                                "5"
                            ],
                            [
                                "P6",
                                "6"
                            ],
                            [
                                "P14",
                                "14"
                            ],
                            [
                                "P15",
                                "15"
                            ],
                            [
                                "P16",
                                "16"
                            ],
                            [
                                "P17",
                                "17"
                            ],
                            [
                                "P18",
                                "18"
                            ],
                            [
                                "P19",
                                "19"
                            ],
                            [
                                "P26",
                                "26"
                            ],
                            [
                                "P27",
                                "27"
                            ],
                            [
                                "P32",
                                "32"
                            ],
                            [
                                "P33",
                                "33"
                            ],
                            [
                                "P34",
                                "34"
                            ],
                            [
                                "P35",
                                "35"
                            ],
                            [
                                "P36",
                                "36"
                            ],
                            [
                                "P37",
                                "37"
                            ],
                            [
                                "P40",
                                "40"
                            ],
                            [
                                "P41",
                                "41"
                            ],
                            [
                                "P42",
                                "42"
                            ],
                            [
                                "P46",
                                "46"
                            ],
                            [
                                "P47",
                                "47"
                            ],
                            [
                                "P48",
                                "48"
                            ],
                            [
                                "P49",
                                "49"
                            ],
                            [
                                "P52",
                                "52"
                            ],
                            [
                                "P61",
                                "61"
                            ]
                        ]
                    },
                    {
                        type: "field_dropdown",
                        name: "PIN2",
                        options: [
                            [
                                "P2",
                                "2"
                            ],
                            [
                                "P3",
                                "3"
                            ],
                            [
                                "P4",
                                "4"
                            ],
                            [
                                "P5",
                                "5"
                            ],
                            [
                                "P6",
                                "6"
                            ],
                            [
                                "P14",
                                "14"
                            ],
                            [
                                "P15",
                                "15"
                            ],
                            [
                                "P16",
                                "16"
                            ],
                            [
                                "P17",
                                "17"
                            ],
                            [
                                "P18",
                                "18"
                            ],
                            [
                                "P19",
                                "19"
                            ],
                            [
                                "P26",
                                "26"
                            ],
                            [
                                "P27",
                                "27"
                            ],
                            [
                                "P32",
                                "32"
                            ],
                            [
                                "P33",
                                "33"
                            ],
                            [
                                "P34",
                                "34"
                            ],
                            [
                                "P35",
                                "35"
                            ],
                            [
                                "P36",
                                "36"
                            ],
                            [
                                "P37",
                                "37"
                            ],
                            [
                                "P40",
                                "40"
                            ],
                            [
                                "P41",
                                "41"
                            ],
                            [
                                "P42",
                                "42"
                            ],
                            [
                                "P46",
                                "46"
                            ],
                            [
                                "P47",
                                "47"
                            ],
                            [
                                "P48",
                                "48"
                            ],
                            [
                                "P49",
                                "49"
                            ],
                            [
                                "P52",
                                "52"
                            ],
                            [
                                "P61",
                                "61"
                            ]
                        ]
                    },
                    {
                        type: "field_dropdown",
                        name: "PWM1",
                        options: [
                            [
                                "0",
                                "0"
                            ],
                            [
                                "1",
                                "1"
                            ],
                            [
                                "2",
                                "2"
                            ],
                            [
                                "3",
                                "3"
                            ],
                            [
                                "4",
                                "4"
                            ]
                        ]
                    }
                ],
                message0: "初始化电机GPIO引脚 %1 - %2, PWM通道 %3",
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks['microbit_k230Peripheral_k230LetMotorRun'] = {
        init: function () {
            this.jsonInit({
                colour: "#c282b5",
                colourSecondary: "#c27295",
                colourTertiary: "#c252a5",
                args0: [{
                        type: "field_dropdown",
                        name: "PWM1",
                        options: [
                            [
                                "0",
                                "0"
                            ],
                            [
                                "1",
                                "1"
                            ],
                            [
                                "2",
                                "2"
                            ],
                            [
                                "3",
                                "3"
                            ],
                            [
                                "4",
                                "4"
                            ]
                        ]
                    },
                    {
                        type: "input_value",
                        name: "SPEED"
                    }
                ],
                message0: "控制电机通道 %1,以速度%2旋转",
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks['microbit_k230Peripheral_k230StopMotor'] = {
        init: function () {
            this.jsonInit({
                colour: "#c282b5",
                colourSecondary: "#c27295",
                colourTertiary: "#c252a5",
                args0: [{
                    type: "field_dropdown",
                    name: "PWM1",
                    options: [
                        [
                            "0",
                            "0"
                        ],
                        [
                            "1",
                            "1"
                        ],
                        [
                            "2",
                            "2"
                        ],
                        [
                            "3",
                            "3"
                        ],
                        [
                            "4",
                            "4"
                        ]
                    ]
                }],
                message0: "控制电机通道 %1,停止运行",
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
