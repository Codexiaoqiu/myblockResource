/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Python.microbit_k230Peripheral_k230InitSensor = function (block) {
        Blockly.Python.imports_.k230InitAmbientlight =
`
from libs.sensor_libs import imu
`;
        let arg0 = block.getFieldValue('I2C') || '1';
        arg0 = parseInt(arg0, 10);

        const code = `
i2c = I2C(${arg0})
sensor = imu.MPU6050(i2c)
`;
        return code;
    };

    Blockly.Python.microbit_k230Peripheral_k230ReadSensor = function (block) {
        let arg0 = block.getFieldValue('SENSOR') || '0';
        arg0 = parseInt(arg0, 10);

        let code;
        if (arg0 === 0) {
            code = `sensor.accel.x`;
        }
        if (arg0 === 1) {
            code = `sensor.accel.y`;
        }
        if (arg0 === 2) {
            code = `sensor.accel.z`;
        }
        if (arg0 === 3) {
            code = `sensor.gyro.x`;
        }
        if (arg0 === 4) {
            code = `sensor.gyro.y`;
        }
        if (arg0 === 5) {
            code = `sensor.gyro.z`;
        }
        if (arg0 === 6) {
            code = `sensor.temperature`;
        }
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
