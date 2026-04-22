/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#CF6363';
    const secondaryColour = '#C94F4F';

    const directions = [
        ['前进', 'FORWARD'],
        ['后退', 'BACKWARD'],
        ['左移', 'LEFT'],
        ['右移', 'RIGHT'],
        ['左转', 'TURN_LEFT'],
        ['右转', 'TURN_RIGHT'],
        ['原地左转', 'FORWARDLEFT'],
        ['原地右转', 'FORWARDRIGHT']
    ];

    Blockly.Blocks.ttMotor_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TTMOTOR_INIT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ttMotor_move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TTMOTOR_MOVE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DIRECTION',
                        options: directions
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ttMotor_stop = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TTMOTOR_STOP,
                args0: [
                    {
                        type: 'input_value',
                        name: 'BRAKE'
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
