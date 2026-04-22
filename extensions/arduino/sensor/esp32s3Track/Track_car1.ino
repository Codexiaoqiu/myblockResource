#include <Arduino.h>
#include "EMotionPI.h"
#include "BLEControlStick.h"
#include "enMotor.h"
#include "SerialCmd.h"
#include "Tracking.h"
// 手柄初始化
BLEControlStick _joy;
EMotionPI emo;
EMO_DCMotor *enMotor1 = emo.getMotor(M1);
EMO_DCMotor *enMotor2 = emo.getMotor(M2);
EMO_DCMotor *enMotor3 = emo.getMotor(M3);
EMO_DCMotor *enMotor4 = emo.getMotor(M4);
/**4个舵机*/
EMO_Servo *servo1 = emo.getServo(S1);
EMO_Servo *servo2 = emo.getServo(S2);
EMO_Servo *servo3 = emo.getServo(S3);
EMO_Servo *servo4 = emo.getServo(S4);

int TrackSensorLeftValue1 = 0;
int TrackSensorLeftValue2 = 0;
int TrackSensorRightValue1 = 0;
int TrackSensorRightValue2 = 0;

uint8_t modestate = TRACKING;
bool taskStart = 0;
float cur_speed = 70;           // 手柄遥控速度 0-100
unsigned long last_pstime = 0;  // 手柄最后遥控时间
// bool mode = 0;                  // 巡线与遥控模式--0是巡线---1是遥控


void setup() {
  SerialCmd_Init();
  Track_init();
  delay(1000);
  Serial2.println("READY");


  // 初始化蓝牙手柄
  _joy.begin(); // 填写参数true是绑定手柄，不填写默认广播搜索连接
  delay(100);

  servo1->write(90);
  // servo2->write(90);
  // servo3->write(90);
  // servo4->write(90);
  Serial.println("启动完毕");
}


void control() {
  _joy.update();

  if (_joy.Button(BTN_START))  // 刹车急停
  {
    stopMotors();
    mode=0;
    return;
  }
  //舵机1
  if (_joy.Button(BTN_DPAD_UP)) {
    if (servo1->read() < 90) {
      servo1->write(servo1->read() + 1);
    }


  } else if (_joy.Button(BTN_DPAD_DOWN)) {
    if (servo1->read() > 0)
      servo1->write(servo1->read() - 1);
  }


  if (_joy.Button(BTN_R2) || _joy.Button(BTN_L2))  // 刹车急停
  {
    stopMotors(100);
    return;
  }
  int speed = 0;
  //左侧摇杆控制车子前进后退 + 左右横移
  if (_joy.Analog(BPSS_LY) < 125) {
    speed = map(_joy.Analog(BPSS_LY), 125, 0, 30, cur_speed);
    moveForward(speed);
  } else if (_joy.Analog(BPSS_LY) > 130) {
    speed = map(_joy.Analog(BPSS_LY), 130, 255, 30, cur_speed);
    moveBackward(speed);
  }

  if (_joy.Analog(BPSS_LX) < 125) {
    speed = map(_joy.Analog(BPSS_LX), 125, 0, 30, cur_speed);
    moveLeft(speed);
  } else if (_joy.Analog(BPSS_LX) > 130) {
    speed = map(_joy.Analog(BPSS_LX), 130, 255, 30, cur_speed);
    moveRight(speed);
  }

  //右侧摇杆控制车子前进后退 + 左右旋转
  if (_joy.Analog(BPSS_RY) < 125) {
    speed = map(_joy.Analog(BPSS_RY), 125, 0, 30, cur_speed);
    moveForward(speed);
    // Serial.printf("up:%d,%d\n", _joy.Analog(BPSS_RY), speed);
  } else if (_joy.Analog(BPSS_RY) > 130) {
    speed = map(_joy.Analog(BPSS_RY), 130, 255, 30, cur_speed);
    moveBackward(speed);
    // Serial.printf("down:%d,%d\n", _joy.Analog(BPSS_RY), speed);
  }

  if (_joy.Analog(BPSS_RX) < 125) {
    speed = map(_joy.Analog(BPSS_RX), 125, 0, 30, cur_speed);
    turnLeft(speed);
    // Serial.printf("left:%d,%d\n", _joy.Analog(BPSS_RX),speed);
  } else if (_joy.Analog(BPSS_RX) > 130) {
    speed = -map(_joy.Analog(BPSS_RX), 130, 255, 30, cur_speed);
    turnRight(speed);
    // Serial.printf("right:%d,%d\n", _joy.Analog(BPSS_RX),speed);
  }

  // 控制小车前方夹子的打开与关闭
  if (speed > 0) {
    last_pstime = millis();
    // Serial.println(speed);
  }


  if (millis() - last_pstime > 100) {  //当一定时间内没有收到任何操作信号，则停车
    stopMotors(100);
  }
}


void linefollowing() {
  SerialCmd_Parse();
  Track_Receive();
  Task_Dispatcher();
}

void loop() {

   if(mode){
     control();
   }
   else{
     linefollowing();
   }
}
