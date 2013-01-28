
chrome.extension.sendRequest({method: "getWords"}, function(wrd_response) {
	var count = 0;
	var words = wrd_response.words.split(',');

	var items = $('*');

	for (var i = items.length; i--;) {
		if (items[i].tagName != "SCRIPT" && items[i].innerText) {
			count += CheckWords(items[i], words);
		}
	}

	chrome.extension.sendRequest({method: "setBadgeText", message:count.toString()}, function (response) {});
});

function CheckWords(item, words) {
	var lower = $(item).justtext().toLowerCase();
	var count = 0;

	for (var i = words.length; i--;) {
		if (lower.indexOf(words[i].toLowerCase()) >= 0) {
			item.style.backgroundColor = "yellow";
			count++;
		}
	}

	return count;
}

//http://viralpatel.net/blogs/jquery-get-text-element-without-child-element/
$.fn.justtext = function() {
    return $(this).clone()
            .children()
            .remove()
            .end()
            .text();
};