/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="双通道电机" id="microbit_k2302PWMMotor" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230init2PWMMotor"></block>
    <block type="microbit_k230Peripheral_k230init2PWMMotorPWM"><field name="PWM1">0</field><field name="PWM2">1</field></block>
    <block type="microbit_k230Peripheral_k230Let2PWMMotorRun"><field name="PWM1">0</field><field name="PWM2">1</field><value name="SPEED"><shadow type="math_100to100_number"><field name="NUM">50</field></shadow></value></block>
    <block type="microbit_k230Peripheral_k230Stop2PWMMotor"><field name="PWM1">0</field><field name="PWM2">1</field></block>
</category>`;
}

exports = addToolbox;
