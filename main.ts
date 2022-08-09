input.onButtonPressed(Button.A, function () {
    basic.showNumber(QOE)
})
let mAh = 0
let I = 0
let U = 0
let Temp = 0
let Analog = 0
let QOE = 0
serial.redirectToUSB()
let BUTTERY = 3000
let W = 0.15
basic.forever(function () {
    Analog = pins.analogReadPin(AnalogPin.P0)
    Temp = Analog / 1024
    U = Temp * 3.3
    I = W / U
    mAh = I * 6000
    QOE = BUTTERY / mAh
})
