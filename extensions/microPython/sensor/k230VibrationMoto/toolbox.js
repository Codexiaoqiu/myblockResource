/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="震动马达" id="microbit_k230VibrationMoto" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitVibrationMoto"><field name="PINS">2</field></block>
    <block type="microbit_k230Peripheral_k230ReadVibrationMoto"><field name="PINS">2</field></block>
</category>`;
}

exports = addToolbox;
