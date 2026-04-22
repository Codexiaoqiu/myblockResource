/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#7A5A5A';
    const secondaryColour = '#5A4040';

    const servoPorts = [
        ['S1', 'S1'],
        ['S2', 'S2'],
        ['S3', 'S3'],
        ['S4', 'S4']
    ];

    Blockly.Blocks.servo_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SERVO_INIT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.servo_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SERVO_READ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SERVO',
                        options: servoPorts
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.servo_write = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SERVO_WRITE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SERVO',
                        options: servoPorts
                    },
                    {
                        type: 'input_value',
                        name: 'ANGLE',
                        check: 'Number'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
