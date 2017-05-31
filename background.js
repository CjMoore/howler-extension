
// function getSelected(){
//   return window.getSelection().toString()
// }
// console.log(window.getSelection().toString())

// var getSelected = chrome.tabs.executeScript( function(){
//   return window.getSelection().toString()
// });
// 

chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "The Howler - Analyze Sentiment!";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.selectionText;
  var url = 'http://localhost:3000/extension?text=' + encodeURIComponent(sText);
  window.open(url, '_blank');
};

// var text = getSelected()

// chrome.browserAction.onClicked.addListener(function(tab) {
//   var url = 'https://the-howler.herokuapp.com/' + encodeURI(getSelected())
//   chrome.tabs.create({'url': url})
// });

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
//      sendServiceRequest(response.data);
//   });
// });
//
// function sendServiceRequest(selectedText) {
//   var serviceCall = 'http://www.google.com/search?q=' + selectedText;
//   chrome.tabs.create({url: serviceCall});
// }
