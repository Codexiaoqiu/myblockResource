/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="十二键矩阵键盘" id="arduino_smarthome_keyboard" colour="#CF6363" secondaryColour="#CF6363">
    <block type="arduino_smarthome_initKeyBoard"><field name="PINS">15</field></block>
    <block type="arduino_smarthome_readKeyboard"><field name="PINS">15</field></block>
</category>`;
}

exports = addToolbox;
