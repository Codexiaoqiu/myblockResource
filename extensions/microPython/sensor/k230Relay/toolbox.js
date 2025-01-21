/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="继电器" id="microbit_k230Relay" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitRelay"><field name="PINS">2</field></block>
    <block type="microbit_k230Peripheral_k230SetRelay"><field name="Type">1</field><field name="PINS">2</field></block>
</category>`;
}

exports = addToolbox;
