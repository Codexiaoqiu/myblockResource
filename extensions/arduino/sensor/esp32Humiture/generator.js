/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initHumiture = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initHumiture =
            '#include "humiture.hpp"';
        let arg0 = block.getFieldValue('PINS') || '13';
        arg0 = parseInt(arg0, 10);
        Blockly.Arduino.definitions_[`arduino_smarthome_initHumiture_${arg0}`] =
        `Humiture humiture_${arg0}(${arg0});`;
        const code = ``;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_readHumiture = function (block) {
        let arg0 = block.getFieldValue('PINS') || '13';
        let arg1 = block.getFieldValue('TYPE') || '0';
        arg0 = parseInt(arg0, 10);
        arg1 = parseInt(arg1, 10);
        let code;
        if (arg1 === 0) {
            code = `humiture_${arg0}.getHumitureTemperatureRead()`;
        } else {
            code = `humiture_${arg0}.getHumitureHumidityRead()`;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
