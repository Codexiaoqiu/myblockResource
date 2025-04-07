/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="雾化器" id="microbit_k230fog" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230initfog"><field name="PINS">2</field></block>
    <block type="microbit_k230Peripheral_k230runfog"><field name="fog">1</field><field name="PINS">2</field></block>
</category>`;
}

exports = addToolbox;
