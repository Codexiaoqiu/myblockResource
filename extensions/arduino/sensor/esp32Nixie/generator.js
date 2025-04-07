/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initNixie = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initNixie =
            '#include "nixie_tube.hpp"';
        Blockly.Arduino.definitions_.arduino_smarthome_initNixie =
        `NixieTube nixietube;`;
        const code = ``;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_setNixieLight = function (block) {
        let arg0 = Blockly.Arduino.valueToCode(
            block,
            'LIGHT',
            Blockly.Arduino.ORDER_UNARY_POSTFIX
        );
        arg0 = parseInt(arg0, 10);
        const code = `nixietube.init(${arg0});\n`;
        return code;
    };

    Blockly.Arduino.arduino_smarthome_setNixie = function (block) {
        const arg0 = Blockly.Arduino.valueToCode(
            block,
            'STRING',
            Blockly.Arduino.ORDER_UNARY_POSTFIX
        );
        const code = `nixietube.display(${arg0});\n`;
        return code;
    };

    return Blockly;
}

exports = addGenerator;
