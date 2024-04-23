/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.hallSensor_init = function (block) {
        const pin = block.getFieldValue('pin');
        return `pinMode(${pin}, INPUT);\n`;
    };

    Blockly.Arduino.hallSensor_readDigitalSignal = function (block) {
        const pin = block.getFieldValue('pin');

        return [`digitalRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.hallSensor_readAnalogSignal = function (block) {
        const pin = block.getFieldValue('pin');

        return [`analogRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;