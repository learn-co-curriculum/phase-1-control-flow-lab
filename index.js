function scuberGreetingForFeet(feet){
  if (feet <=400) {return "This one is on me!"}
  else if (400<= feet && feet <= 2000){return "That will be twenty bucks.";
}
  else if (2000<= feet && feet <=2500){return "I will gladly take your thirty bucks.";
}
  else{return "No can do."};
  // Write your code here!
}

function ternaryCheckCity(city){
return city === "NYC"?"Ok, sounds good.":"No go."
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case tip = "generous":
    return "Thank you so much."
    break;
    case tip= "not as generous":
      return "Thank you."
      break;
      default:
        return "Bye.";
    
  }
  // Write your code here!
}