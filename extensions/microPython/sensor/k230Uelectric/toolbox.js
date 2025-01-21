/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="U型光电传感器" id="microbit_k230Uelectric" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitUelectric"><field name="PINS">2</field></block>
    <block type="microbit_k230Peripheral_k230ReadUelectric"><field name="PINS">2</field></block>
</category>`;
}

exports = addToolbox;
