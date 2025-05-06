function scuberGreetingForFeet(someNumber) {
  if (someNumber <= 400) return "This one is on me!";
  else if (someNumber <= 2000) return "That will be twenty bucks.";
  else if (someNumber <= 2500) return "I will gladly take your thirty bucks.";
  else return "No can do.";
}

function ternaryCheckCity(someCity) {
  return someCity === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(someTip) {
  switch (someTip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
