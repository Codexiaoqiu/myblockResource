/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initLuminance = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initLuminance =
            '#include "luminance.hpp"';
        let arg0 = block.getFieldValue('PINS') || '34';
        arg0 = parseInt(arg0, 10);
        Blockly.Arduino.definitions_[`arduino_smarthome_initLuminance_${arg0}`] =
        `Luminance luminance_${arg0}(${arg0});`;
        const code = ``;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_readLuminance = function (block) {
        let arg0 = block.getFieldValue('PINS') || '34';
        arg0 = parseInt(arg0, 10);

        const code = `luminance_${arg0}.getLuminanceRead()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
