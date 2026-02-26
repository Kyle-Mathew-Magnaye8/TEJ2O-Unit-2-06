/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Feb 2026
 * This program turn the LED on and off using A and B buttons.
*/

// setup
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

// turn on LED
input.onButtonPressed(Button.A, function () {
  basic.showIcon(IconNames.Yes)
  pins.digitalWritePin(DigitalPin.P16, 1)
})

// turn off LED
input.onButtonPressed(Button.B, function () {
  basic.showIcon(IconNames.No)
  pins.digitalWritePin(DigitalPin.P16, 0)
})
