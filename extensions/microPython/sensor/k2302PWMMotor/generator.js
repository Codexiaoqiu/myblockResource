/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Python.microbit_k230Peripheral_k230init2PWMMotor = function (block) {
        const code = `
class Motor:
    def __init__(self, channel1, channel2):
        self.pwma = PWM(channel1, freq=2000, duty=0)
        self.pwmb = PWM(channel2, freq=2000, duty=0)

    def write(self,speed):
        duty = min(100, max(0, abs(speed)))
        if speed > 0:
            # 正转：IA 输出 PWM，IB 设为 0
            self.pwma.duty(duty)
            self.pwmb.duty(0)
        elif speed < 0:
            # 反转：IA 设为 0，IB 输出 PWM
            self.pwma.duty(0)
            self.pwmb.duty(duty)
        else:
            # 停止
            self.pwma.duty(0)
            self.pwmb.duty(0)

    def deinit(self):
        # 关闭PWM
        self.pwma.duty(0)
        self.pwmb.duty(0)
        self.pwma.deinit()
        self.pwmb.deinit()
`;
        return code;
    };

    Blockly.Python.microbit_k230Peripheral_k230init2PWMMotorPWM = function (block) {
        let arg0 = block.getFieldValue('PWM1') || '0';
        arg0 = parseInt(arg0, 10);
        let arg1 = block.getFieldValue('PWM2') || '1';
        arg1 = parseInt(arg1, 10);
        const code = `motor${arg0}${arg1}=Motor(${arg0}, ${arg1})\n`;
        return code;
    };

    Blockly.Python.microbit_k230Peripheral_k230Let2PWMMotorRun = function (block) {
        let arg0 = block.getFieldValue('PWM1') || '0';
        arg0 = parseInt(arg0, 10);
        let arg1 = block.getFieldValue('PWM2') || '1';
        arg1 = parseInt(arg1, 10);
        let arg2 = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC) || '10';
        arg2 = arg2.replace(/^\(([-+]?\d+)\)$/, '$1');
        arg2 = parseInt(arg2, 10);
        const code = `motor${arg0}${arg1}.write(${arg2})\n`;
        return code;
    };

    Blockly.Python.microbit_k230Peripheral_k230Stop2PWMMotor = function (block) {
        let arg0 = block.getFieldValue('PWM1') || '0';
        arg0 = parseInt(arg0, 10);
        let arg1 = block.getFieldValue('PWM2') || '1';
        arg1 = parseInt(arg1, 10);
        const code = `motor${arg0}${arg1}.deinit()\n`;
        return code;
    };

    return Blockly;
}

exports = addGenerator;
