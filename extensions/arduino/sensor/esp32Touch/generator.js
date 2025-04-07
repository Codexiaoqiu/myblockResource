/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initTouch = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initTouch =
            '#include "touch.hpp"';
        let arg0 = block.getFieldValue('PINS') || '35';
        arg0 = parseInt(arg0, 10);
        Blockly.Arduino.definitions_.arduino_smarthome_initTouch =
        `Touch touch_${arg0}(${arg0});`;
        const code = ``;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_readTouch = function (block) {
        let arg0 = block.getFieldValue('PINS') || '35';
        arg0 = parseInt(arg0, 10);

        const code = `touch_${arg0}.getTouchRead()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
