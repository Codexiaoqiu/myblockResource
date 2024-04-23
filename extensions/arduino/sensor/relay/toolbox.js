/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_RELAY_CATEGORY}" id="RELAY_CATEGORY" colour="#007979" secondaryColour="#007979">
    <block type="relay_init" id="relay_init">
        <field name="pin">8</field>
    </block>
    <block type="relay_setState" id="relay_setState">
       <field name="pin">8</field>
    </block>
</category>`;
}

exports = addToolbox;
