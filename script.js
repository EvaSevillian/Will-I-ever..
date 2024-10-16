let userName = 'Eva';
const userQuestion = 'Will I ever learn to code?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// If the user enters a name assign to userName, else, say hello.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Log to the console the question the suer asked
console.log(`${userName} asked: ${userQuestion}`);

// Create each conditional statement to be assigned to eightBall depending on the number generated from random Number

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
  default:
    console.log(`There appears to be a problem ${userName}! Please contact nine bal services.`);
}

// Print the eightBalls answer to the console
console.log(`Magic Eightball: ${eightBall}`);