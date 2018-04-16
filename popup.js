document.addEventListener('DOMContentLoaded', function() {

    //     chrome.runtime.onMessage.addListener(
    //         function(request, sender, sendResponse) {
    //             if( request.message === "open_new_tab" ) {
    //                 chrome.storage.local.set({"mgs": request.url}, function() {
    //                 });
    //             }
    //         }
    //     );
    // chrome.storage.local.get(["mgs"], function(result) {
    //     var checkPageButton = document.getElementById('current');
    //     checkPageButton.innerHTML = result.mgs;
    // });
    //
    // chrome.tabs.onActivated.addListener(function() {
    //     chrome.storage.local.clear(function() {
    //     });
    // });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
            var mails = response.farewell.toString();
            var newList = mails.split(',').join('\n');
            var checkPageButton = document.getElementById('current');
            checkPageButton.innerHTML = newList;
        });
    });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hi"}, function(response) {
            var mails = response.farewell.toString();
            var newList = mails.split(',').join('\n');
            var checkPageButton = document.getElementById('list');
            checkPageButton.innerHTML = newList;
        });
    });
}, false);


