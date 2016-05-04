var Chatty = (function(json) {

  var messagesJSON;

  var myRequest = new XMLHttpRequest();
  // parses the json via the function
  myRequest.addEventListener("load", function() {
    messagesJSON = JSON.parse(this.responseText);
  });
  myRequest.open("GET", "messages.json");
  myRequest.send();

  json.getMessagesArray = function() {
    var messages = messagesJSON.messages;
    return messages;
  }

  return json;

}(Chatty || {}));