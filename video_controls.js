const video_box = document.querySelector(".promotional_video_box");
const video = document.querySelector(".promotional_video");
const toggle = document.querySelector(".toggle");
const play_icon = document.querySelector(".play_icon");
const play_text = document.querySelector(".play_text");


video_box.style.width = "100%";
video_box.style.height = "100%";

video.style.width = "100%";
video.style.height = "100%";

video.muted = "muted";
video.autoplay = "autoplay";
video.loop = "loop";


function togglePlay() {
	video[video.paused ? "play" : "pause"]();
}
function updateButton() {
	let icon = this.paused ? "./images/play.svg" : "./images/paused.svg";
	let playtext = this.paused ? "播放" : "暫停";

	play_icon.src = icon;
	play_text.textContent = playtext;
}


video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);