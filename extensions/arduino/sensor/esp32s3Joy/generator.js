/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.joy_init = function (block) {
        Blockly.Arduino.includes_.joy_init = `#include "BLEControlStick.h"`;
        Blockly.Arduino.definitions_.joy_init = `BLEControlStick _joy;`;
        return `_joy.begin();\n`;
    };

    Blockly.Arduino.joy_update = function (block) {
        return `_joy.update();\n`;
    };

    Blockly.Arduino.joy_button = function (block) {
        const button = block.getFieldValue('BUTTON');
        return [`_joy.Button(${button})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.joy_analog = function (block) {
        const axis = block.getFieldValue('AXIS');
        return [`_joy.Analog(${axis})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
