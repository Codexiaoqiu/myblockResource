/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    Blockly.Blocks.arduino_smarthome_initLCD = {
        init: function () {
            this.jsonInit({
                colour: '#CF6363',
                colourSecondary: '#C94F4F',
                colourTertiary: '#BD4242',
                message0: '初始化LCD',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduino_smarthome_setLCD = {
        init: function () {
            this.jsonInit({
                colour: '#CF6363',
                colourSecondary: '#C94F4F',
                colourTertiary: '#BD4242',
                args0: [
                    {
                        type: 'input_value',
                        name: 'ROW'
                    },
                    {
                        type: 'input_value',
                        name: 'COL'
                    }
                ],
                message0: '设置显示屏光标位置x: %1 y: %2',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduino_smarthome_setLCDStr = {
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
                message0: '设置显示屏打印 %1',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.arduino_smarthome_clearLCDStr = {
        init: function () {
            this.jsonInit({
                colour: '#CF6363',
                colourSecondary: '#C94F4F',
                colourTertiary: '#BD4242',
                message0: '清空显示屏',
                extensions: ['shape_statement']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
