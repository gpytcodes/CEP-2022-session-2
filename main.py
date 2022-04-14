def on_button_pressed_a():
    led.plot(2, 2)
    for i in range(255):
        led.set_brightness(i)
        basic.pause(20)
        
    for i in range(255):
        led.set_brightness(255 - i)
        basic.pause(20)
    led.set_brightness(255)
    basic.show_string("Hello!")
input.on_button_pressed(Button.A, on_button_pressed_a)
