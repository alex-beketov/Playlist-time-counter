function countTime(status, sender, sendResponse) {
	if(status){
		let hours = 0;
		let minutes = 0;
		let seconds = 0;
		if (document.querySelectorAll('ytd-playlist-video-renderer').length > 0){
			const times = document.querySelectorAll('ytd-playlist-video-renderer > .style-scope ytd-thumbnail-overlay-time-status-renderer');
			for (let i = 0; i < times.length; i++) {
				let time = times[i].innerText.split(':');
				if (time.length === 3) {
					hours += +time[0];
					minutes += +time[1];
					seconds += +time[2];
				} else {
					minutes += +time[0];
					seconds += +time[1];
				}
			}
			minutes += Math.trunc(seconds / 60);
			seconds = seconds % 60;
			hours += Math.trunc(minutes / 60);
			minutes = minutes % 60;
			return alert(`hours: ${hours} minutes: ${minutes} seconds: ${seconds}`)
		} else {
		const times = document.querySelectorAll('#content ytd-playlist-panel-video-renderer > .style-scope ytd-thumbnail-overlay-time-status-renderer');
		for (let i = 0; i < times.length; i++) {
			let time = times[i].innerText.split(':');
			if (time.length === 3) {
				hours += +time[0];
				minutes += +time[1];
				seconds += +time[2];
			} else {
				minutes += +time[0];
				seconds += +time[1];
			}
		}
		minutes += Math.trunc(seconds / 60);
		seconds = seconds % 60;
		hours += Math.trunc(minutes / 60);
		minutes = minutes % 60;
		return alert(`hours: ${hours} minutes: ${minutes} seconds: ${seconds}`)
		}
	}
}

chrome.runtime.onMessage.addListener(countTime)