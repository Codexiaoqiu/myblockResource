/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="超声波传感器" id="microbit_k230Ultrasound" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitUltrasound"><field name="PINS">2</field><field name="PINS1">3</field></block>
    <block type="microbit_k230Peripheral_k230ReadUltrasound"><field name="PINS">2</field><field name="PINS1">3</field></block>
</category>`;
}

exports = addToolbox;
