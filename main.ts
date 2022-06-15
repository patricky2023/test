radio.onReceivedString(function (receivedString) {
    if (receivedString == "S") {
        Signal = 1
        handlebit.handle_shake(handlebit.ShakeState.ON)
    }
})
let Signal = 0
radio.setGroup(33)
handlebit.handlebitInit()
basic.showIcon(IconNames.Cow)
basic.forever(function () {
    if (Signal == 1) {
        if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1) < 700 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1) > 300 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1) > 800) {
            radio.sendString("forward")
            Signal = 0
        } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1) < 700 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1) > 300 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1) < 200) {
            radio.sendString("backward")
            Signal = 0
        } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1) < 700 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1) > 300 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1) > 800) {
            radio.sendString("left")
            Signal = 0
        } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1) < 700 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1) > 300 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1) > 800) {
            radio.sendString("right")
            Signal = 0
        } else if (input.buttonIsPressed(Button.A)) {
            radio.sendString("take off")
            Signal = 0
        } else if (input.buttonIsPressed(Button.B)) {
            radio.sendString("landing")
            Signal = 0
        } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y2) < 700 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y2) > 300 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y2) > 800) {
            radio.sendString("Turn left")
            Signal = 0
        } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1) < 700 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1) > 300 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1) < 200) {
            radio.sendString("down")
            Signal = 0
        } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1) < 700 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1) > 300 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1) > 800) {
            radio.sendString("up")
            Signal = 0
        } else if (handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1) < 700 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1) > 300 && handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1) > 800) {
            radio.sendString("Turn right")
            Signal = 0
        } else {
            radio.sendString("null")
            Signal = 0
        }
    }
})
