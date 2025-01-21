/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    Blockly.Blocks['microbit_k230Peripheral_k230InitAmbientlight'] = {
        init: function () {
            this.jsonInit({
                colour: "#c282b5",
                colourSecondary: "#c27295",
                colourTertiary: "#c252a5",
                args0: [{
                    type: "field_dropdown",
                    name: "I2C",
                    options: [
                        [
                            "1",
                            "1"
                        ],
                        [
                            "0",
                            "0"
                        ]
                    ]
                }],
                message0: "初始化环境光传感器，I2C引脚 %1",
                extensions: ['shape_statement']

            });
        }
    };



    Blockly.Blocks['microbit_k230Peripheral_k230ReadAmbientlight'] = {
        init: function () {
            this.jsonInit({
                colour: "#c282b5",
                colourSecondary: "#c27295",
                colourTertiary: "#c252a5",
                output: "String",
                message0: "读取环境光传感器的值",
                extensions: ['output_string']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
