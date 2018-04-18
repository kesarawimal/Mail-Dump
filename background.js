// chrome.browserAction.setBadgeBackgroundColor({ color: [0, 0, 0, 255] });
// chrome.browserAction.setBadgeText({text: "0"});
// 
// chrome.tabs.onActivated.addListener(function() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {greeting: "hi"}, function(response) {
//             chrome.browserAction.setBadgeText({text: response.farewell});
//             alert(response.farewell);
//         });
// });
// chrome.tabs.onUpdated.addListener(function() {
//     chrome.storage.sync.get(['count'], function(result) {
//         // alert('Value currently is ' + result.count);
//         chrome.browserAction.setBadgeText({text: result.count});
//     });
// });

//     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hi"}, function(response) {
//         chrome.browserAction.setBadgeText({text: response.farewell});
//         alert(response.farewell);
//     });

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
// });
