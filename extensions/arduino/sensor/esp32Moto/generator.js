/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initMoto = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initMoto =
            '#include "moto.hpp"';
        let arg0 = block.getFieldValue('PINSA') || '19';
        let arg1 = block.getFieldValue('PINSB') || '23';

        arg0 = parseInt(arg0, 10);
        arg1 = parseInt(arg1, 10);
        Blockly.Arduino.definitions_.arduino_smarthome_setMotoPin =
              `Moto moto_${arg0}_${arg1}(${arg0}, ${arg1});`;
        const code = '';
        return code;
    };

    Blockly.Arduino.arduino_smarthome_setMoto = function (block) {
        let arg0 = block.getFieldValue('MOTOTYPE') || 1;
        let arg1 = block.getFieldValue('PINSA') || '19';
        let arg2 = block.getFieldValue('PINSB') || '23';
        arg0 = parseInt(arg0, 10);
        arg1 = parseInt(arg1, 10);
        arg2 = parseInt(arg2, 10);
        let code = '';
        if (arg0 === 1) {
            code = `moto_${arg1}_${arg2}.open();\n`;
        } else {
            code = `moto_${arg1}_${arg2}.close();\n`;
        }

        return code;
    };

    return Blockly;
}

exports = addGenerator;
