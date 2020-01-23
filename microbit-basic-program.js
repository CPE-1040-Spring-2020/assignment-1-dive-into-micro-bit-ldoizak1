let iconHeart: boolean = true
input.onButtonPressed(Button.A, function () {
    iconHeart = !iconHeart
})
basic.forever(function () {
    if (iconHeart) {
        basic.showIcon(IconNames.Heart)
    }
    else
        basic.showIcon(IconNames.Skull)

    basic.pause(100)
    basic.clearScreen()
})
