/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initBuzzer = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initBuzzer =
            '#include "buzzer.hpp"';
        let arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0, 10);
        Blockly.Arduino.definitions_[`arduino_smarthome_initBuzzer_${arg0}`] =
        `Buzzer buzzer_${arg0}(${arg0});`;
        const code = ``;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_setBuzzer = function (block) {
        let arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0, 10);
        let arg1 =
        Blockly.Arduino.valueToCode(
            block,
            'BUZZER',
            Blockly.Arduino.ORDER_UNARY_POSTFIX
        ) || 120;
        arg1 = parseInt(arg1, 10);
        const code = `buzzer_${arg0}.begin(${arg1});\n`;
        return code;
    };

    return Blockly;
}

exports = addGenerator;
