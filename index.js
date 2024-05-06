function scuberGreetingForFeet(number){
  let result
  if( number < 400 ) {
    result = 'This one is on me!';
  } else if (number > 400 && number < 2000 ) {
    result = 'That will be twenty bucks.';
  } else if (number >= 2001 && number < 2500 ) {
    result = 'I will gladly take your thirty bucks.';
  } else if (number > 2500) {
    result = 'No can do.';
  }
  return result;
}

function ternaryCheckCity(city){
 const message = city === 'NYC' ? "Ok, sounds good." : "No go.";
 return message;
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default: 
      return 'Bye.'
  }
}