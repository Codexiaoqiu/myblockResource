/******************************************************************
 * BLE游戏手柄控制库
 * 
 * 此库用于ESP32通过蓝牙连接游戏手柄，读取按钮和摇杆数据
 * 支持设备绑定和自动重连功能
 * 
 ******************************************************************/

 #ifndef BLE_CONTROL_STICK_H
 #define BLE_CONTROL_STICK_H
 
 #include <Arduino.h>
 #include <NimBLEDevice.h>
 #include <Preferences.h>
 
 #define LOG(...) printf(__VA_ARGS__) // 日志输出宏，用于调试
 
 // 按钮定义，使用位移操作创建掩码
 #define BTN_A _BV(BLEControlStick::nBTN_A)          // A按钮
 #define BTN_B _BV(BLEControlStick::nBTN_B)          // B按钮
 #define BTN_MENU _BV(BLEControlStick::nBTN_MENU)    // 菜单按钮
 #define BTN_X _BV(BLEControlStick::nBTN_X)          // X按钮
 #define BTN_Y _BV(BLEControlStick::nBTN_Y)          // Y按钮
 #define BTN_RSV1 _BV(BLEControlStick::nBTN_RSV1)    // 预留按钮1
 #define BTN_L1 _BV(BLEControlStick::nBTN_L1)        // 左肩按钮L1
 #define BTN_R1 _BV(BLEControlStick::nBTN_R1)        // 右肩按钮R1
 
 #define BTN_L2 _BV(BLEControlStick::nBTN_L2)        // 左扳机L2
 #define BTN_R2 _BV(BLEControlStick::nBTN_R2)        // 右扳机R2
 #define BTN_SEL _BV(BLEControlStick::nBTN_SEL)      // 选择按钮
 #define BTN_START _BV(BLEControlStick::nBTN_START)  // 开始按钮
 #define BTN_POWER _BV(BLEControlStick::nBTN_POWER)  // 电源按钮
 #define BTN_LTHUMB _BV(BLEControlStick::nBTN_LTHUMB) // 左摇杆按下
 #define BTN_RTHUMB _BV(BLEControlStick::nBTN_RTHUMB) // 右摇杆按下
 #define BTN_RSV3 _BV(BLEControlStick::nBTN_RSV3)    // 预留按钮3
 
 // 方向键定义
 #define BTN_DPAD_UP _BV(BLEControlStick::nBTN_DPAD_UP)       // 方向键上
 #define BTN_DPAD_RIGHT _BV(BLEControlStick::nBTN_DPAD_RIGHT) // 方向键右
 #define BTN_DPAD_DOWN _BV(BLEControlStick::nBTN_DPAD_DOWN)   // 方向键下
 #define BTN_DPAD_LEFT _BV(BLEControlStick::nBTN_DPAD_LEFT)   // 方向键左
 
 // 功能键定义(别名)
 #define BTN_SHIFT_L _BV(BLEControlStick::nBTN_L2)  // 左功能键(L2)
 #define BTN_SHIFT_R _BV(BLEControlStick::nBTN_R2)  // 右功能键(R2)
 
 // 摇杆数据索引
 #define BPSS_LX 0  // 左摇杆X轴
 #define BPSS_LY 1  // 左摇杆Y轴
 #define BPSS_RX 2  // 右摇杆X轴
 #define BPSS_RY 3  // 右摇杆Y轴
 
 /**
  * @brief 按钮事件类
  * 
  * 封装了按钮状态和摇杆数据，方便传递给回调函数
  */
 class ButtonEvent
 {
 public:
     /**
      * @brief 构造一个按钮事件对象
      * 
      * @param buttonState 按钮状态位图
      * @param axisLX 左摇杆X轴值(0-255)
      * @param axisLY 左摇杆Y轴值(0-255)
      * @param axisRX 右摇杆X轴值(0-255)
      * @param axisRY 右摇杆Y轴值(0-255)
      */
     ButtonEvent(uint32_t buttonState, int axisLX, int axisLY, int axisRX, int axisRY) : _buttonState(buttonState),
                                                     _axisLX(axisLX), _axisLY(axisLY), _axisRX(axisRX), _axisRY(axisRY) {}
 
     /**
      * @brief 判断指定按钮状态中的按钮是否按下
      * 
      * @param buttonState 按钮状态位图
      * @param buttonMask 要检查的按钮掩码
      * @return true 按钮被按下
      * @return false 按钮未按下
      */
     static bool button(uint32_t buttonState, uint32_t buttonMask)
     {
         return (buttonState & buttonMask) != 0;
     }
 
     /**
      * @brief 检查当前事件中特定按钮是否按下
      * 
      * @param buttonMask 要检查的按钮掩码
      * @return true 按钮被按下
      * @return false 按钮未按下
      */
     bool button(uint32_t buttonMask) const
     {
         return button(_buttonState, buttonMask);
     }
 
     /**
      * @brief 获取原始按钮状态位图
      * 
      * @return uint32_t 按钮状态位图
      */
     uint32_t getButtonState() const
     {
         return _buttonState;
     }
 
     /**
      * @brief 检查是否有任何按钮被按下
      * 
      * @return true 有按钮被按下
      * @return false 没有按钮被按下
      */
     bool hasAnyButton() const
     {
         return _buttonState != 0;
     }
 
     /**
      * @brief 按位与操作符重载，方便检查按钮状态
      * 
      * @param buttonMask 要检查的按钮掩码
      * @return true 按钮被按下
      * @return false 按钮未按下
      */
     bool operator&(uint32_t buttonMask) const
     {
         return button(buttonMask);
     }
 
     /**
      * @brief 获取左摇杆X轴值
      * @return uint8_t 轴值(0-255)，中间值为128
      */
     uint8_t getAxisLX() const { return _axisLX; }
     
     /**
      * @brief 获取左摇杆Y轴值
      * @return uint8_t 轴值(0-255)，中间值为128
      */
     uint8_t getAxisLY() const { return _axisLY; }
     
     /**
      * @brief 获取右摇杆X轴值
      * @return uint8_t 轴值(0-255)，中间值为128
      */
     uint8_t getAxisRX() const { return _axisRX; }
     
     /**
      * @brief 获取右摇杆Y轴值
      * @return uint8_t 轴值(0-255)，中间值为128
      */
     uint8_t getAxisRY() const { return _axisRY; }
 
 private:
     uint32_t _buttonState; // 按钮状态
 
     // 模拟量数据
     uint8_t _axisLX; // 左摇杆X轴
     uint8_t _axisLY; // 左摇杆Y轴
     uint8_t _axisRX; // 右摇杆X轴
     uint8_t _axisRY; // 右摇杆Y轴
 };
 
 /**
  * @brief 摇杆回调接口类
  * 
  * 定义了处理摇杆事件的回调方法
  */
 class StickCallback
 {
 public:
     StickCallback() {}
     
     /**
      * @brief 连接成功回调
      * 当蓝牙成功连接到手柄时触发
      */
     virtual void onConnect() {}
     
     /**
      * @brief 断开连接回调
      * 当蓝牙与手柄断开连接时触发
      */
     virtual void onDisconnect() {}
     
     /**
      * @brief 按钮状态回调
      * 当任何按钮被按下时触发，并且持续输出按钮状态
      * @param event 按钮事件对象
      */
     virtual void onButton(const ButtonEvent &event) {}
     
     /**
      * @brief 按钮状态改变回调
      * 当任何按钮状态发生变化时触发(按下或释放都会触发)
      * @param event 按钮事件对象
      */
     virtual void onButtonChanged(const ButtonEvent &event) {}
     
     /**
      * @brief 按钮按下回调
      * 当按钮从未按下状态变为按下状态时触发(按下按钮)
      * @param event 包含新按下按钮的事件对象
      */
     virtual void onButtonPressed(const ButtonEvent &event) {}
     
     /**
      * @brief 按钮释放回调
      * 当按钮从按下状态变为未按下状态时触发（松开按钮）
      * @param event 包含已释放按钮的事件对象
      */
     virtual void onButtonReleased(const ButtonEvent &event) {}
     
     /**
      * @brief 摇杆状态改变回调
      * 当摇杆位置或按钮状态发生改变时触发（遥控器任意状态改变都会触发）
      
      * @param event 包含摇杆数据的事件对象
      */
     virtual void onStickChanged(const ButtonEvent& event) {}
 };
 
 /**
  * @brief BLE游戏手柄控制类
  * 
  * 用于连接和控制BLE游戏手柄，读取按钮和摇杆数据
  */
 class BLEControlStick
 {
 public:
     /**
      * @brief 构造一个BLE手柄控制对象
      */
     BLEControlStick();
     
     /**
      * @brief 析构函数，释放资源
      */
     ~BLEControlStick();
     
     /**
      * @brief 按钮编号枚举
      * 定义了游戏手柄上各个按钮的编号
      */
     enum
     {
         nBTN_A = 0,       // A按钮
         nBTN_B,           // B按钮
         nBTN_MENU,        // 菜单按钮
         nBTN_X,           // X按钮
         nBTN_Y,           // Y按钮
         nBTN_RSV1,        // 预留按钮1
         nBTN_L1,          // 左肩按钮L1
         nBTN_R1,          // 右肩按钮R1
 
         nBTN_L2 = 8,      // 左扳机L2
         nBTN_R2,          // 右扳机R2
         nBTN_SEL,         // 选择按钮
         nBTN_START,       // 开始按钮
         nBTN_POWER,       // 电源按钮
         nBTN_LTHUMB,      // 左摇杆按下
         nBTN_RTHUMB,      // 右摇杆按下
         nBTN_RSV3,        // 预留按钮3
 
         nBTN_DPAD_UP = 16,    // 方向键上
         nBTN_DPAD_RIGHT,      // 方向键右
         nBTN_DPAD_DOWN,       // 方向键下
         nBTN_DPAD_LEFT        // 方向键左
     } BTN_T;
 
     /**
      * @brief 初始化BLE控制器
      * 
      * @param bindMode 是否进入配对绑定模式，默认为false
      */
     void begin(bool bindMode = false);
     
     /**
      * @brief 更新状态
      * 在主循环中调用以保持连接并处理事件
      * @return true 更新成功
      * @return false 更新失败
      */
     bool update();
     
     /**
      * @brief 检查是否正在连接中
      * @return true 正在连接
      * @return false 未连接或连接已建立
      */
     bool isConnecting() { return _isConnecting; }
     
     /**
      * @brief 检查是否已连接
      * @return true 已连接
      * @return false 未连接
      */
     bool isConnected() { return _isConnected; }
     
     /**
      * @brief 解除与设备的绑定
      * 清除保存的绑定信息，下次将扫描新设备
      */
     void unboundDevices();
     
     /**
      * @brief 设置摇杆回调对象
      * @param callback 回调对象指针
      */
     void setStickCallback(StickCallback *callback) { _pStickCallback = callback; }
 
     /**
      * @brief 检查指定按钮在特定状态下是否被按下
      * 
      * @param shift SHIFT状态
      * @param state 当前状态
      * @param checkBtn 要检查的按钮
      * @return true 按钮被按下
      * @return false 按钮未按下
      */
     bool isSet(int shift, int state, int checkBtn);
     
     /**
      * @brief 检查是否有新的按钮状态
      * @return true 有新的按钮状态
      * @return false 没有新的按钮状态
      */
     boolean NewButtonState();
     
     /**
      * @brief 检查特定按钮是否有新状态
      * 
      * @param button 要检查的按钮
      * @return true 按钮有新状态
      * @return false 按钮状态未变
      */
     boolean NewButtonState(uint32_t button);
     
     /**
      * @brief 检查按钮是否刚被按下
      * 
      * @param button 要检查的按钮
      * @return true 按钮刚被按下
      * @return false 按钮未被按下或已经按下一段时间
      */
     boolean ButtonPressed(uint32_t button);
     
     /**
      * @brief 检查按钮是否刚被释放
      * 
      * @param button 要检查的按钮
      * @return true 按钮刚被释放
      * @return false 按钮未被释放或已释放一段时间
      */
     boolean ButtonReleased(uint32_t button);
     
     /**
      * @brief 检查按钮当前是否处于按下状态
      * 
      * @param button 要检查的按钮
      * @return true 按钮当前被按下
      * @return false 按钮当前未被按下
      */
     boolean Button(uint32_t button);
     
     /**
      * @brief 获取按钮状态字节
      * @return uint32_t 当前按钮状态位图
      */
     uint32_t ButtonDataByte();
     
     /**
      * @brief 获取模拟量值
      * 
      * @param button 模拟量索引(BPSS_LX, BPSS_LY等)
      * @return byte 模拟量值(0-255)
      */
     byte Analog(byte button);
 
 protected:
     /**
      * @brief 连接状态标志
      */
     bool _isConnecting; // 是否正在连接中
     bool _isConnected;  // 是否已连接
     
     /**
      * @brief 蓝牙扫描超时时间(毫秒)
      * 0表示永久扫描
      */
     uint32_t scanTimeMs = 5000; 
     
     /**
      * @brief 重新扫描设备
      */
     void rescan();
     
     /**
      * @brief 已连接设备地址
      */
     BLEAddress *_pServerAddress;
     
     /**
      * @brief 回调对象指针
      */
     StickCallback *_pStickCallback;
     
     /**
      * @brief 处理蓝牙通知回调
      * 
      * @param pChr 特征值对象
      * @param pData 数据指针
      * @param length 数据长度
      * @param isNotify 是否为通知
      */
     void notifyCallback(NimBLERemoteCharacteristic *pChr, uint8_t *pData, size_t length, bool isNotify);
 
 private:
     NimBLEClient *pClient;
     Preferences preferences;
     bool bindMode;
     String boundAddress;
 
     void startScan();
     bool connectToDevice();
 
     void loadBoundDevice();
     void boundDevices(const char *addr);
 
     // 回调类
     class ClientCallbacks : public NimBLEClientCallbacks
     {
     public:
         ClientCallbacks(BLEControlStick *parent) : parent(parent) {}
         void onConnect(NimBLEClient *pClient) override;
         void onDisconnect(NimBLEClient *pClient, int reason) override;
         void onPassKeyEntry(NimBLEConnInfo &connInfo) override;
         void onConfirmPasskey(NimBLEConnInfo &connInfo, uint32_t pass_key) override;
         void onAuthenticationComplete(NimBLEConnInfo &connInfo) override;
 
     private:
         BLEControlStick *parent;
     };
 
     class ScanCallbacks : public NimBLEScanCallbacks
     {
     public:
         ScanCallbacks(BLEControlStick *parent) : parent(parent) {}
         void onResult(const NimBLEAdvertisedDevice *advertisedDevice) override;
         void onScanEnd(const NimBLEScanResults &results, int reason) override;
 
     private:
         BLEControlStick *parent;
     };
 
     ClientCallbacks *clientCallbacks;
     ScanCallbacks *scanCallbacks;
 
     unsigned char AXISData[4] = {128, 128, 128, 128};
     uint32_t last_buttons;
     uint32_t buttons;
 
     const uint8_t _kTblDpadMap[9] = {
         0x00,
         0x01, // up
         0x03,
         0x02, // right
         0x06,
         0x04, // down
         0x0c,
         0x08, // left
         0x09};
 };
 
 #endif