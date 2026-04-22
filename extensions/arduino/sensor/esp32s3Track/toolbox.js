/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TRACK_CATEGORY}" id="TRACK_CATEGORY" colour="#5A5AAD" secondaryColour="#484891">
    <block type="track_init" id="track_init">
    </block>
    <block type="track_read" id="track_read">
    </block>
    <block type="track_update" id="track_update">
    </block>
</category>`;
}

exports = addToolbox;
