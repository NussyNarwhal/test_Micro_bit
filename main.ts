input.onPinPressed(TouchPin.P0, function () {
    count += 1
    basic.showNumber(count)
})
let count = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
count = 0
basic.showNumber(count)
