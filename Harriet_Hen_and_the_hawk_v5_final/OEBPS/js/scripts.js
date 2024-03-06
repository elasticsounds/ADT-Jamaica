var storagePrefix = 'sl-book-storage'

var isPlaying = window.localStorage.getItem(storagePrefix + '/playing') === '1'
var isMaximized = window.localStorage.getItem(storagePrefix + '/maximized') === '1'

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

window.addEventListener('DOMContentLoaded', function () {
  var trigger = document.querySelector('.sl-trigger')
  var container = document.querySelector('.sl-video-container')

  container.style.pointerEvents = 'none'

  if (isMaximized) {
    container.classList.add('is-maximized')
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

  Array.prototype.forEach.call(container.querySelectorAll('.sl-video'), function (videoEl) {
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
