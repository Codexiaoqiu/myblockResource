/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="电机" id="arduino_smarthome_moto" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initMoto"><field name="PINSA">19</field><field name="PINSB">23</field></block>
    <block type="arduino_smarthome_setMoto"><field name="MOTOTYPE">1</field><field name="PINSA">19</field><field name="PINSB">23</field></block>
</category>`;
}

exports = addToolbox;
