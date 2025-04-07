/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduino_smarthome_initLECD = function (block) {
        Blockly.Arduino.includes_.arduino_smarthome_initLECD =
            '#include "strip.hpp"';
        let arg0 = block.getFieldValue('LECDPIN') || '14';

        arg0 = parseInt(arg0, 10);
        Blockly.Arduino.definitions_.arduino_smarthome_initLECD =
              `Strip_module strip_${arg0}(${arg0});`;
        const code = '';
        return code;
    };

    Blockly.Arduino.arduino_smarthome_setLecdLight = function (block) {
        let arg0 = block.getFieldValue('LECDPIN') || '14';

        arg0 = parseInt(arg0, 10);
        let arg1 =
          Blockly.Arduino.valueToCode(
              block,
              'LIGHT',
              Blockly.Arduino.ORDER_UNARY_POSTFIX
          ) || 50;
        arg1 = parseInt(arg1, 10);
        const code = `strip_${arg0}.init(${arg1});\n`;
        return code;
    };
    Blockly.Arduino.arduino_smarthome_setLecdLine = function (block) {
        const hexToRgb = hex => {
            // 去除可能的开头的#
            hex = hex.replace('#', '');

            // 将十六进制转换为RGB
            const bigint = parseInt(hex, 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;

            // 返回RGB格式的字符串
            return `${r}, ${g}, ${b}`;
        };
        let arg0 = block.getFieldValue('LED') || 1;
        arg0 = parseInt(arg0, 10);
        let arg1 = Blockly.Arduino.valueToCode(
            block,
            'COLOR',
            Blockly.Arduino.ORDER_UNARY_POSTFIX
        );
        arg1 = hexToRgb(arg1);
        let arg2 = block.getFieldValue('LECDPIN') || '14';
        arg2 = parseInt(arg2, 10);
        const code = `strip_${arg2}.setSingle(${arg0}, ${arg1});\n`;
        return code;
    };
    Blockly.Arduino.arduino_smarthome_setLecdAll = function (block) {
        const hexToRgb = hex => {
            // 去除可能的开头的#
            hex = hex.replace('#', '');

            // 将十六进制转换为RGB
            const bigint = parseInt(hex, 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;

            // 返回RGB格式的字符串
            return `${r}, ${g}, ${b}`;
        };
        let arg0 = block.getFieldValue('START') || 1;
        arg0 = parseInt(arg0, 10);

        let arg1 = block.getFieldValue('END') || 10;
        arg1 = parseInt(arg1, 10);

        let length = 0;
        if (parseInt(arg1, 10) - parseInt(arg0, 10) >= 0) {
            length = parseInt(arg1, 10) - parseInt(arg0, 10) + 1;
        }
        let arg2 = Blockly.Arduino.valueToCode(
            block,
            'COLOR',
            Blockly.Arduino.ORDER_UNARY_POSTFIX
        );
        arg2 = hexToRgb(arg2);
        let arg3 = block.getFieldValue('LECDPIN') || '14';
        arg3 = parseInt(arg3, 10);
        const code = `strip_${arg3}.setFill(${arg0}, ${length}, ${arg2});\n`;
        return code;
    };
    return Blockly;
}

exports = addGenerator;
