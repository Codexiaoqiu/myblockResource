/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="LED灯" id="microbit_k230LED" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230initLED"><field name="PINS">2</field></block>
    <block type="microbit_k230Peripheral_k230runLED"><field name="LED">1</field><field name="PINS">2</field></block>
</category>`;
}

exports = addToolbox;
