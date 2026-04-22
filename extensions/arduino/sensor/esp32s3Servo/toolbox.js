/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SERVO_CATEGORY}" id="SERVO_CATEGORY" colour="#7A5A5A" secondaryColour="#5A4040">
    <block type="servo_init" id="servo_init">
    </block>
    <block type="servo_read" id="servo_read">
    </block>
    <block type="servo_write" id="servo_write">
        <value name="ANGLE">
            <shadow type="math_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
