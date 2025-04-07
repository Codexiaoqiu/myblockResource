/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="温湿度传感器" id="arduino_smarthome_humiture" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initHumiture"><field name="PINS">13</field></block>
    <block type="arduino_smarthome_readHumiture"><field name="PINS">13</field><field name="TYPE">0</field></block>
</category>`;
}

exports = addToolbox;
