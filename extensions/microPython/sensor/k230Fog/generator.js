/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Python['microbit_k230Peripheral_k230initfog'] = function (block) {
        var arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0)
        var code = `fog${arg0} = Pin(${arg0},Pin.OUT)\n`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230runfog'] = function (block) {
        var arg0 = block.getFieldValue('fog') || '1';
        arg0 = parseInt(arg0)
        var arg1 = block.getFieldValue('PINS') || '2';
        arg1 = parseInt(arg1)
        var code = `fog${arg1}.value(${arg0})\n`
        return code;
    };

    return Blockly;
}

exports = addGenerator;
