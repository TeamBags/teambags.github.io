function youtubeShowVideo() {
  var i, c, y, v, n;
  v = document.getElementsByClassName("youtube");
  for (n = 0; n < v.length; n++) {
    y = v[n];
    i = document.createElement("img");
    i.setAttribute(
      "src",
      "https://i.ytimg.com/vi/" + y.dataset.id + "/hqdefault.jpg"
    );
    i.setAttribute("alt", "video-preview");
    i.setAttribute("class", "thumb");
    c = document.createElement("div");
    c.setAttribute("class", "play");
    y.appendChild(i);
    y.appendChild(c);
    y.onclick = function () {
      var a = document.createElement("iframe");
      a.setAttribute(
        "src",
        "https://www.youtube.com/embed/" +
          this.dataset.id +
          "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1"
      );
      a.style.width = this.style.width;
      a.style.height = this.style.height;
      this.parentNode.replaceChild(a, this);
    };
  }
}
youtubeShowVideo();

var player;
function onYouTubeIframeAPIReady(height, width, id) {
  player = new YT.Player(id, {
    height: height,
    width: width,
    videoId: id,
    events: {
      onReady: onPlayerReady,
    },
  });
}
onYouTubeIframeAPIReady($(this).height(), $(this).width(), this.id);
function onPlayerReady(event) {
  event.target.playVideo();
}
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
