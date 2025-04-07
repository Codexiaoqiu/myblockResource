/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="数码管" id="arduino_smarthome_Nixie" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initNixie"></block>
    <block type="arduino_smarthome_setNixieLight"><value name="LIGHT"><shadow type="math_0to127_number"><field name="NUM">123</field></shadow></value></block>
    <block type="arduino_smarthome_setNixie"><value name="STRING"><shadow type="text"><field name="TEXT">12.34</field></shadow></value></block>
</category>`;
}

exports = addToolbox;
