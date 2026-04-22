/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#5A5AAD';
    const secondaryColour = '#484891';

    const sensors = [
        ['左外', 'LEFT_OUTER'],
        ['左内', 'LEFT_INNER'],
        ['右内', 'RIGHT_INNER'],
        ['右外', 'RIGHT_OUTER']
    ];

    Blockly.Blocks.track_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TRACK_INIT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.track_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TRACK_READ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SENSOR',
                        options: sensors
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.track_update = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TRACK_UPDATE,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
