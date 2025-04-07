/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Python['microbit_k230Peripheral_k230InitBuzzer'] = function (block) {
        var arg0 = block.getFieldValue('PWM') || '0';
        arg0 = parseInt(arg0)

        var code = `
notes = {
    'C4': 261,
    'D4': 293,
    'E4': 329,
    'F4': 349,
    'G4': 392,
    'A4': 440,
    'B4': 493,
    'C5': 523
}
def play_tone(note, duration):
    """播放指定音符"""
    frequency = notes.get(note, 0)  # 获取音符对应的频率
    if frequency > 0:
        beep_pwm${arg0}.freq(frequency)        # 设置频率
        beep_pwm${arg0}.enable(True)           # 启用蜂鸣器
        time.sleep_ms(duration)     # 持续播放指定时间
        beep_pwm${arg0}.enable(False)          # 停止蜂鸣器
        time.sleep_ms(50)           # 音符之间的短暂停顿


beep_pwm${arg0} = PWM(${arg0}, 4000, 50, enable=False)\n`

        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230SetBuzzer'] = function (block) {
        var arg0 = block.getFieldValue('Type') || 'E4';
        var arg1 = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC) || '';



        arg1 = parseInt(arg1)

        var code = `play_tone("${arg0}", ${arg1})\n`
        return code
    };

    Blockly.Python['microbit_k230Peripheral_k230EndBuzzer'] = function (block) {
        var arg0 = block.getFieldValue('PWM') || '0';
        arg0 = parseInt(arg0)
        var code = `beep_pwm${arg0}.deinit()\n`
        return code
    };

    return Blockly;
}

exports = addGenerator;
