/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="人体传感器" id="microbit_k230People" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitPeople"><field name="PINS">2</field></block>
    <block type="microbit_k230Peripheral_k230ReadPeople"><field name="PINS">2</field></block>
</category>`;
}

exports = addToolbox;
