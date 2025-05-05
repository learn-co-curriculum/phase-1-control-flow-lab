function scuberGreetingForFeet(rideLength) {
  if (rideLength > 2500) {
    return 'No can do.';
  } else if (rideLength > 2000) {
    return 'I will gladly take your thirty bucks.'
  } else if (rideLength > 400) {
    return 'That will be twenty bucks.';
  } else {
    return 'This one is on me!';
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'
  }
}