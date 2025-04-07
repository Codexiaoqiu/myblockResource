/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_setBodyPin = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_setBodyPin =
            '#include "body.hpp"';
        let arg0 = block.getFieldValue('PINS') || '39';
        arg0 = parseInt(arg0, 10);
        Blockly.Arduino.definitions_.arduino_smarthome_setBodyPin =
        `Body body_${arg0}(${arg0});`;
        const code = ``;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_readBody = function (block) {
        let arg0 = block.getFieldValue('PINS') || '39';
        arg0 = parseInt(arg0, 10);

        const code = `body_${arg0}.getBodyRead()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
