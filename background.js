
function getSelected(){
  return window.getSelection().toString()
}
// console.log(window.getSelection().toString())

// var getSelected = chrome.tabs.executeScript( function(){
//   return window.getSelection().toString()
// });

var text = getSelected()

chrome.browserAction.onClicked.addListener(function(tab) {
  var url = 'https://the-howler.herokuapp.com/' + encodeURI(getSelected())
  chrome.tabs.create({'url': url})
});

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
