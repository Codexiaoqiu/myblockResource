/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Python.microbit_k230Peripheral_k230InitBuzzer = function (block) {
        let arg0 = block.getFieldValue('PWM') || '0';
        arg0 = parseInt(arg0, 10);

        const code = `
notes = {
    'C4': 262, 'D4': 294, 'E4': 330, 'F4': 349,
    'G4': 392, 'A4': 440, 'B4': 494, 'C5': 523
}
def play_tone(note, duration):
    """播放单个音符"""
    freq = notes.get(note, 0)
    if freq > 0:
        beep_pwm${arg0}.freq(freq)          # 设置频率
        beep_pwm${arg0}.duty(50)            # 打开声音（50%占空比，声音适中）
        time.sleep_ms(duration)
        beep_pwm${arg0}.duty(0)             # 关闭声音
        time.sleep_ms(30)        # 音符之间的短暂停顿
    else:
        time.sleep_ms(duration)  # 休止符


beep_pwm${arg0} = PWM(${arg0}, freq=4000, duty=0)\n`;

        return code;
    };

    Blockly.Python.microbit_k230Peripheral_k230SetBuzzer = function (block) {
        const arg0 = block.getFieldValue('Type') || 'E4';
        let arg1 = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC) || '';


        arg1 = parseInt(arg1, 10);

        const code = `play_tone("${arg0}", ${arg1})\n`;
        return code;
    };

    Blockly.Python.microbit_k230Peripheral_k230EndBuzzer = function (block) {
        let arg0 = block.getFieldValue('PWM') || '0';
        arg0 = parseInt(arg0, 10);
        const code = `beep_pwm${arg0}.deinit()\n`;
        return code;
    };

    Blockly.Python.microbit_k230Peripheral_k230PlaySong = function (block) {
        const songName = block.getFieldValue('SONG') || 'little_star';
        const songs = {
            little_star: [
                ['C4', 300], ['C4', 300], ['G4', 300], ['G4', 300], ['A4', 300], ['A4', 300], ['G4', 600],
                ['F4', 300], ['F4', 300], ['E4', 300], ['E4', 300], ['D4', 300], ['D4', 300], ['C4', 600],
                ['G4', 300], ['G4', 300], ['F4', 300], ['F4', 300], ['E4', 300], ['E4', 300], ['D4', 600],
                ['G4', 300], ['G4', 300], ['F4', 300], ['F4', 300], ['E4', 300], ['E4', 300], ['D4', 600],
                ['C4', 300], ['C4', 300], ['G4', 300], ['G4', 300], ['A4', 300], ['A4', 300], ['G4', 600],
                ['F4', 300], ['F4', 300], ['E4', 300], ['E4', 300], ['D4', 300], ['D4', 300], ['C4', 600]
            ],
            two_tigers: [
                ['C4', 200], ['D4', 200], ['E4', 200], ['C4', 200],
                ['C4', 200], ['D4', 200], ['E4', 200], ['C4', 200],
                ['E4', 200], ['F4', 200], ['G4', 400],
                ['E4', 200], ['F4', 200], ['G4', 400],
                ['G4', 150], ['A4', 150], ['G4', 150], ['F4', 150], ['E4', 200], ['C4', 200],
                ['G4', 150], ['A4', 150], ['G4', 150], ['F4', 150], ['E4', 200], ['C4', 200],
                ['C4', 200], ['G4', 200], ['C4', 400],
                ['C4', 200], ['G4', 200], ['C4', 400]
            ],
            happy_birthday: [
                ['C4', 200], ['C4', 200], ['D4', 400], ['C4', 400], ['F4', 400], ['E4', 800],
                ['C4', 200], ['C4', 200], ['D4', 400], ['C4', 400], ['G4', 400], ['F4', 800],
                ['C4', 200], ['C4', 200], ['C5', 400], ['A4', 400], ['F4', 400], ['E4', 400], ['D4', 800],
                ['A4', 200], ['A4', 200], ['A4', 400], ['F4', 400], ['G4', 400], ['F4', 800]
            ],
            ode_to_joy: [
                ['E4', 250], ['E4', 250], ['F4', 250], ['G4', 250],
                ['G4', 250], ['F4', 250], ['E4', 250], ['D4', 250],
                ['C4', 250], ['C4', 250], ['D4', 250], ['E4', 250],
                ['E4', 375], ['D4', 125], ['D4', 500],
                ['E4', 250], ['E4', 250], ['F4', 250], ['G4', 250],
                ['G4', 250], ['F4', 250], ['E4', 250], ['D4', 250],
                ['C4', 250], ['C4', 250], ['D4', 250], ['E4', 250],
                ['D4', 375], ['C4', 125], ['C4', 500]
            ],
            count_ducks: [
                ['C4', 300], ['D4', 300], ['E4', 300], ['F4', 300], ['G4', 600],
                ['G4', 300], ['F4', 300], ['E4', 300], ['D4', 300], ['C4', 600],
                ['E4', 300], ['F4', 300], ['G4', 600],
                ['E4', 300], ['F4', 300], ['G4', 600],
                ['G4', 200], ['A4', 200], ['G4', 200], ['F4', 200], ['E4', 300], ['D4', 300], ['C4', 600]
            ]
        };

        const songData = songs[songName] || songs.little_star;
        const songArrayStr = songData.map(n => `("${n[0]}",${n[1]})`).join(',');

        const code = `${songName} = [${songArrayStr}]\nfor note, duration in ${songName}:\n    play_tone(note, duration)\n`;
        return code;
    };

    return Blockly;
}

exports = addGenerator;
