/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Python['microbit_k230Peripheral_k230init2PWMMotor'] = function (block) {
        var code = `
class Motor:
    def __init__(self, channel1, channel2):
        #构建PWM对象，频率为1000Hz，占空比为0%，默认使能输出
        self.pwma = PWM(channel1, 1000, 0, enable=True)
        self.pwmb = PWM(channel2, 1000, 0, enable=True)

    def write(self,speed):
        if(speed>=0):
            self.pwma.duty(abs(speed*100))
            self.pwmb.duty(0)
        else:
            self.pwma.duty(0)
            self.pwmb.duty(abs(speed*100))

    def deinit(self):
        # 关闭PWM
        self.pwma.deinit()
        self.pwmb.deinit()
        self.pwma.enable(False)
        self.pwmb.enable(False)
`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230init2PWMMotorPWM'] = function (block) {
        var arg0 = block.getFieldValue('PWM1') || '0';
        arg0 = parseInt(arg0)
        var arg1 = block.getFieldValue('PWM2') || '1';
        arg1 = parseInt(arg1)
        var code = `motor${arg0}${arg1}=Motor(${arg0}, ${arg1})\n`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230Let2PWMMotorRun'] = function (block) {
        var arg0 = block.getFieldValue('PWM1') || '0';
        arg0 = parseInt(arg0)
        var arg1 = block.getFieldValue('PWM2') || '1';
        arg1 = parseInt(arg1)
        var arg2 = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC) || '10';
        arg2 = arg2.replace(/^\(([-+]?\d+)\)$/, '$1');
        arg2 = parseInt(arg2)
        console.log(arg2)
        var code = `motor${arg0}${arg1}.write(${arg2 / 100})\n`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230Stop2PWMMotor'] = function (block) {
        var arg0 = block.getFieldValue('PWM1') || '0';
        arg0 = parseInt(arg0)
        var arg1 = block.getFieldValue('PWM2') || '1';
        arg1 = parseInt(arg1)
        var code = `motor${arg0}${arg1}.deinit()\n`
        return code;
    };

    return Blockly;
}

exports = addGenerator;
