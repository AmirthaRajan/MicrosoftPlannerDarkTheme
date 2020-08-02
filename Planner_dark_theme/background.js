chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
    file: 'jquery.min.js'
         });
       chrome.tabs.executeScript({
          file: 'theme.js'
       });
    });