/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="雨滴传感器" id="arduino_smarthome_rain" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initRain"><field name="PINS">4</field></block>
    <block type="arduino_smarthome_readRain"><field name="PINS">4</field><field name="TYPE">1</field></block>
</category>`;
}

exports = addToolbox;
