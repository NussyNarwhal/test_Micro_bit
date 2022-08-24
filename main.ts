input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    count = 0
})
input.onGesture(Gesture.Shake, function () {
    count += 1
    basic.showNumber(count)
})
let count = 0
basic.showIcon(IconNames.Yes)
basic.pause(100)
basic.clearScreen()
count = 0
basic.showNumber(count)
