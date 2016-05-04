'use strict';

(function() {
  var userInput = document.getElementById("user-input");

  userInput.addEventListener("keypress", function(event){
    if (event.which === 13) {
      Chatty.addMessage("message-box", userInput.value);
      userInput.value = "";
    }
  });

  var clearButton = document.getElementById("clear-button");
  clearButton.addEventListener("click", function(){
    console.log("clearButton" );
  });

  var darkTheme = document.getElementById("dark-theme");
  darkTheme.addEventListener("change", function(){
    console.log("darkTheme" );
  });

  var largeText = document.getElementById("large-text");
  largeText.addEventListener("change", function(){

  });
})();
