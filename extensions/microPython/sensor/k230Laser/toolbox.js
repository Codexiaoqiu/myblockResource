/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="直线激光射灯" id="microbit_k230Laser" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitLaser"><field name="PINS">2</field></block>
    <block type="microbit_k230Peripheral_k230SetLaser"><field name="Type">1</field><field name="PINS">2</field></block>
</category>`;
}

exports = addToolbox;
