(function () {
  var receiveRequest = function (message, sender, response) {
    chrome.tabs.create({ url: message.url, active: false });
  };

  // Listen for requests
  chrome.runtime.onMessage.addListener(receiveRequest);
})();