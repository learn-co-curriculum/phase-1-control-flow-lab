function scuberGreetingForFeet(sample){
  // Write your code here!
  if (400 >= sample) {
  return "This one is on me!"
 } else if (sample > 2000 && sample < 2500) {
   return ("I will gladly take your thirty bucks.")
 } else return ("No can do.")
}
 
  function ternaryCheckCity(city){
    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  }
 

function switchOnCharmFromTip(tip){
  // Write your code here
    switch (tip) {
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
      default:
        return 'Bye.';
    }
  }