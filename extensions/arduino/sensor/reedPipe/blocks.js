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

    Blockly.Blocks.reedPipe_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.REEDPIPE_INIT,
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


    Blockly.Blocks.reedPipe_readSignal = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.REEDPIPE_READSIGNAL,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                // secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
