/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.utypePhotoelectric_init = function (block) {
        const pin = block.getFieldValue('pin');
        return `pinMode(${pin}, INPUT);\n`;
    };

    Blockly.Arduino.utypePhotoelectric_readSignal = function (block) {
        const pin = block.getFieldValue('pin');

        return [`digitalRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;