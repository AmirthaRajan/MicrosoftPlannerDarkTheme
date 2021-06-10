var x = true;

disableBrowserAction();

function disableBrowserAction()
{
    chrome.tabs.executeScript({file:"toggle.js"});
}

function enableBrowserAction()
{
    chrome.tabs.executeScript({file: "theme_css.js"});
}

function updateState()
{
    if(x==false)
    {
        x=true;
        enableBrowserAction();
    }
    else
    {
        x=false;
        disableBrowserAction();
    }
}

chrome.browserAction.onClicked.addListener(updateState);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
        if (request.loadTheme == "true")
        {
            chrome.tabs.executeScript({file: "theme_css.js"});
            x=true;
            sendResponse({message: "loaded"});
        }
    }
  );