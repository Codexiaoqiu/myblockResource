/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Python.microbit_k230Peripheral_k230initServo = function (block) {
        const code = `
class Servo:
    def __init__(self,channel):
        self.pwm = PWM(channel, freq=200, duty=0)

    def set_angle(self, angle):
        angle = max(0, min(180, angle))
        duty_val = int(10 + (angle / 180.0) * 40)
        self.pwm.duty(duty_val)

    def deinit(self):
        self.pwm.duty(0)
        self.pwm.deinit()
`;
        return code;
    };

    Blockly.Python.microbit_k230Peripheral_k230initServoChan = function (block) {
        let arg0 = block.getFieldValue('PWM1') || '0';
        arg0 = parseInt(arg0, 10);
        const code = `servo${arg0} = Servo(${arg0})\n`;
        return code;
    };

    Blockly.Python.microbit_k230Peripheral_k230letServoRun = function (block) {
        let arg0 = block.getFieldValue('PWM1') || '0';
        arg0 = parseInt(arg0, 10);
        let arg1 = Blockly.Python.valueToCode(block, 'DEGREE', Blockly.Python.ORDER_ATOMIC) || '90';
        arg1 = parseInt(arg1, 10);
        const code = `servo${arg0}.set_angle(${arg1})\n`;
        return code;
    };
    Blockly.Python.microbit_k230Peripheral_k230StopServo = function (block) {
        let arg0 = block.getFieldValue('PWM1') || '0';
        arg0 = parseInt(arg0, 10);
        const code = `servo${arg0}.deinit()\n`;
        return code;
    };

    return Blockly;
}

exports = addGenerator;
