/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_REEDPIPE_CATEGORY}" id="REEDPIPE_CATEGORY" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="reedPipe_init" id="reedPipe_init">
        <field name="pin">3</field>
    </block>
    <block type="reedPipe_readSignal" id="reedPipe_readSignal">
       <field name="pin">3</field>
    </block>
</category>`;
}

exports = addToolbox;
