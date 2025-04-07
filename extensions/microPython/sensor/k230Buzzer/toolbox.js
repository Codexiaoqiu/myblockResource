/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="蜂鸣器" id="microbit_k230Buzzer" colour="#5A5AAD" secondaryColour="#5A5AAD">
    <block type="microbit_k230Peripheral_k230InitBuzzer"><field name="PWM">0</field></block>
    <block type="microbit_k230Peripheral_k230SetBuzzer"><field name="Type">E4</field>
        <value name="duration">
            <shadow type="math_whole_number">
                <field name="NUM">2000</field>
            </shadow>
        </value>
    </block>
    <block type="microbit_k230Peripheral_k230EndBuzzer"><field name="PWM">0</field></block>

</category>`;
}

exports = addToolbox;
