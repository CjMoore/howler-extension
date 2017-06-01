//creates the right click option
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "The Howler: Check Yourself Before You Wreck Yourself";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.selectionText;
  var url = 'http://localhost:3000/extensions?text=' + encodeURIComponent(sText);
  window.open(url, '_blank');
};
