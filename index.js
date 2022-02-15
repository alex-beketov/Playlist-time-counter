const example = (status, sender, sendResponse) => {
	if(status) {
		chooseWay()
	}
}

function chooseWay(){
	const counterAll = confirm('Do you want to count all playlist?', '');
	if(counterAll){
		countAllVideos()
	} else {
		const counterSome = confirm('Do you want to count selectively?', '');
		if (counterSome){
			checkCounterSome()
		}
	}		
}

function countAllVideos() {
		let hours = 0;
		let minutes = 0;
		let seconds = 0;
		if (document.querySelectorAll('#content ytd-playlist-video-renderer').length > 0 && document.querySelector('#content ytd-playlist-video-renderer').offsetHeight !== 0){
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
			return alert(`${hours}:${minutes}:${seconds}`)
		} else if (document.querySelectorAll('#content ytd-playlist-panel-video-renderer').length > 0 
		&& document.querySelector('#content ytd-playlist-panel-video-renderer') !== 0){
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
			return alert(`${hours}:${minutes}:${seconds}`)
	}
}

function countSomeVideos(id1, id2) {
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	if (document.querySelectorAll('#content ytd-playlist-video-renderer').length > 0 && document.querySelector('#content ytd-playlist-video-renderer').offsetHeight !== 0) {
		const times = document.querySelectorAll('ytd-playlist-video-renderer > .style-scope ytd-thumbnail-overlay-time-status-renderer');
		for (let i = id1 - 1; i < id2; i++) {
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
		return alert(`${hours}:${minutes}:${seconds}`)
	} else if (document.querySelectorAll('#content ytd-playlist-panel-video-renderer').length > 0
		&& document.querySelector('#content ytd-playlist-panel-video-renderer') !== 0) {
		const times = document.querySelectorAll('#content ytd-playlist-panel-video-renderer > .style-scope ytd-thumbnail-overlay-time-status-renderer');
		for (let i = id1 + 1; i < id2; i++) {
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
		return alert(`${hours}:${minutes}:${seconds}`)
	}
}

function checkCounterSome(){
	const id1 = +prompt("Please write the first video's id", '');
	const id2 = +prompt("Please write the second video's id", '');
	if (id1 !== 0 && id2 !== 0 && id1 !== NaN && id2 !== NaN && id1 < id2) {
		countSomeVideos(id1, id2);
	} else {
		const continueAsker = confirm('Do you want to continue counting?', '')
		if(continueAsker){
			alert('Please write valid ids')
			checkCounterSome()
		}
	}
}

chrome.runtime.onMessage.addListener(example);


