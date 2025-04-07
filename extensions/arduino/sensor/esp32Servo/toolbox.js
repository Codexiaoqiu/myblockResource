/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="舵机" id="arduino_smarthome_Servo" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initDoor"><field name="PINS">0</field></block>
    <block type="arduino_smarthome_setDoor"><field name="PINS">0</field><value name="ANGLE"><shadow type="math_half_angle"><field name="NUM">0</field></shadow></value></block>
</category>`;
}

exports = addToolbox;
