/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Python['microbit_k230Peripheral_k230initServo'] = function (block) {
        var code = `
class Servo:
    def __init__(self,channel):
        #构建PWM对象，频率为1000Hz，占空比为0%，默认使能输出
        self.pwm = PWM(channel, 50, 7.5, enable=True)

    def set_angle(self, angle):
        # 将角度转换为占空比
        self.pwm.duty(2.5 + (angle / 180.0) * 10)

    def deinit(self):
        # 关闭PWM
        self.pwm.deinit()
`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230initServoChan'] = function (block) {
        var arg0 = block.getFieldValue('PWM1') || '2';
        arg0 = parseInt(arg0)
        var code = `servo${arg0} = Servo(${arg0})\n`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230letServoRun'] = function (block) {
        var arg0 = block.getFieldValue('PWM1') || '2';
        arg0 = parseInt(arg0)
        var arg1 = Blockly.Python.valueToCode(block, 'DEGREE', Blockly.Python.ORDER_ATOMIC) || '90';
        arg1 = parseInt(arg1)
        var code = `servo${arg0}.set_angle(${arg1})\n`
        return code;
    };
    Blockly.Python['microbit_k230Peripheral_k230StopServo'] = function (block) {
        var arg0 = block.getFieldValue('PWM1') || '2';
        arg0 = parseInt(arg0)
        var code = `servo${arg0}.deinit()\n`
        return code;
    };

    return Blockly;
}

exports = addGenerator;
