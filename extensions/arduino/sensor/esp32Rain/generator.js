/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initRain = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initRain =
            '#include "raindrop.hpp"';
        let arg0 = block.getFieldValue('PINS') || '4';
        arg0 = parseInt(arg0, 10);
        Blockly.Arduino.definitions_[`arduino_smarthome_initRain_${arg0}`] =
        `Raindrop raindrop_${arg0}(${arg0});`;
        const code = ``;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_readRain = function (block) {
        let arg0 = block.getFieldValue('PINS') || '4';
        let arg1 = block.getFieldValue('TYPE') || '1';
        arg0 = parseInt(arg0, 10);
        arg1 = parseInt(arg1, 10);
        let code;
        if (arg1 === 1) {
            code = `raindrop_${arg0}.getRaindropRead()`;
        } else {
            code = `raindrop_${arg0}.getRaindropAnalogRead()`;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
