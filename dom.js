var userInput = document.getElementById("user-input");

document.getElementById("user-input").addEventListener("keypress", function(event){
  if (event.which === 13) {
    Chatty.addMessage("message-box", userInput.value);
    userInput.value = "";
  }
});
