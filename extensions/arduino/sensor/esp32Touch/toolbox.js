/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="触摸传感器" id="arduino_smarthome_touch" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initTouch"><field name="PINS">35</field></block>
    <block type="arduino_smarthome_readTouch"><field name="PINS">35</field></block>
</category>`;
}

exports = addToolbox;
