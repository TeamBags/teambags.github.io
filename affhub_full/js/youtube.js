function youtubeShowVideo() {
  var i, c, y, v, n;
  v = document.getElementsByClassName("youtube");
  for (n = 0; n < v.length; n++) {
    y = v[n];
    i = document.createElement("img");
    i.setAttribute("src", "http://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
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
          this.id +
          "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1"
      );
      a.setAttribute('allow', 'autoplay');
      a.style.width = this.style.width;
      a.style.height = this.style.height;
      this.parentNode.replaceChild(a, this);
    };
  }
}
youtubeShowVideo();

function onPlayerReady(event) {
  event.target.playVideo();
}

$(".youtube").click(function (e) {
  e.preventDefault();

  var player;
  function onYouTubeIframeAPIReady(id) {
    console.log(id);

    player = new YT.Player(id, {
      videoId: id,
      events: {
        onReady: onPlayerReady,
      },
    });
  }
  const _this = $(this);
  const idYoutube = _this.attr("id");

  onYouTubeIframeAPIReady(idYoutube);
});

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
