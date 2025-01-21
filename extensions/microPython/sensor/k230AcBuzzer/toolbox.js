/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="有源蜂鸣器" id="microbit_k230AcBuzzer" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitAcBuzzer"><field name="PINS">2</field></block>
    <block type="microbit_k230Peripheral_k230ReadAcBuzzer"><field name="TYPE">1</field><field name="PINS">2</field></block>
</category>`;
}

exports = addToolbox;
