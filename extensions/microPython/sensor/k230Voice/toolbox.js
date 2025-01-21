/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="声音传感器" id="microbit_k230Voice" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitVoice"><field name="PINS">2</field></block>
    <block type="microbit_k230Peripheral_k230ReadVoice"><field name="PINS">2</field></block>
</category>`;
}

exports = addToolbox;
