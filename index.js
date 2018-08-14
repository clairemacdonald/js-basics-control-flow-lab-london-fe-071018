// Write your code in this file!

function scuberGreetingForFeet(distance) {



if (distance <= 400) {
  return 'This one is on me!';
  
} else if (distance > 2000 && distance < 2499) {
  return 'I will gladly take your thirty bucks.';
  
  
} else if (distance > 2500) {
  return 'No can do.';
}

}


function ternaryCheckCity(location) {
  
return (location ==='NYC' ? "Ok, sounds good." : "No go.");
  
  
}


function switchOnCharmFromTip(generosity) {
  
  

switch (generosity) {
  case 'generous':
    message = "Thank you so much.";
    break;
  case 'not as generous':
    message = "Thank you.";
    break;
default: 

}
}