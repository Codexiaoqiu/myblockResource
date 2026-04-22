/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TTMOTOR_CATEGORY}" id="TTMOTOR_CATEGORY" colour="#CF6363" secondaryColour="#C94F4F">
    <block type="ttMotor_init" id="ttMotor_init">
    </block>
    <block type="ttMotor_move" id="ttMotor_move">
        <value name="SPEED">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    <block type="ttMotor_stop" id="ttMotor_stop">
        <value name="BRAKE">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
