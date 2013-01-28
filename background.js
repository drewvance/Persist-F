
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