/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Jan 2025
 * This program is the code for the electronic catapult
*/

const servoNumber1 = robotbit.Servos.S1
let neopixelStrip: neopixel.Strip = null
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Launches catapult
input.onButtonPressed(Button.A, function () {

    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    basic.pause(1000)
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    basic.pause(1000)
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    basic.pause(1000)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()

    robotbit.Servo(servoNumber1, 135)
    basic.clearScreen()
    basic.showString("Go!")
    basic.showIcon(IconNames.Happy)

    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
})

// Resets catapult
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 0)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
