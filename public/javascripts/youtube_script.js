// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Set videoId based on hash anchor link
var videoId = 'PzYKsLch4GM';
if (window.location.hash) {
	videoId = window.location.hash.substring(1);
}					

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '390',
		width: '640',
		events: {
            'onReady': onPlayerReady
          }
	})
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	player.loadVideoById(videoId, 0, "default");
}