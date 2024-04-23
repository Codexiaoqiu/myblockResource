/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SINGLELED_CATEGORY}" id="SINGLELED_CATEGORY" colour="#FF0000" secondaryColour="#FF0000">
    <block type="singleLED_setLEDState" id="singleLED_setLEDState">
        <value name="pin">
            <shadow type="math_number">
                <field name="NUM">9</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;

