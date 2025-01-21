/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="蜂鸣器" id="microbit_k230Buzzer" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitBuzzer"><field name="PWM">0</field></block>
    <block type="microbit_k230Peripheral_k230SetBuzzer"><field name="Type">1</field><field name="PWM">0</field></block>
</category>`;
}

exports = addToolbox;
