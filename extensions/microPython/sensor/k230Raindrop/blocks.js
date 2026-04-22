/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    Blockly.Blocks['microbit_k230Peripheral_k230InitRaindrop'] = {
        init: function () {
            this.jsonInit({
                colour: "#c282b5",
                colourSecondary: "#c27295",
                colourTertiary: "#c252a5",
                args0: [{
                    type: "field_dropdown",
                    name: "PINS",
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
                }],
                message0: "初始化雨滴传感器，引脚 %1",
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks['microbit_k230Peripheral_k230ReadRaindrop'] = {
        init: function () {
            this.jsonInit({
                colour: "#c282b5",
                colourSecondary: "#c27295",
                colourTertiary: "#c252a5",
                args0: [{
                    type: "field_dropdown",
                    name: "PINS",
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
                }],
                message0: "读取引脚 %1雨滴传感器的值",
                extensions: ['output_string']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
