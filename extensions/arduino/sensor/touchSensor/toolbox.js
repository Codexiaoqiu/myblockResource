/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TOUCHSENSOR_CATEGORY}" id="TOUCHSENSOR_CATEGORY" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="touchSensor_init" id="touchSensor_init">
        <field name="pin">2</field>
    </block>
    <block type="touchSensor_readSignal" id="touchSensor_readSignal">
       <field name="pin">2</field>
    </block>
</category>`;
}

exports = addToolbox;
