'use strict';

var Chatty = (function(chatty) {
  var messageBox = document.getElementById("message-box");

  chatty.removeElement = function(messageId) {
    var messageElement = document.getElementById(messageId);
    var elementByClass = messageElement.getElementsByClassName("message-text")[0];

    messageBox.removeChild(messageElement);
    chatty.deleteMessage(elementByClass.innerHTML);
  };

  return chatty;
}(Chatty || {}));
