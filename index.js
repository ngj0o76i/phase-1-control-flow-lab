// function scuberGreetingForFeet(value){
//   // Write your code here!

// }

// function ternaryCheckCity() {
//   // Write your code here!
// }

// function switchOnCharmFromTip() {
//   // Write your code here!
// }

const scuberGreetingForFeet = (value) => {
  let greeting = value;
  switch (true) {
    case greeting <= 400:

      return 'This one is on me!';

    case greeting <= 2000:

      return 'That will be twenty bucks.';
    case greeting >= 2000 && greeting < 2500:

      return 'I will gladly take your thirty bucks.';
    case greeting > 2500:
      return 'No can do.';
  }
}

// console.log(scuberGreetingForFeet(2501));

const ternaryCheckCity = (cityName) => cityName === "NYC" ? 'Ok, sounds good.' : 'No go.';

//  console.log (ternaryCheckCity('NYC'));

const switchOnCharmFromTip = (tipAmount) => {
  if (tipAmount === 'generous') {
    return 'Thank you so much.';
  } else if (tipAmount === 'not as generous') {
    return 'Thank you.';
  } else {
    return 'Bye.';
  }
}
