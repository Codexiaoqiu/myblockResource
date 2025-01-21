/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="陀螺仪" id="microbit_k230Sensor" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitSensor"><field name="I2C">1</field></block>
    <block type="microbit_k230Peripheral_k230ReadSensor"><field name="SENSOR">0</field></block>
</category>`;
}

exports = addToolbox;
