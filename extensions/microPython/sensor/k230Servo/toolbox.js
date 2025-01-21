/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="舵机" id="microbit_k230Servo" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230initServo"></block>
    <block type="microbit_k230Peripheral_k230initServoChan"><field name="PWM1">2</field></block>
    <block type="microbit_k230Peripheral_k230letServoRun"><field name="PWM1">2</field><value name="DEGREE"><shadow type="math_half_angle"><field name="NUM">90</field></shadow></value></block>
    <block type="microbit_k230Peripheral_k230StopServo"><field name="PWM1">0</field></block>
</category>`;
}

exports = addToolbox;
