/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#F08080';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
    .getFlyoutItems()
    .find(block => block.type === 'arduino_pin_setDigitalOutput')
    .getField('PIN')
    .getOptions();

    Blockly.Blocks.hallSensor_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HALLSENSOR_INIT,
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


    Blockly.Blocks.hallSensor_readDigitalSignal = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HALLSENSOR_READDIGITALSIGNAL,
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

    Blockly.Blocks.hallSensor_readAnalogSignal = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HALLSENSOR_READANALOGSIGNAL,
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
