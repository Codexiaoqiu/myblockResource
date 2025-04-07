/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Python['microbit_k230Peripheral_k230initMotor'] = function (block) {
        var code = `
class Motor:
    def __init__(self,channel,pina,pinb):
        self.a=Pin(pina,Pin.OUT)
        self.b=Pin(pinb,Pin.OUT)
        self.a.value(0)
        self.b.value(0)
        #构建PWM对象，频率为50Hz，占空比为0%，默认使能输出
        self.pwm = PWM(channel,50, 0, enable=True)

    def write(self,speed):
        if speed>0:
            self.a.value(1)
            self.b.value(0)
        elif speed<0:
            self.a.value(0)
            self.b.value(1)
        else:
            self.a.value(0)
            self.b.value(0)

        self.pwm.duty(abs(speed))

    def deinit(self):
        self.a.value(0)
        self.b.value(0)
        # 关闭PWM
        self.pwm.deinit()
`
        return code;
    };
    Blockly.Python['microbit_k230Peripheral_k230initMotorPins'] = function (block) {
        var arg0 = block.getFieldValue('PWM1') || '2';
        arg0 = parseInt(arg0)
        var arg1 = block.getFieldValue('PIN1') || '6';
        arg1 = parseInt(arg1)
        var arg2 = block.getFieldValue('PIN2') || '18';
        arg2 = parseInt(arg2)
        var code = `motor${arg0}=Motor(${arg0}, ${arg1}, ${arg2})\n`
        return code;
    };
    Blockly.Python['microbit_k230Peripheral_k230LetMotorRun'] = function (block) {
        var arg0 = block.getFieldValue('PWM1') || '2';
        arg0 = parseInt(arg0)
        var arg1 = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC) || '10';
        arg1 = arg1.replace(/^\(([-+]?\d+)\)$/, '$1');
        arg1 = parseInt(arg1)
        var code = `motor${arg0}.write(${arg1})\n`
        return code;
    };
    Blockly.Python['microbit_k230Peripheral_k230StopMotor'] = function (block) {
        var arg0 = block.getFieldValue('PWM1') || '2';
        arg0 = parseInt(arg0)
        var code = `motor${arg0}.deinit()\n`
        return code;
    };

    return Blockly;
}

exports = addGenerator;
