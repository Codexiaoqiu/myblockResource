/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ps2Rocker_init = function (block) {
        const x = block.getFieldValue('X');
        const y = block.getFieldValue('Y');
        const z = block.getFieldValue('Z');
        return `pinMode(${x}, INPUT);\npinMode(${y}, INPUT);\npinMode(${z}, INPUT_PULLUP);\n`;
    };

    Blockly.Arduino.ps2Rocker_readSignal = function (block) {
        const pin = block.getFieldValue('pin');

        return [`analogRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;