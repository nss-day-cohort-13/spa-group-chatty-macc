/* jshint devel:true */
/* globals Chatty */
'use strict';

(function() {
  var userInput = document.getElementById("user-input");
  userInput.addEventListener("keypress", function(event){
    if (event.which === 13) {
      Chatty.addMessage("message-box", userInput.value);
      userInput.value = "";
      clearButton.disabled = false;
    }
  });

  var clearButton = document.getElementById("clear-button");
  clearButton.addEventListener("click", function(){
    console.log("clearButton");
    Array.from(document.getElementsByClassName("message")).forEach(function(element) {
      Chatty.removeElement(element.id);
    });
    clearButton.disabled = true;
  });

  var darkTheme = document.getElementById("dark-theme");
  darkTheme.addEventListener("change", function(){
    //TODO(adam): apply class for theme
    console.log("dark theme", event.target.checked);
  });

  var largeText = document.getElementById("large-text");
  largeText.addEventListener("change", function(){
    //TODO(adam): apply class for theme
    console.log("large text", event.target.checked);
  });


  function insertMessagesArray(messagesArray) {
    messagesArray.forEach(function(messageObj) {
      Chatty.addMessage("message-box", messageObj.message);
    });
  }

  Chatty.loadJSON(insertMessagesArray);
})();
