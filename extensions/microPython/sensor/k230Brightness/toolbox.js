/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="环境亮度传感器" id="microbit_k230Brightness" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitBrightness"><field name="PINS">2</field></block>
    <block type="microbit_k230Peripheral_k230ReadBrightness"><field name="PINS">2</field></block>
</category>`;
}

exports = addToolbox;
