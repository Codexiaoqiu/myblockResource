/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="压力传感器" id="microbit_k230Pressure" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitPressure"><field name="PINS">2</field></block>
    <block type="microbit_k230Peripheral_k230ReadPressure"><field name="PINS">2</field></block>
</category>`;
}

exports = addToolbox;
