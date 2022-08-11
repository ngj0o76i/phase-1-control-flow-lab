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



const ternaryCheckCity = (cityName) => cityName === "NYC" ? 'Ok, sounds good.' : 'No go.';



const switchOnCharmFromTip = (tipAmount) => {
  if (tipAmount === 'generous') {
    return 'Thank you so much.';
  } else if (tipAmount === 'not as generous') {
    return 'Thank you.';
  } else {
    return 'Bye.';
  }
}


