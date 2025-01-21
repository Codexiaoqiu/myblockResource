/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="环境光传感器" id="microbit_k230Ambientlight" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitAmbientlight"><field name="I2C">1</field></block>
    <block type="microbit_k230Peripheral_k230ReadAmbientlight"></block>
</category>`;
}

exports = addToolbox;
