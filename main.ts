input.onButtonPressed(Button.A, function () {
    basic.showNumber(QOE)
})
let mAh = 0
let I = 0
let U = 0
let Analog = 0
let QOE = 0
serial.redirectToUSB()
let BUTTERY = 3000
let W = 2.5
basic.forever(function () {
    Analog = pins.analogReadPin(AnalogPin.P0)
    U = Analog / (1024 * 3.3)
    I = W / U
    mAh = I / 1000
    QOE = BUTTERY / mAh
})
