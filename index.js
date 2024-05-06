function scuberGreetingForFeet(rideDistance){
  let scuberGreeting
  if(rideDistance <= 400){
    scuberGreeting = 'This one is on me!'
  }else if(rideDistance > 400 && rideDistance < 2000){
    scuberGreeting ='That will be twenty bucks.'
  }else if(rideDistance < 2500 && rideDistance > 2000){
    scuberGreeting = 'I will gladly take your thirty bucks.'
  }else if (rideDistance > 2500){
    scuberGreeting = 'No can do.'
  }
  return scuberGreeting
}

function ternaryCheckCity(city){
  let cityGreeting = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return cityGreeting
}

function switchOnCharmFromTip(tip){
  let tipGreeting;
  switch(tip){
    case 'generous' : 
    tipGreeting = 'Thank you so much.'
    break;
    case 'not as generous' : 
    tipGreeting = 'Thank you.'
    break;
    default: 
    tipGreeting = 'Bye.'
  }
  return tipGreeting
}
