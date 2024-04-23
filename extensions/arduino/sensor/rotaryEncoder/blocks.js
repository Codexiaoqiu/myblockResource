/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF0000';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
    .getFlyoutItems()
    .find(block => block.type === 'arduino_pin_setDigitalOutput')
    .getField('PIN')
    .getOptions();

    Blockly.Blocks.rotaryEncoder_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ROTARYENCODER_INIT,
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


    Blockly.Blocks.rotaryEncoder_attachInterrupt = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ROTARYENCODER_ATTACHINTERRUPT,
                "message1": "%1",
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
                            [Blockly.Msg.MODE_CHANGE, 'CHANGE'],
                            [Blockly.Msg.MODE_RISING, 'RISING'],
                            [Blockly.Msg.MODE_FALLING, 'FALLING'],
                            [Blockly.Msg.MOTOR_LOW, 'LOW']]
                    }
                ],
                "args1": [{
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }],
                colour: color,
                // secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rotaryEncoder_detachInterrupt = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ROTARYENCODER_DETACHINTERRUPT,
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

    return Blockly;
}

exports = addBlocks;
