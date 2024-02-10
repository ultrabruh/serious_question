// Define placeholder values
var texts = [
    "Are you sure?", 
    "Really sure?", 
    "Are you positive?",
    "Pookie please",
    "Just think about it",
    "If you say no, I'll be very sad",
    "I'll be very very sad",
    "I'll be very very very sad",
    "I'll be very very very very sad",
    "Ok fine, I'll stop asking...",
    "Just kidding, PLEASE SAY YES",
    "I'll be very very very very very sad",
    "You're breaking my heart ;(",
    "No"
];
var currentIndex = 0; // Initialize index counter

document.getElementById("button2").addEventListener("click", function() {
  // CHANGE BUTTON 2 TEXT
  // Get the button 2 element
  var button2 = document.getElementById("button2");

  // Change text of button 2
  button2.textContent = texts[currentIndex];

  // Increment index counter
  currentIndex++;

  // If index exceeds the length of the array, reset it to 0
  if (currentIndex >= texts.length) {
    currentIndex = 0;
  }

  // INCREASE BUTTON 1 SIZE
  // Get the button 1 element
  var button1 = document.getElementById("button1");
  
  // Increase the font size of button 1 gradually
  var currentSize = parseFloat(window.getComputedStyle(button1, null).getPropertyValue('font-size'));
  var newSize = currentSize + 30; 
  button1.style.fontSize = newSize + "px";

});

document.getElementById("button1").addEventListener("click", function() {
    // Redirect to the "yay.html" page
    window.location.href = "yay.html";
});  
