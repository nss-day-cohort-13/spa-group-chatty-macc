/* jshint devel:true */
/* globals Chatty */
'use strict';

(function() {
  var userInput = document.getElementById("user-input");
  userInput.addEventListener("keypress", function(event){
    if (event.which === 13) {
      var user = document.querySelector("input[name='user']:checked").value;

      var message = {
        message: userInput.value,
        user: user,
        timestamp: Date.now()
      };
      Chatty.addMessage("message-box", message);
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

  var bodyElement = document.querySelector("body");
  var darkTheme = document.getElementById("dark-theme");
  darkTheme.addEventListener("change", function(){
    bodyElement.classList.toggle("dark-theme", event.target.checked);
  });

  var largeText = document.getElementById("large-text");
  largeText.addEventListener("change", function(){
    bodyElement.classList.toggle("large-text", event.target.checked);
  });


  function insertMessagesArray(messagesArray) {
    messagesArray.forEach(function(messageObj) {
      Chatty.addMessage("message-box", messageObj);
    });
  }

  Chatty.loadJSON(insertMessagesArray);
})();
