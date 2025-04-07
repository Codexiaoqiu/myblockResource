/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="人体传感器" id="arduino_smarthome_people" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_setBodyPin"><field name="PINS">39</field></block>
    <block type="arduino_smarthome_readBody"><field name="PINS">39</field></block>
</category>`;
}

exports = addToolbox;
