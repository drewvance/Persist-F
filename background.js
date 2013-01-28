
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	switch (request.method)
	{
		case "getWords":
			sendResponse({words: localStorage['words']});
			break;
		case 'setBadgeText':
			chrome.browserAction.setBadgeText({text: request.message});
			sendResponse({});
			break;
	}
});


chrome.tabs.onActivated.addListener(function(info) {
	chrome.tabs.sendMessage(info.tabId , {method: "checkPage"}, function(response) {    
	});		
});
