$(document).ready(function () {
    currentStep = 0;
    stepsData = [
        {},
        {//1 play_btn  //        play_audio_h('here_are_the_names', 'head_2');
            audioElementId: 'here_are_the_names',
            highlightedElementId: 'head_2',
            signlanguageVideoName: 's_08_01',
        },
        {//2 cont2   /
            audioElementId: 'select_the_vowel',
            highlightedElementId: 'head_3',
            signlanguageVideoName: 's_08_02'
        },
        {//3 answer correct
            audioElementId: 'hint_hair',
            highlightedElementId: 'popup_text',
            signlanguageVideoName: 'popup_text'
        },
        {//4 answer incorrect
            audioElementId: 'hint_nose',
            highlightedElementId: 'popup_text',
            signlanguageVideoName: 'act_03_09'
        },
        {//5 answer correct
            audioElementId: 'hint_mouth',
            highlightedElementId: 'popup_text',
            signlanguageVideoName: 'popup_text'
        },
        {//6 answer correct
            audioElementId: 'hint_eyes',
            highlightedElementId: 'popup_text',
            signlanguageVideoName: 'popup_text'
        },
        {//7 answer correct
            audioElementId: 'hint_ears',
            highlightedElementId: 'popup_text',
            signlanguageVideoName: 'popup_text'
        }

    ];

	 $('#screen3 .r1').bind('touchstart click', function (e) {
        e.preventDefault();
		console.log("screen3 correct");
        $('.head_3').html('<span>Well done!</span>');
        //console.log("screen2");
    });
	$('#screen4 .r1').bind('touchstart click', function (e) {
        e.preventDefault();
		console.log("screen3 correct");
        $('.head_3').html('<span>Well done!</span>');
        //console.log("screen2");
    });
	$('#screen5 .r1').bind('touchstart click', function (e) {
        e.preventDefault();
		console.log("screen3 correct");
        $('.head_3').html('<span>Well done!</span>');
        //console.log("screen2");
    });
	$('#screen6 .r1').bind('touchstart click', function (e) {
        e.preventDefault();
		console.log("screen3 correct");
        $('.head_3').html('<span>Well done!</span>');
        //console.log("screen2");
    });
	$('#screen7 .r1').bind('touchstart click', function (e) {
        e.preventDefault();
		console.log("screen3 correct");
        $('.head_3').html('<span>Well done!</span>');
        //console.log("screen2");
    });
    var letter01 = $('.letter01').text();

    $('.w1').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.head_3').html('<span>That\'s not the correct vowel!<br/>Try Again!</span>');
        $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $(this).addClass('wrong');
        $('.popup').removeClass('d_none').addClass('d_block');
        $('.cont').removeClass('cont_g').addClass('cont');
        $('.disable').removeClass('d_none').addClass('d_block');
        var text_01 = $(this).text();
        $('.letter01').html(text_01);
        $('.letter01').css('color', 'red');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        pause_all();
        play_audio_h1('answer_incorrect', 'head_3', 'ans_wrong');
        if ($('#screen3').css('display') == 'block') {
            a1 = setTimeout(function () {
				console.log("1");
                pause_all();
                currentStep = 3;
                //highlightElement();
               // play_audio_h('hint_hair', 'popup_text');
            }, 3000);
        } else if ($('#screen4').css('display') == 'block') {
            a1 = setTimeout(function () {
                pause_all();
                currentStep = 4;
                //highlightElement();
                //play_audio_h('hint_nose', 'popup_text');
            }, 3000);
        } else if ($('#screen5').css('display') == 'block') {
            a1 = setTimeout(function () {
                pause_all();
                currentStep = 5;
                //highlightElement();
                //play_audio_h('hint_mouth', 'popup_text');
            }, 3000);
        } else if ($('#screen6').css('display') == 'block') {
            a1 = setTimeout(function () {
                pause_all();
                currentStep = 6;
                //highlightElement();
                //play_audio_h('hint_eyes', 'popup_text');
            }, 3000);
        } else if ($('#screen7').css('display') == 'block') {
            a1 = setTimeout(function () {
                pause_all();
                currentStep = 7;
                //highlightElement();
                //play_audio_h('hint_ears', 'popup_text');
            }, 3000);
        }
    });

    $('.r1').bind('touchstart click', function (e) {
        e.preventDefault();
		pause_all();
		console.log("1");
		$('.r1').removeClass('right trans').addClass('right');
        $('.w1').removeClass('wrong trans').addClass('trans');
        $('.cont').removeClass('cont').addClass('cont_g');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_none').addClass('d_block');

		var random = (Math.floor(Math.random() * 4) + 1)
        play_audio_h1('hat_correct_' + random, 'head_3', 'ans_correct');
        switchContainer('sl_correct_' + random)
		//$('.head_3').html('<span>Well Done!</span>');
        //$('.head_3').html('<span>You filled in the missing vowel!<br/>Well Done!</span>');
        /*$('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $(this).addClass('right');

        $('.popup').removeClass('d_block').addClass('d_none');
        $('.cont').removeClass('cont').addClass('cont_g');
		console.log("1");
        //$('.cont').style.display="block";
		var random = (Math.floor(Math.random() * 4) + 1)
        play_audio_h1('hat_correct_' + random, 'b_text_w', 'ans_correct');
        switchContainer('sl_correct_' + random)

		//play_audio_h1('answer_correct', 'head_3', 'ans_correct');
        //play_audio_h1('hat_correct', 'head_3', 'ans_correct');
        $('.disable_b').removeClass('d_none').addClass('d_block');
        $('.disable').removeClass('d_block').addClass('d_none');*/
		console.log("1");
        var text_01 = $(this).text();

		if (text_01=="U")
		{
			document.getElementById('star1').style.display="block";
		}
		else if (text_01=="A")
		{
			document.getElementById('star2').style.display="block";
		}
		else if (text_01=="I")
		{
			document.getElementById('star3').style.display="block";
		}
		else if (text_01=="E")
		{
			document.getElementById('star4').style.display="block";
		}
		else if (text_01=="O")
		{
			document.getElementById('star5').style.display="block";
		}
		$('.letter01').html(text_01);
        $('.letter01').css('color', '#80E015');
//        $('.disable_b1').removeClass('d_none').addClass('d_block');
    });

    $('.cont').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_continue');
        $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $('.popup').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.head_3').html('<span>Select the vowel that is<br/>missing in the word!</span>');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.cont').removeClass('cont_g').addClass('cont');
    });


    $('.restart').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_restart');
		document.getElementById('star1').style.display="none";
		document.getElementById('star2').style.display="none";
		document.getElementById('star3').style.display="none";
		document.getElementById('star4').style.display="none";
		document.getElementById('star5').style.display="none";
        $('.disable_b1').removeClass('d_none').addClass('d_block');
        $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        $('.head_3').html('<span>Select the vowel that is<br/>missing in the word!</span>');
        var letter01 = $(this).text();
        $('#screen1,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.cont').removeClass('cont').addClass('cont_g');
        //play_audio_h('here_are_the_names', 'head_2');
        a1 = setTimeout(function () {
            pause_all();
            play_audio_h('can_you_fill_missing_vowels', 'head_2a');
        }, 500);
        $('.s3_a').removeClass('trans right wrong');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        a1 = setTimeout(function () {
            $('.disable').removeClass('d_block').addClass('d_none');
            $('.cont').removeClass('cont').addClass('cont_g');
            $('.disable_b1').removeClass('d_block').addClass('d_none');
        }, 5000);
    });

    $('.exit').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_exit');
        showOptionsBar();
        stopCurrentSignLanguageVideo();
		document.getElementById('star1').style.display="none";
		document.getElementById('star2').style.display="none";
		document.getElementById('star3').style.display="none";
		document.getElementById('star4').style.display="none";
		document.getElementById('star5').style.display="none";
        $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        $('.head_3').html('<span>Select the vowel that is<br/>missing in the word!</span>');
        var letter01 = $(this).text();
        $('#screen2,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen1').css('display', 'block');
        $('.s3_a').removeClass('trans right wrong');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.disable').removeClass('d_none').addClass('d_block');

        switchContainer(null)
    });

    $('.done').bind('click', function (e) {
        pause_all();
        play_audio('menu_exit');
        stopCurrentSignLanguageVideo();
        $('.w1, .r1').removeClass('wrong trans right').addClass('trans');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        $('.head_3').html('<span>Select the vowel that is<br/>missing in the word!</span>');
        var letter01 = $(this).text();
        $('#screen2,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen1').css('display', 'block');
        $('.s3_a').removeClass('trans right wrong');
        $('.letter01').html('_');
        $('.letter01').css('color', 'black');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.disable').removeClass('d_none').addClass('d_block');
    });

    $('.play_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        disableVoiceOver();
        pause_all();
        //play_audio('activity_start');
        hideOptionsBar();
		document.getElementById('star1').style.display="none";
		document.getElementById('star2').style.display="none";
		document.getElementById('star3').style.display="none";
		document.getElementById('star4').style.display="none";
		document.getElementById('star5').style.display="none";
        $('.disable_b1').removeClass('d_none').addClass('d_block');
        $('#screen1,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.cont').removeClass('cont').addClass('cont_g');
        $('.disable_b1').removeClass('d_block').addClass('d_none');
//        play_audio_h('here_are_the_names', 'head_2');
        currentStep = 1;
        //highlightElement();
        a1 = setTimeout(function () {
    //        currentStep = 2;
  //          highlightElement();
            play_audio_h('can_you_fill_missing_vowels', 'head_2a');
        }, 500);

        switchContainer('sl_01')
    });

    $('#cont2').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen4,#screen5,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen3').css('display', 'block');
        pause_all();
        //play_audio('menu_continue');
        currentStep = 2;
        play_audio_h('select_the_vowel', 'head_3');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.disable_b').removeClass('d_block').addClass('d_none');

        switchContainer('sl_02')
    });

    $('#cont3').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen5,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen4').css('display', 'block');
        pause_all();
        play_audio_h('select_the_vowel', 'head_3');
        $('.disable_b').removeClass('d_block').addClass('d_none');

        switchContainer('sl_03')
    });

    $('#cont4').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen4,#screen6,#screen7,#screen8').css('display', 'none');
        $('#screen5').css('display', 'block');
        pause_all();
        play_audio_h('select_the_vowel', 'head_3');
        $('.disable_b').removeClass('d_block').addClass('d_none');

        switchContainer('sl_04')
    });

    $('#cont5').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen7,#screen8').css('display', 'none');
        $('#screen6').css('display', 'block');
        pause_all();
        play_audio_h('select_the_vowel', 'head_3');
        $('.disable_b').removeClass('d_block').addClass('d_none');

        switchContainer('sl_05')
    });

    $('#cont6').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen5,#screen4,#screen6,#screen8').css('display', 'none');
        $('#screen7').css('display', 'block');
        pause_all();
        play_audio_h('select_the_vowel', 'head_3');
        $('.disable_b').removeClass('d_block').addClass('d_none');

        switchContainer('sl_06')
    });

    $('#cont7').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen5,#screen4,#screen7,#screen6').css('display', 'none');
        $('#screen8').css('display', 'block');
        $('.disable').removeClass('d_block').addClass('d_none');
        pause_all();
        play_audio_h('well_done_all_vowels', 'head_4');

        switchContainer('sl_07')
    });


});

/*function play_audio(audio) {
 var aud = document.getElementById(audio);
 if(aud.paused) {
 aud.play();
 } else {
 aud.play();
 }
 }

 function pause_all() {
 var sounds = document.getElementsByTagName('audio');
 for(i=0; i<sounds.length; i++) {
 sounds[i].pause();
 sounds[i].currentTime = 0;
 }
 }

 function play_audio_h(audio, high) {

 $('.highlight').removeClass('highlight');
 stopAllTimeouts();
 var aud = document.getElementById(audio);
 if(aud.paused) {
 aud.play();
 $('.'+high+' span').addClass('highlight');
 $('.'+high+' span span').removeClass('highlight');
 setTimeout(function(){
 $('.'+high+' span').removeClass('highlight');
 }, aud.duration*1000);
 } else {
 aud.pause(); // Stop playing
 aud.currentTime = 0; // Reset time
 }
 }


 function play_audio_h1(audio, high, audio1) {
 $('.highlight').removeClass('highlight');
 stopAllTimeouts();
 var aud = document.getElementById(audio);
 var aud1 = document.getElementById(audio1);
 if(aud.paused) {
 aud1.play();
 setTimeout(function () {
 aud.play();
 }, 200);
 $('.'+high+' span').addClass('highlight');
 $('.'+high+' span span').removeClass('highlight');
 setTimeout(function(){
 $('.'+high+' span').removeClass('highlight');
 }, aud.duration*1000);
 } else {
 aud.pause(); // Stop playing
 aud.currentTime = 0; // Reset time
 }
 }

 function stopAllTimeouts() {
 for (var i = setTimeout(function() {}, 0); i > 0; i--) {
 window.clearInterval(i);
 }
 }*/

var a1;

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
