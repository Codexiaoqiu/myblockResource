/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_PS2ROCKER_CATEGORY}" id="PS2ROCKER_CATEGORY" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="ps2Rocker_init" id="ps2Rocker_init">
        <field name="X">A0</field>
        <field name="Y">A1</field>
        <field name="Z">A5</field>
    </block>
    <block type="ps2Rocker_readSignal" id="ps2Rocker_readSignal">
       <field name="pin">A0</field>
    </block>
</category>`;
}

exports = addToolbox;
