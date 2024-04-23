/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#007979';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
    .getFlyoutItems()
    .find(block => block.type === 'arduino_pin_setDigitalOutput')
    .getField('PIN')
    .getOptions();

    Blockly.Blocks.relay_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.RELAY_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                // secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.relay_setState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.RELAY_SET_STATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state',
                        options: [
                            [Blockly.Msg.RELAY_ON, 'HIGH'],
                            [Blockly.Msg.RELAY_OFF, 'LOW']]
                    }
                ],
                colour: color,
                // secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
