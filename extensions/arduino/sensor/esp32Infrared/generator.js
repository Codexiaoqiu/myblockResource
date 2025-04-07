/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initRead = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initRead =
            '#include "infrared.hpp"';
        let arg0 = block.getFieldValue('PINS') || '17';
        arg0 = parseInt(arg0, 10);
        Blockly.Arduino.definitions_.arduino_smarthome_initRead =
        `Infrared infrared_${arg0}(${arg0});`;
        const code = ``;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_readRed = function (block) {
        let arg0 = block.getFieldValue('PINS') || '17';
        let arg1 = block.getFieldValue('REDTYPE') || '0';
        arg0 = parseInt(arg0, 10);
        arg1 = parseInt(arg1, 10);
        let code;
        if (arg1 === 0) {
            code = `infrared_${arg0}.getInfraredDigitalRead()`;
        } else {
            code = `infrared_${arg0}.getInfraredAnalogRead()`;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
