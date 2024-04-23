/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_ROTARYENCODER_CATEGORY}" id="ROTARYENCODER_CATEGORY" colour="#FF0000" secondaryColour="#FF0000">
    <block type="rotaryEncoder_init" id="rotaryEncoder_init">
        <field name="X">2</field>
        <field name="Y">3</field>
        <field name="Z">4</field>
    </block>
    <block type="rotaryEncoder_attachInterrupt" id="rotaryEncoder_attachInterrupt">
        <field name="pin">2</field>
    </block>
    <block type="rotaryEncoder_detachInterrupt" id="rotaryEncoder_detachInterrupt">
       <field name="pin">2</field>
    </block>
</category>`;
}

exports = addToolbox;
