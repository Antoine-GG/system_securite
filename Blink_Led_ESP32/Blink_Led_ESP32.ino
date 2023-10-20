/*
 * This ESP32 code is created by esp32io.com
 *
 * This ESP32 code is released in the public domain
 *
 * For more detail (instruction and wiring diagram), visit https://esp32io.com/tutorials/esp32-led-blink
 */

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin D14 as an output for the light.
  pinMode(14, OUTPUT);
  // initialize digital pin D27 as an output for the door.
  pinMode(27, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(14, HIGH); // turn the LED on
  digitalWrite(27, HIGH); // open the door (assuming HIGH opens the door)
  delay(3000);             // wait for 500 milliseconds
  digitalWrite(14, LOW);  // turn the LED off
  digitalWrite(27, LOW);  // close the door (assuming LOW closes the door)
  delay(3000);             // wait for 500 milliseconds
}
