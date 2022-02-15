chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	let message = {
		status:true
	};
	chrome.tabs.sendMessage(tab.id, message.status);
}