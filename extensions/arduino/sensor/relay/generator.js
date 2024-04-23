/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.relay_init = function (block) {
        const pin = block.getFieldValue('pin');
        return `pinMode(${pin}, OUTPUT);\n`;
    };

    Blockly.Arduino.relay_setState = function (block) {
        const pin = block.getFieldValue('pin');
        const state = this.getFieldValue('state');

        return `digitalWrite(${pin}, ${state});\n`;
    };

    return Blockly;
}

exports = addGenerator;