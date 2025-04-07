/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="亮度传感器" id="arduino_smarthome_luminance" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initLuminance"><field name="PINS">34</field></block>
    <block type="arduino_smarthome_readLuminance"><field name="PINS">34</field></block>
</category>`;
}

exports = addToolbox;
