/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    Blockly.Blocks['microbit_k230Peripheral_k230init2PWMMotor'] = {
        init: function () {
            this.jsonInit({
                colour: "#c282b5",
                colourSecondary: "#c27295",
                colourTertiary: "#c252a5",
                message0: "初始化双通道电机模块",
                extensions: ['shape_statement']

            });
        }
    };


    Blockly.Blocks['microbit_k230Peripheral_k230init2PWMMotorPWM'] = {
        init: function () {
            this.jsonInit({
                "colour": "#c282b5",
                "colourSecondary": "#c27295",
                "colourTertiary": "#c252a5",
                "args0": [{
                        "type": "field_dropdown",
                        "name": "PWM1",
                        "options": [
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
                        "type": "field_dropdown",
                        "name": "PWM2",
                        "options": [
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
                "message0": "初始化双通道电机PWM1通道 %1, PWM2通道%2",
                extensions: ['shape_statement']

            });
        }
    };

    Blockly.Blocks['microbit_k230Peripheral_k230Let2PWMMotorRun'] = {
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
                        type: "field_dropdown",
                        name: "PWM2",
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
                message0: "控制双通道电机通道 %1-%2,以速度%3旋转",
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks['microbit_k230Peripheral_k230Stop2PWMMotor'] = {
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
                        type: "field_dropdown",
                        name: "PWM2",
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
                message0: "控制双通道电机通道 %1-%2,停止运行",
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
