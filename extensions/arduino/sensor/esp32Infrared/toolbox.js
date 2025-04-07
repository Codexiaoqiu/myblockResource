/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="红外传感器" id="arduino_smarthome_infrared" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initRead"><field name="PINS">17</field></block>
    <block type="arduino_smarthome_readRed"><field name="PINS">17</field><field name="REDTYPE">0</field></block>
</category>`;
}

exports = addToolbox;
