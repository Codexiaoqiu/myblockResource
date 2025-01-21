/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Python['microbit_k230Peripheral_k230InitBuzzer'] = function (block) {
        var arg0 = block.getFieldValue('PWM') || '0';
        arg0 = parseInt(arg0)

        var code = `beep_pwm${arg0} = PWM(${arg0}, 4000, 50, enable=False)\n`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230SetBuzzer'] = function (block) {
        var arg0 = block.getFieldValue('Type') || '1';
        var arg1 = block.getFieldValue('PWM') || '0';


        arg0 = parseInt(arg0)
        arg1 = parseInt(arg1)

        var code = `beep_pwm${arg1}.enable(${arg0})\n`
        return code
    };

    return Blockly;
}

exports = addGenerator;
