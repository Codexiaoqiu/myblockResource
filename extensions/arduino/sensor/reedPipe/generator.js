/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.reedPipe_init = function (block) {
        const pin = block.getFieldValue('pin');
        return `pinMode(${pin}, INPUT_PULLUP);\n`;
    };

    Blockly.Arduino.reedPipe_readSignal = function (block) {
        const pin = block.getFieldValue('pin');

        return [`digitalRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;