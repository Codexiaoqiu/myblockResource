/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="灯带" id="arduino_smarthome_LECD" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initLECD"><field name="LECDPIN">14</field></block>
    <block type="arduino_smarthome_setLecdLight"><field name="LECDPIN">14</field><value name="LIGHT"><shadow type="math_0to100_number"><field name="NUM">50</field></shadow></value></block>
    <block type="arduino_smarthome_setLecdLine"><field name="LECDPIN">14</field><field name="LED">1</field><value name="COLOR"><shadow type="colour_picker"></shadow></value></block>
    <block type="arduino_smarthome_setLecdAll"><field name="LECDPIN">14</field><field name="START">1</field><field name="END">10</field><value name="COLOR"><shadow type="colour_picker"></shadow></value></block>
</category>`;
}

exports = addToolbox;
