input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let i: number;
    led.plot(2, 2)
    for (i = 0; i < 255; i++) {
        led.setBrightness(i)
        basic.pause(20)
    }
    for (i = 0; i < 255; i++) {
        led.setBrightness(255 - i)
        basic.pause(20)
    }
    led.setBrightness(255)
    basic.showString("Hello!")
})
