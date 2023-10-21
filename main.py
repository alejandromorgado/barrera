def on_forever():
    Kitronik_Move_Motor.set_ultrasonic_units(Kitronik_Move_Motor.Units.CENTIMETERS)
    if 0 > 0 and 0 < 0:
        servos.P0.set_angle(0)
        basic.pause(3000)
        servos.P0.set_angle(90)
        basic.pause(200)
basic.forever(on_forever)
