/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Python['microbit_k230Peripheral_k230InitLaser'] = function (block) {
        var arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0)

        var code = `laserLed${arg0} = Pin(${arg0}, Pin.OUT)\n`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230SetLaser'] = function (block) {
        var arg0 = block.getFieldValue('Type') || '1';
        var arg1 = block.getFieldValue('PINS') || '2';


        arg0 = parseInt(arg0)
        arg1 = parseInt(arg1)

        var code = `laserLed${arg1}.value(${arg0})\n`
        return code
    };

    return Blockly;
}

exports = addGenerator;
