let pause2 = false
let max_counter = 0
let counter = 0
input.onButtonPressed(Button.A, function () {
    pause2 = false
    max_counter = 120
    counter = 0
    while (counter < max_counter) {
        if (pause2 == false) {
            basic.pause(1000)
            counter += 1
            basic.showNumber(counter)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    pause2 = !(pause2)
    music.playMelody("E F G A C5 C5 C5 C5 ", 120)
})
