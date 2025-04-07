/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="LED灯" id="arduino_smarthome_LED" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initlight"><field name="PINS">27</field></block>
    <block type="arduino_smarthome_openLED"><field name="TYPE">1</field><field name="PINS">27</field></block>
</category>`;
}

exports = addToolbox;
