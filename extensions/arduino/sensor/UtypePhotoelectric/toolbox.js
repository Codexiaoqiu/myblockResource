/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_UTYPEPHOTOELECTRIC_CATEGORY}" id="UTYPEPHOTOELECTRIC_CATEGORY" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="utypePhotoelectric_init" id="utypePhotoelectric_init">
        <field name="pin">3</field>
    </block>
    <block type="utypePhotoelectric_readSignal" id="utypePhotoelectric_readSignal">
       <field name="pin">3</field>
    </block>
</category>`;
}

exports = addToolbox;
