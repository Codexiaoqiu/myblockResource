/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#5A5AAD';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
    .getFlyoutItems()
    .find(block => block.type === 'arduino_pin_setDigitalOutput')
    .getField('PIN')
    .getOptions();

    Blockly.Blocks.ps2Rocker_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS2ROCKER_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'X',
                        options: digitalPins

                    },
                    {
                        type: 'field_dropdown',
                        name: 'Y',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Z',
                        options: digitalPins
                    },
                ],
                colour: color,
                // secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.ps2Rocker_readSignal = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS2ROCKER_READSIGNAL,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                // secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
