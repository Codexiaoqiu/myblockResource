/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initDoor = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initDoor =
            '#include "servo.hpp"';
        let arg0 = block.getFieldValue('PINS') || '0';

        arg0 = parseInt(arg0, 10);
        Blockly.Arduino.definitions_.arduino_smarthome_initDoor =
              `Servo servo_${arg0}(${arg0});`;
        const code = '';
        return code;
    };

    Blockly.Arduino.arduino_smarthome_setDoor = function (block) {
        let arg0 = Blockly.Arduino.valueToCode(
            block,
            'ANGLE',
            Blockly.Arduino.ORDER_UNARY_POSTFIX
        );
        let arg1 = block.getFieldValue('PINS') || '0';
        arg0 = parseInt(arg0, 10);
        arg1 = parseInt(arg1, 10);
        const code = `servo_${arg1}.begin(${arg0});\n`;

        return code;
    };

    return Blockly;
}

exports = addGenerator;
