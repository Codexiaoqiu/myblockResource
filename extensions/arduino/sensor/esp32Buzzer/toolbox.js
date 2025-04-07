/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="蜂鸣器" id="arduino_smarthome_buzzer" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initBuzzer"><field name="PINS">2</field></block>
    <block type="arduino_smarthome_setBuzzer"><field name="PINS">2</field><value name="BUZZER"><shadow type="math_uint8_number"><field name="NUM">130</field></shadow></value></block>
</category>`;
}

exports = addToolbox;
