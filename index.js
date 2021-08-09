function scuberGreetingForFeet(result){
  if (result <= 400){
    return "This one is on me!";
  }  else if (result >= 2000 && result <2499) {
    return "I will gladly take your thirty bucks.";
  } else if (result >= 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  let thecity = city === 'NYC' ? 'Ok, sounds good.' : "No go.";
  return (thecity)
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case'generous':
     return "Thank you so much.";
     break;
    case'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye."
  }
}   