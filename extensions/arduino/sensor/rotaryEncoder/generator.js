/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.rotaryEncoder_init = function (block) {
        const x = block.getFieldValue('X');
        const y = block.getFieldValue('Y');
        const z = block.getFieldValue('Z');
        return `pinMode(${x}, INPUT_PULLUP);\npinMode(${y}, INPUT_PULLUP);\npinMode(${z}, INPUT_PULLUP);\n`;
    };

    Blockly.Arduino.rotaryEncoder_attachInterrupt = function (block) {
        const arg0 = block.getFieldValue('pin');
        const arg1 = this.getFieldValue('state');

        // var arg0 = block.getFieldValue('PIN') || '2';
        // var arg1 = block.getFieldValue('MODE') || 'RISING';
      
        var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
        branch = Blockly.Arduino.addLoopTrap(branch, block.id);
      
        Blockly.Arduino.definitions_['definitions_ISR_' + arg1 + arg0] =
          'void ISR_' + arg1 + '_' + arg0 + '() {\n' + branch + '}';
      
        var code = 'attachInterrupt(digitalPinToInterrupt(' + arg0 + '), ISR_' + arg1 + '_' + arg0 + ', ' + arg1 + ');\n';
        return code;
    };

    Blockly.Arduino.rotaryEncoder_detachInterrupt = function (block) {
        const arg0 = block.getFieldValue('pin');

        var code = 'detachInterrupt(digitalPinToInterrupt(' + arg0 + '));\n';
        return code;
    };

    return Blockly;
}

exports = addGenerator;