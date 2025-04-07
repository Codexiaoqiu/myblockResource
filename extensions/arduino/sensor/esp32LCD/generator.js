/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initLCD = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initLCD =
            '#include "lcd.hpp"';
        Blockly.Arduino.definitions_.arduino_smarthome_initLCD =
        `LCD lcd;`;
        const code = `lcd.init();\n`;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_setLCD = function (block) {
        let arg0 = Blockly.Arduino.valueToCode(
            block,
            'ROW',
            Blockly.Arduino.ORDER_UNARY_POSTFIX
        );
        let arg1 = Blockly.Arduino.valueToCode(
            block,
            'COL',
            Blockly.Arduino.ORDER_UNARY_POSTFIX
        );
        arg0 = parseInt(arg0, 10);
        arg1 = parseInt(arg1, 10);

        if (arg0 > 0) arg0 = arg0 - 1;
        else arg0 = 0;
        if (arg1 > 0) arg1 = arg1 - 1;
        else arg1 = 0;
        const code = `lcd.setCur(${arg0}, ${arg1});\n`;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_setLCDStr = function (block) {
        const arg0 = Blockly.Arduino.valueToCode(
            block,
            'STRING',
            Blockly.Arduino.ORDER_UNARY_POSTFIX
        );
        const code = `lcd.display(${arg0});\n`;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_clearLCDStr = function (block) {
        const code = 'lcd.clean();\n';
        return code;
    };
    return Blockly;
}

exports = addGenerator;
