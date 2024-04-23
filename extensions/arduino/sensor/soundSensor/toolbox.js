/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SOUNDSENSOR_CATEGORY}" id="SOUNDSENSOR_CATEGORY" colour="#F08080" secondaryColour="#F08080">
    <block type="soundSensor_init" id="soundSensor_init">
        <field name="pin">A5</field>
    </block>
    <block type="soundSensor_readDigitalSignal" id="soundSensor_readDigitalSignal">
       <field name="pin">A5</field>
    </block>
    <block type="soundSensor_readAnalogSignal" id="soundSensor_readAnalogSignal">
       <field name="pin">A5</field>
    </block>
</category>`;
}

exports = addToolbox;
