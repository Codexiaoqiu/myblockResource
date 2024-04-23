/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_HALLSENSOR_CATEGORY}" id="HALLSENSOR_CATEGORY" colour="#F08080" secondaryColour="#F08080">
    <block type="hallSensor_init" id="hallSensor_init">
        <field name="pin">A5</field>
    </block>
    <block type="hallSensor_readDigitalSignal" id="hallSensor_readDigitalSignal">
       <field name="pin">A5</field>
    </block>
    <block type="hallSensor_readAnalogSignal" id="hallSensor_readAnalogSignal">
       <field name="pin">A5</field>
    </block>
</category>`;
}

exports = addToolbox;
