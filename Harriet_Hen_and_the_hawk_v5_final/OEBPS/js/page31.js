function playaudio(myid1,myid2,color1,color2)
{
	var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        //if(audios[i] != e.target){
            audios[i].pause();
        //}
    }
	document.getElementById('a10').style.color="black";
    document.getElementById('a10a').style.color="black";
    document.getElementById('a11').style.color="black";
    document.getElementById('a11a').style.color="black";
    document.getElementById('a12').style.color="black";
    document.getElementById('a12a').style.color="black";
    document.getElementById('a13').style.color="black";
    document.getElementById('a13a').style.color="black";
    document.getElementById('a14').style.color="black";
    document.getElementById('a14a').style.color="black";
    document.getElementById('a15').style.color="black";
    document.getElementById('a15a').style.color="black";
    document.getElementById('a16').style.color="black";
    document.getElementById('a16a').style.color="black";
    document.getElementById('a17').style.color="black";
    document.getElementById('a17a').style.color="black";

	document.getElementById(myid1).play();
	document.getElementById(color1).style.backgroundColor="#7800FF";
    document.getElementById(color1).style.color="#FFFFFF";
	document.getElementById(myid1).onended = function() {
		document.getElementById(myid2).play();
		document.getElementById(color2).style.backgroundColor="#7800FF";
        document.getElementById(color2).style.color="#FFFFFF";
		document.getElementById(color1).style.color="black";
        document.getElementById(color1).style.backgroundColor="";
	};
	document.getElementById(myid2).onended = function() {
		document.getElementById(color2).style.color="black";
        document.getElementById(color2).style.backgroundColor="";
	};
	/*setTimeout(function () {
		document.getElementById(myid2).play();
		document.getElementById(myid2).onended = function() {
			//alert("The audio has ended");
		};
	}, 2000);*/

    switchContainer('sl_' + color1)
}

var storagePrefix = 'sl-book-storage'

var isPlaying = window.localStorage.getItem(storagePrefix + '/playing') === '1'
var isMaximized = window.localStorage.getItem(storagePrefix + '/maximized') === '1'
var container
var trigger

function enableControls (trigger, container) {
  var maximize = document.createElement('div')
  maximize.className = 'sl-maximize'
  maximize.style = 'position: absolute; margin: -48px 0 0 -48px;'
  maximize.innerHTML = '<img src="images/up-right-and-down-left-from-center-solid.svg" width="32" height="32" />'
  maximize.addEventListener('click', function (e) {
    e.stopPropagation()
    if (isMaximized) {
      container.classList.remove('is-maximized')
      isMaximized = false
      window.localStorage.removeItem(storagePrefix + '/maximized')
    } else {
      container.classList.add('is-maximized')
      isMaximized = true
      window.localStorage.setItem(storagePrefix + '/maximized', '1')
    }
  })
  trigger.appendChild(maximize)

  var play = document.createElement('div')
  play.className = 'sl-play'
  play.style = 'position: absolute; margin: -48px 0 0 -96px;'
  play.innerHTML = '<img src="images/play-pause-solid.svg" width="32" height="32" />'
  play.addEventListener('click', function (e) {
    e.stopPropagation()
    var videoEls = container.querySelectorAll('.sl-video')
    for (var i = 0; i < videoEls.length; i++) {
      if (videoEls[i].style.display == 'block') {
        var player = videojs(videoEls[i].querySelector('video'))
        if (player.paused()) {
          player.play()
        } else {
          player.pause()
        }
        break
      }
    }
  })
  trigger.appendChild(play)
}

function disableControls (trigger) {
  trigger.querySelector('.sl-maximize').remove()
  trigger.querySelector('.sl-play').remove()
}

function switchContainer (id) {
  if (container) {
    container.style.display = 'none'
    Array.prototype.forEach.call(container.querySelectorAll('.sl-video'), function (videoEl) {
      videoEl.style.display = 'none'
      videojs(videoEl.querySelector('video')).pause()
      videojs(videoEl.querySelector('video')).currentTime(0)
    })

    trigger.style.display = 'none'
  }

  if (id != null) {
    container = document.getElementById(id)

    container.style.pointerEvents = 'none'

    if (isMaximized) {
      container.classList.add('is-maximized')
    } else {
      container.classList.remove('is-maximized')
    }

    if (isPlaying) {
      container.style.display = 'block'
      var videoEl = container.querySelectorAll('.sl-video')[0]
      setTimeout(function () {
        videojs(videoEl.querySelector('video')).play()
      }, 200)
      videoEl.style.display = 'block'
      enableControls(trigger, container)
    }

    trigger.style.display = 'block'
  }
}

window.addEventListener('DOMContentLoaded', function () {
  trigger = document.querySelector('.sl-trigger')
  trigger.style.display = 'none'

  trigger.addEventListener('click', function () {
    if (!isPlaying) {
      container.style.display = 'block'
      var videoEl = container.querySelectorAll('.sl-video')[0]
      videojs(videoEl.querySelector('video')).play()
      videoEl.style.display = 'block'
      enableControls(trigger, container)

      isPlaying = true
      window.localStorage.setItem(storagePrefix + '/playing', '1')
    } else {
      disableControls(trigger)
      container.style.display = 'none'
      Array.prototype.forEach.call(container.querySelectorAll('.sl-video'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
      })

      isPlaying = false
      window.localStorage.removeItem(storagePrefix + '/playing')
    }
  })

  Array.prototype.forEach.call(document.querySelectorAll('.sl-video'), function (videoEl) {
    videojs(videoEl.querySelector('video')).on('ended', function () {
      var nextEl = videoEl.nextElementSibling
      if (nextEl != null) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).currentTime(0)
        videojs(nextEl.querySelector('video')).play()
        nextEl.style.display = 'block'
      }
    })

    videoEl.addEventListener('touchstart', function () {
      var player = videojs(videoEl.querySelector('video'))
      if (player.paused()) {
        player.play()
      } else {
        player.pause()
      }
    })
  })
})
