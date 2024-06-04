# IMY772-Workshop

The calculator application should be able to perform basic arithmetic functions (addition, subtraction, multiplication and division) on a set of hexadecimal numbers.

## Functional Requirements


- [x] Needs to start a server
- [x] Needs to be able to take input #1
  - [x] Needs to limit input #1 to being 3 characters long
  - [ ] Needs to limit the available characters for input #1 to [0-9, A-F]
- [x] Needs to be able to take input #2
  - [x] Needs to limit input #2 to being 3 characters long
  - [ ] Needs to limit the available characters for input #2 to [0-9, A-F]
- [x] Needs to be able to take an operation input
  - [x] Each operation [×+−÷] should be available as a radio button
  - [ ] Needs to reject the [−] input if the value of input #1 is smaller than the value of input #2
- [ ] Needs to be able to send the values from the inputs to a server
- [x] Needs to be able to convert the value from inputs #1 and #2 to a decimal number
- [x] Needs to be able to apply the arithmetic function given in input #3 to these decimal values
- [x] Needs to be able to round the answer from the arithmetic function to the nearest whole number
- [x] Needs to convert the rounded number to a hexadecimal value
- [x] Needs to check if the hexadecimal value is longer than 6 digits
  - [x] Needs to return some form of ERROR message if it is
- [ ] Needs to return a hexadecimal value of 6 digits or less to the client
- [ ] Needs to display the returned value on the client side
