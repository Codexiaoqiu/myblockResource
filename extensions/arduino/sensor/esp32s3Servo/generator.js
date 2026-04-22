/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.servo_init = function (block) {
        Blockly.Arduino.definitions_.servo_init = [
            `EMO_Servo *servo1 = emo.getServo(S1);`,
            `EMO_Servo *servo2 = emo.getServo(S2);`,
            `EMO_Servo *servo3 = emo.getServo(S3);`,
            `EMO_Servo *servo4 = emo.getServo(S4);`
        ].join('\n');
        return '';
    };

    Blockly.Arduino.servo_read = function (block) {
        const servo = block.getFieldValue('SERVO');
        return [`servo${servo.slice(1)}->read()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.servo_write = function (block) {
        const servo = block.getFieldValue('SERVO');
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
        return `servo${servo.slice(1)}->write(${angle});\n`;
    };

    return Blockly;
}

exports = addGenerator;
