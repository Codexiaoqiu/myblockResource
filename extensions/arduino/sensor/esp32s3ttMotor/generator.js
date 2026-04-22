/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ttMotor_init = function (block) {
        Blockly.Arduino.includes_.ttMotor_init = `#include "enMotor.h"`;
        Blockly.Arduino.definitions_.ttMotor_init = `EMO_DCMotor *enMotor1 = emo.getMotor(M1);\nEMO_DCMotor *enMotor2 = emo.getMotor(M2);\nEMO_DCMotor *enMotor3 = emo.getMotor(M3);\nEMO_DCMotor *enMotor4 = emo.getMotor(M4);`;
        return '';
    };

    Blockly.Arduino.ttMotor_move = function (block) {
        const direction = block.getFieldValue('DIRECTION');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '50';

        const directionMap = {
            FORWARD: 'moveForward',
            BACKWARD: 'moveBackward',
            LEFT: 'moveLeft',
            RIGHT: 'moveRight',
            TURN_LEFT: 'turnLeft',
            TURN_RIGHT: 'turnRight',
            FORWARDLEFT: 'ForwardLeft',
            FORWARDRIGHT: 'ForwardRight'
        };

        const functionName = directionMap[direction] || 'moveForward';
        return `${functionName}(${speed});\n`;
    };

    Blockly.Arduino.ttMotor_stop = function (block) {
        const brake = Blockly.Arduino.valueToCode(block, 'BRAKE', Blockly.Arduino.ORDER_ATOMIC) || '100';
        return `stopMotors(${brake});\n`;
    };

    return Blockly;
}

exports = addGenerator;
