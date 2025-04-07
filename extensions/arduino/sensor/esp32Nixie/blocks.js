/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    Blockly.Blocks.arduino_smarthome_initNixie = {
        init: function () {
            this.jsonInit({
                colour: '#CF6363',
                colourSecondary: '#C94F4F',
                colourTertiary: '#BD4242',
                message0: '初始化数码管',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduino_smarthome_setNixieLight = {
        init: function () {
            this.jsonInit({
                colour: '#CF6363',
                colourSecondary: '#C94F4F',
                colourTertiary: '#BD4242',
                args0: [
                    {
                        type: 'input_value',
                        name: 'LIGHT'
                    }
                ],
                message0: '设置数码管亮度%1',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduino_smarthome_setNixie = {
        init: function () {
            this.jsonInit({
                colour: '#CF6363',
                colourSecondary: '#C94F4F',
                colourTertiary: '#BD4242',
                args0: [
                    {
                        type: 'input_value',
                        name: 'STRING'
                    }
                ],
                message0: '设置数码管显示数字 %1 (四位数字，且可以带小数点)',
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
