var receiveRequest = function (message, sender, response) {
  chrome.tabs.create({ url: message.url, active: false });
};

var onInstall = function () {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.storage.sync.set({ hotkey: ';' }, function () {
      console.log("Set default hotkey to ;");
    });
  }
}


chrome.runtime.onInstalled.addListener(onInstall);
chrome.runtime.onMessage.addListener(receiveRequest);
