"""
Created by: Kyle Matthew
Created on: Feb 2026
This module shows the LED on and off using A and B buttons.
"""

from microbit import *


display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        pin16.write_digital(1)
        display.show(Image.YES)
    if button_b.is_pressed():
        pin16.write_digital(0)
        display.show(Image.NO)
