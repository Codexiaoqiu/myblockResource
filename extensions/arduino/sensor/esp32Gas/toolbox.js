/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="气体传感器" id="arduino_smarthome_Gas" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initGAS"><field name="PINS">33</field></block>
    <block type="arduino_smarthome_readGas"><field name="PINS">33</field><field name="GASTYPE">0</field></block>
</category>`;
}

exports = addToolbox;
