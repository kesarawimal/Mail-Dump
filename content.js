
    var email = document.body.innerText;
    var mails = email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    var list;
    if (mails) {
        var unique_array = [];
        for(var i = 0;i < mails.length; i++){
            if(unique_array.indexOf(mails[i]) === -1){
                unique_array.push(mails[i])
            }
        }
        chrome.storage.sync.get(['mails'], function(result) {
            list = result.mails;
            chrome.storage.sync.set({'mails': list+", "+unique_array}, function() {
                console.log('Value is set to Unique' + unique_array.length);
            });
        });
    }

    console.log('Value currently is list');
    // chrome.runtime.sendMessage({"message": "open_new_tab", "url": mails});
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
            if (request.greeting == "hello") {
                sendResponse({farewell: unique_array});
            } else if (request.greeting == "hi") {
                sendResponse({farewell: list});
            }
        });

var length = mails.length;
chrome.tabs.getSelected(null,function(tab) {
    var tab = tab.url;
    chrome.storage.sync.set({'tab': length.toString()}, function() {
        console.log('Valu ' + tab);
        console.log('Valq23 ' + mails.length);
    });
});

chrome.storage.sync.get(['count'], function(result) {
    console.log('Value' + result.count);
});

chrome.runtime.sendMessage({"message": "open_new_tab", "url": mails});
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"message": "open_new_tab", "url": mails}, function(response) {
            alert(response.farewell);
        });
    });