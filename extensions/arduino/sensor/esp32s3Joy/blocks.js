/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#5A5AAD';
    const secondaryColour = '#484891';

    const buttons = [
        ['A', 'BTN_A'],
        ['B', 'BTN_B'],
        ['X', 'BTN_X'],
        ['Y', 'BTN_Y'],
        ['L1', 'BTN_L1'],
        ['R1', 'BTN_R1'],
        ['L2', 'BTN_L2'],
        ['R2', 'BTN_R2'],
        ['START', 'BTN_START'],
        ['SELECT', 'BTN_SEL'],
        ['POWER', 'BTN_POWER'],
        ['L3', 'BTN_LTHUMB'],
        ['R3', 'BTN_RTHUMB'],
        ['上', 'BTN_DPAD_UP'],
        ['下', 'BTN_DPAD_DOWN'],
        ['左', 'BTN_DPAD_LEFT'],
        ['右', 'BTN_DPAD_RIGHT']
    ];

    const analogs = [
        ['左摇杆Y轴', 'BPSS_LY'],
        ['左摇杆X轴', 'BPSS_LX'],
        ['右摇杆Y轴', 'BPSS_RY'],
        ['右摇杆X轴', 'BPSS_RX']
    ];

    Blockly.Blocks.joy_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JOY_INIT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.joy_update = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JOY_UPDATE,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.joy_button = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JOY_BUTTON,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'BUTTON',
                        options: buttons
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.joy_analog = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.JOY_ANALOG,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'AXIS',
                        options: analogs
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
