/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initGAS = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initGAS =
            '#include "gas.hpp"';
        let arg0 = block.getFieldValue('PINS') || '33';
        arg0 = parseInt(arg0, 10);
        Blockly.Arduino.definitions_[`arduino_smarthome_initGAS_${arg0}`] =
        `Gas gas_${arg0}(${arg0});`;
        const code = ``;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_readGas = function (block) {
        let arg0 = block.getFieldValue('PINS') || '33';
        let arg1 = block.getFieldValue('GASTYPE') || '0';
        arg0 = parseInt(arg0, 10);
        arg1 = parseInt(arg1, 10);
        let code;
        if (arg1 === 0) {
            code = `gas_${arg0}.getGasDigitalRead()`;
        } else {
            code = `gas_${arg0}.getGasAnalogRead()`;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
