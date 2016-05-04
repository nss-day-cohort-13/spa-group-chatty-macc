/* jshint devel:true */
/* globals Chatty */
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
    console.log("clearButton");
    Array.from(document.getElementsByClassName("message")).forEach(function(element) {
      Chatty.removeElement(element.id);
    });
  });

  var darkTheme = document.getElementById("dark-theme");
  darkTheme.addEventListener("change", function(){
    console.log("dark theme", event.target.checked);
  });

  var largeText = document.getElementById("large-text");
  largeText.addEventListener("change", function(){
    console.log("large text", event.target.checked);
  });


  function insertMessagesArray(messagesArray) {
    messagesArray.forEach(function(messageObj) {
      Chatty.addMessage("message-box", messageObj.message);
    });
  }

  Chatty.loadJson(insertMessagesArray);
})();
