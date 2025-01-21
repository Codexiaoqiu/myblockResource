/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="按键" id="microbit_k230KeyBoard" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitKeyBoard"><field name="PINS">2</field></block>
    <block type="microbit_k230Peripheral_k230ReadKeyBoard"><field name="PINS">2</field></block>
</category>`;
}

exports = addToolbox;
