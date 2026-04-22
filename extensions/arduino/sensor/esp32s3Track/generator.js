/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.track_init = function (block) {
        Blockly.Arduino.includes_.track_init = `#include "Tracking.h"`;
        Blockly.Arduino.definitions_.track_init =
`
int TrackSensorLeftValue1 = 0;
int TrackSensorLeftValue2 = 0;
int TrackSensorRightValue1 = 0;
int TrackSensorRightValue2 = 0;
`;
        return `Track_init();\n`;
    };

    Blockly.Arduino.track_read = function (block) {
        const sensor = block.getFieldValue('SENSOR');

        const sensorMap = {
            LEFT_OUTER: 'TrackSensorLeftValue2',
            LEFT_INNER: 'TrackSensorLeftValue1',
            RIGHT_INNER: 'TrackSensorRightValue1',
            RIGHT_OUTER: 'TrackSensorRightValue2'
        };

        const varName = sensorMap[sensor] || 'TrackSensorLeftValue2';
        return [varName, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.track_update = function (block) {
        return `Track_Receive();\n`;
    };

    return Blockly;
}

exports = addGenerator;
