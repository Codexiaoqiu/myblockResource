/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_VIBRATIONMOTOR_CATEGORY}" id="VIBRATIONMOTOR_CATEGORY" colour="#FF0000" secondaryColour="#FF0000">
    <block type="vibrationMotor_init" id="vibrationMotor_init">
        <field name="pin">9</field>
    </block>
    <block type="vibrationMotor_setMotorState" id="vibrationMotor_setMotorState">
       <field name="pin">9</field>
    </block>
</category>`;
}

exports = addToolbox;
