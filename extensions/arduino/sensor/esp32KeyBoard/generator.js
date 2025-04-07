/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initKeyBoard = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initKeyBoard =
            '#include "keyboard.hpp"';
        let arg0 = block.getFieldValue('PINS') || '15';
        arg0 = parseInt(arg0, 10);
        Blockly.Arduino.definitions_.arduino_smarthome_initKeyBoard =
        `Keyboard keyboard_${arg0}(${arg0});`;
        const code = ``;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_readKeyboard = function (block) {
        let arg0 = block.getFieldValue('PINS') || '15';
        arg0 = parseInt(arg0, 10);

        const code = `keyboard_${arg0}.getKeyboardRead()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
