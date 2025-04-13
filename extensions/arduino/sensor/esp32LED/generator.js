/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initlight = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initlight =
            '#include "led.hpp"';
        let arg0 = block.getFieldValue('PINS') || '27';

        arg0 = parseInt(arg0, 10);
        Blockly.Arduino.definitions_[`arduino_smarthome_initlight_${arg0}`] =
              `LED led_${arg0}(${arg0});`;
        const code = '';
        return code;
    };

    Blockly.Arduino.arduino_smarthome_openLED = function (block) {
        let arg0 = block.getFieldValue('TYPE') || 1;
        let arg1 = block.getFieldValue('PINS') || '27';
        arg0 = parseInt(arg0, 10);
        arg1 = parseInt(arg1, 10);
        let code = '';
        if (arg0 === 1) {
            code = `led_${arg1}.open();\n`;
        } else {
            code = `led_${arg1}.close();\n`;
        }

        return code;
    };

    return Blockly;
}

exports = addGenerator;
