/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="电机" id="microbit_k230Motor" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230initMotor"></block>
    <block type="microbit_k230Peripheral_k230initMotorPins"><field name="PIN1">6</field><field name="PIN2">18</field><field name="PWM1">2</field></block>
    <block type="microbit_k230Peripheral_k230LetMotorRun"><field name="PWM1">0</field><value name="SPEED"><shadow type="math_100to100_number"><field name="NUM">10</field></shadow></value></block>
    <block type="microbit_k230Peripheral_k230StopMotor"><field name="PWM1">0</field></block>
</category>`;
}

exports = addToolbox;
