/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_JOY_CATEGORY}" id="JOY_CATEGORY" colour="#5A5AAD" secondaryColour="#484891">
    <block type="joy_init" id="joy_init">
    </block>
    <block type="joy_update" id="joy_update">
    </block>
    <block type="joy_button" id="joy_button">
    </block>
    <block type="joy_analog" id="joy_analog">
    </block>
</category>`;
}

exports = addToolbox;
