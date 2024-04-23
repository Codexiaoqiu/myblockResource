/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF0000';

    Blockly.Blocks.singleLED_setLEDState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SINGLELED_SET_LED_STATE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'pin'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state',
                        options: [
                            [Blockly.Msg.SINGLELED_ON, '1'],
                            [Blockly.Msg.SINGLELED_OFF, '0']]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;

