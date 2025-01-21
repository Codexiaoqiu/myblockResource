/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    Blockly.Blocks['microbit_k230Peripheral_k230initLED'] = {
        init: function () {
            this.jsonInit({
                colour: "#c282b5",
                colourSecondary: "#c27295",
                colourTertiary: "#c252a5",
                args0: [{
                    type: "field_dropdown",
                    name: "PINS",
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
                }],
                message0: "初始化小灯，设置引脚 %1",
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks['microbit_k230Peripheral_k230runLED'] = {
        init: function () {
            this.jsonInit({
                type: "microbit_k230Peripheral_k230runLED",
                inputsInline: true,
                category: "LED灯",
                colour: "#c282b5",
                colourSecondary: "#c27295",
                colourTertiary: "#c252a5",
                outputShape: 3,
                previousStatement: null,
                nextStatement: null,
                args0: [{
                        type: "field_dropdown",
                        name: "LED",
                        options: [
                            [
                                "开启",
                                "1"
                            ],
                            [
                                "关闭",
                                "0"
                            ]
                        ]
                    },
                    {
                        type: "field_dropdown",
                        name: "PINS",
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
                    }
                ],
                message0: "%1小灯%2",
                extensions: ['shape_statement']
            });
        }
    };



    return Blockly;
}

exports = addBlocks;
