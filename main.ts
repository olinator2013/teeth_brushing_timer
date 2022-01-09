let max_counter = 0
let counter = 0
input.onButtonPressed(Button.A, function () {
    max_counter = 10
    counter = 0
    while (counter < max_counter) {
        basic.pause(1000)
        counter += 1
        basic.showNumber(counter)
    }
    basic.showIcon(IconNames.Happy)
})
