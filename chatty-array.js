'use strict';

var Chatty = (function(chat) {
  var newId = 0;
  var messages = [];

  function deleteMessageListener(event) {
    chat.removeElement(event.target.parentElement.id);
  }

  function formatTimestamp(ts) {
    var date = new Date(ts);
    var iso = date.toISOString();
    return iso.replace(/(.+)T(.+)\..+/, '$2 $1');
  }

  chat.addMessage = function(parentId, message) {
    message.id = "message" + newId++;
    messages.push(message);

    var messageElement = document.createElement("div");
    messageElement.id = message.id;
    messageElement.className = "message";
    messageElement.innerHTML = `
      <span class="message-user">${message.user}</span>
      <span class="message-text">${message.message}</span>
      <input type="button" class="delete-button" value="Delete">
      <span class="message-time">${formatTimestamp(message.timestamp)}</span>`;
    document.getElementById(parentId).appendChild(messageElement);

    var deleteButton = messageElement.getElementsByClassName("delete-button")[0];
    deleteButton.addEventListener("click", deleteMessageListener);
  };

  chat.deleteMessage = function(messageString) {
    var messageIndex = messages.findIndex(function(elem) {
      return elem.message === messageString;
    });
    messages.splice(messageIndex, 1);
  };

  return chat;
}(Chatty || {}));
