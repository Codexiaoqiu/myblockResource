/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="LCD" id="arduino_smarthome_LCD" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initLCD"></block>
    <block type="arduino_smarthome_setLCD"><value name="ROW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="COL"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>
    <block type="arduino_smarthome_setLCDStr"><value name="STRING"><shadow type="text"><field name="TEXT">HELLO WORLD</field></shadow></value></block>
    <block type="arduino_smarthome_clearLCDStr"></block>
</category>`;
}

exports = addToolbox;
