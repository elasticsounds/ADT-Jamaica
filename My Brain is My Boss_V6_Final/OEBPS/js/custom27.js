$(document).ready(function () {
currentStep = 0;
    stepsData = [
        {},
        {//1 play_btn
            audioElementId: 'here_are_nine_pictures',
            highlightedElementId: 'head_2',
            signlanguageVideoName: 'act_05_01',
        },
        {//2 cont2
            audioElementId: 'sort_the_picture',
            highlightedElementId: 'head_3',
            signlanguageVideoName: 'act_05_02'
        },
        {//3 answer correct
            audioElementId: 'answer_correct',
            highlightedElementId: 'head_3',
            secondElementId: 'ans_correct',
            signlanguageVideoName: 'act_03_09'
        },
        {//4 answer incorrect
            audioElementId: 'answer_incorrect',
            highlightedElementId: 'head_3',
            secondElementId: 'ans_wrong',
            signlanguageVideoName: 'act_03_09'
        }

    ];
    $('#screen2 .yes_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.b_text_w').html('<span>Well done!</span>');
		//console.log("screen2");
    });

    $('#screen3 .no_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.b_text_w').html('<span>Well done!</span>');
		//console.log("screen3");
    });

    $('#screen4 .no_btn1').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.b_text_w').html('<span>Well done!</span>');
		//console.log("screen4");
    });
	$('#screen5 .yes_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.b_text_w').html('<span>Well done!</span>');
 		//console.log("screen5");
   });
	$('#screen6 .no_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.b_text_w').html('<span>Well done!</span>');
		//console.log("screen6");
    });

    $('.exit').bind('click', function (e) {

		//console.log("exit");
		e.preventDefault();
        var myid=this.id;
		console.log(myid);
		if (myid=="exit10")
		{
			document.getElementById('restart10').click();
		}
		else
		{
		pause_all();
        play_audio('menu_exit');
        showOptionsBar();
        stopCurrentSignLanguageVideo();
        $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9').css('display', 'none');
        $('#screen1').css('display', 'block');
        $('.w1').removeClass('worng trans').addClass('trans');
        $('.r1').removeClass('right trans').addClass('trans');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.b_text_w').html('<span>Choose where the body part is found: <br/>Inside or Outside the body.</span>');
		localStorage.setItem("qno","1");
		}
		switchContainer(null)
	});

	$('.done').bind('click', function (e) {
		console.log("done");
		document.getElementById('pg27a').click();
		localStorage.setItem("qno","1");
		//console.log("exit");
		/*e.preventDefault();
        var myid=this.id;
		console.log(myid);
		if (myid=="exit10")
		{
			document.getElementById('restart10').click();
		}
		else
		{
		pause_all();
        play_audio('menu_exit');
        showOptionsBar();
        stopCurrentSignLanguageVideo();
        $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9').css('display', 'none');
        $('#screen1').css('display', 'block');
        $('.w1').removeClass('worng trans').addClass('trans');
        $('.r1').removeClass('right trans').addClass('trans');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.b_text_w').html('<span>Choose where the body part is found: <br/>Inside or Outside the body.</span>');
		}*/
	});

    $('.restart').bind('touchstart click', function (e) {
		console.log(this.id);
			document.getElementById('q1a2').style.display="none";
			document.getElementById('q1a1').style.display="none";
			document.getElementById('q1a3').style.display="none";
			document.getElementById('q2a2').style.display="none";
			document.getElementById('q2a1').style.display="none";
			document.getElementById('q2a3').style.display="none";
			document.getElementById('q3a2').style.display="none";
			document.getElementById('q3a1').style.display="none";
			document.getElementById('q3a3').style.display="none";
			document.getElementById('q4a2').style.display="none";
			document.getElementById('q4a1').style.display="none";
			document.getElementById('q4a3').style.display="none";
			document.getElementById('q5a2').style.display="none";
			document.getElementById('q5a1').style.display="none";
			document.getElementById('q5a3').style.display="none";
		var myid=this.id;
		if (myid=="restart10")
		{
			document.getElementById('pg27').click();
		}
		else
		{
       e.preventDefault();
        pause_all();
        play_audio('menu_restart');
        $('#screen1,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.w1').removeClass('worng trans wrong').addClass('trans');
        $('.w2').removeClass('worng trans wrong').addClass('trans');
        $('.r1').removeClass('right trans wrong').addClass('trans');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.b_text_w').html('<span>My _______ are like branches of a tree</span>');
        }
		localStorage.setItem("qno","1");
		//play_audio_h('hat_question', 'b_text_w');
    });

    $('.play_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        disableVoiceOver();
        play_audio('activity_start');
        hideOptionsBar();
        $('#screen1,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9').css('display', 'none');
        $('#screen2').css('display', 'block');
        //$('.disable').removeClass('d_none').addClass('d_block');
        //$('.disable_b').removeClass('d_block').addClass('d_none');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.b_text_w').html('<span>My _______ are like branches of a tree</span>');
        //play_audio_h('activity_start', 'b_text_w');
		localStorage.setItem("qno","1");
			document.getElementById('q1a2').style.display="none";
			document.getElementById('q1a1').style.display="none";
			document.getElementById('q1a3').style.display="none";
			document.getElementById('q2a2').style.display="none";
			document.getElementById('q2a1').style.display="none";
			document.getElementById('q2a3').style.display="none";
			document.getElementById('q3a2').style.display="none";
			document.getElementById('q3a1').style.display="none";
			document.getElementById('q3a3').style.display="none";
			document.getElementById('q4a2').style.display="none";
			document.getElementById('q4a1').style.display="none";
			document.getElementById('q4a3').style.display="none";
			document.getElementById('q5a2').style.display="none";
			document.getElementById('q5a1').style.display="none";
			document.getElementById('q5a3').style.display="none";

			switchContainer('sl_01')
    });

    $('.w1').bind('touchstart click', function (e) {
		//console.log("wrong");
        e.preventDefault();
        $('.w1').removeClass('worng trans').addClass('wrong');
        $('.r1').removeClass('right trans').addClass('trans');
        $('.w2').removeClass('wrong trans').addClass('trans');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont').removeClass('cont_g').addClass('cont');
		var text_01 = localStorage.getItem("qno");
        //alert(text_01);
        if (text_01=="1")
		{
			document.getElementById('q1a2').style.display="block";
			document.getElementById('q1a1').style.display="none";
			document.getElementById('q1a3').style.display="none";
		}
		else if (text_01=="2")
		{
			document.getElementById('q2a1').style.display="block";
			document.getElementById('q2a2').style.display="none";
			document.getElementById('q2a3').style.display="none";
		}
		else if (text_01=="3")
		{
			document.getElementById('q3a2').style.display="block";
			document.getElementById('q3a1').style.display="none";
			document.getElementById('q3a3').style.display="none";
		}
		else if (text_01=="4")
		{
			document.getElementById('q4a2').style.display="block";
			document.getElementById('q4a1').style.display="none";
			document.getElementById('q4a3').style.display="none";
		}
		else if (text_01=="5")
		{
			document.getElementById('q5a1').style.display="block";
			document.getElementById('q5a2').style.display="none";
			document.getElementById('q5a3').style.display="none";
		}
		$('.b_text_w').html('<span>Are you sure? Try Again!</span>');
        pause_all();
        play_audio_h1('answer_incorrect', 'b_text_w', 'ans_wrong');
    });
	$('.w2').bind('touchstart click', function (e) {
		//console.log("wrong");
        e.preventDefault();
        $('.w2').removeClass('worng trans').addClass('wrong');
        $('.r1').removeClass('right trans').addClass('trans');
        $('.w1').removeClass('wrong trans').addClass('trans');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont').removeClass('cont_g').addClass('cont');
		var text_01 = localStorage.getItem("qno");
		if (text_01=="1")
		{
			document.getElementById('q1a2').style.display="none";
			document.getElementById('q1a1').style.display="none";
			document.getElementById('q1a3').style.display="block";
		}
        else if (text_01=="2")
		{
			document.getElementById('q2a3').style.display="block";
			document.getElementById('q2a2').style.display="none";
			document.getElementById('q2a1').style.display="none";
		}
		else if (text_01=="3")
		{
			document.getElementById('q3a1').style.display="block";
			document.getElementById('q3a2').style.display="none";
			document.getElementById('q3a3').style.display="none";
		}
		else if (text_01=="4")
		{
			document.getElementById('q4a3').style.display="block";
			document.getElementById('q4a1').style.display="none";
			document.getElementById('q4a2').style.display="none";
		}
		else if (text_01=="5")
		{
			document.getElementById('q5a3').style.display="block";
			document.getElementById('q5a2').style.display="none";
			document.getElementById('q5a1').style.display="none";
		}$('.b_text_w').html('<span>Are you sure? Try Again!</span>');
        pause_all();
        play_audio_h1('answer_incorrect', 'b_text_w', 'ans_wrong');
    });

    $('.r1').bind('touchstart click', function (e) {
		//console.log("right");
        /*e.preventDefault();
        pause_all();
        $('.r1').removeClass('right trans').addClass('right');
        $('.w1').removeClass('wrong trans').addClass('trans');
		$('.w2').removeClass('wrong trans').addClass('trans');
		$('.cont').removeClass('cont').addClass('cont_g');
		$('.disable').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_none').addClass('d_block');*/
		e.preventDefault();
		pause_all();
		console.log("1");
		$('.r1').removeClass('right trans').addClass('right');
        $('.w1').removeClass('wrong trans').addClass('trans');
        $('.w2').removeClass('wrong trans').addClass('trans');
		$('.cont').removeClass('cont').addClass('cont_g');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_none').addClass('d_block');

		var random = (Math.floor(Math.random() * 4) + 1)
        console.log(random);
		play_audio_h1('hat_correct_' + random, 'b_text_w', 'ans_correct');
        switchContainer('sl_correct_' + random)

		var text_01 = localStorage.getItem("qno");
		if (text_01=="1")
		{
			document.getElementById('q1a2').style.display="none";
			document.getElementById('q1a1').style.display="block";
			document.getElementById('q1a3').style.display="none";
		}
		else if (text_01=="2")
		{
			document.getElementById('q2a2').style.display="block";
			document.getElementById('q2a1').style.display="none";
			document.getElementById('q2a3').style.display="none";
		}
		else if (text_01=="3")
		{
			document.getElementById('q3a3').style.display="block";
			document.getElementById('q3a1').style.display="none";
			document.getElementById('q3a2').style.display="none";
		}
		else if (text_01=="4")
		{
			document.getElementById('q4a1').style.display="block";
			document.getElementById('q4a2').style.display="none";
			document.getElementById('q4a3').style.display="none";
		}
		else if (text_01=="5")
		{
			document.getElementById('q5a2').style.display="block";
			document.getElementById('q5a1').style.display="none";
			document.getElementById('q5a3').style.display="none";
		}
        /*if ($('#screen2').css('display') == 'block') {
			//console.log('2');
           play_audio_h1('hat_correct', 'b_text_w', 'ans_correct');
		   //play_audio_atri('ans_correct');
        } else if ($('#screen3').css('display') == 'block') {
            play_audio_h1('hat_correct', 'b_text_w', 'ans_correct');
		} else if ($('#screen4').css('display') == 'block') {
			play_audio_h1('hat_correct', 'b_text_w', 'ans_correct');
		} else if ($('#screen5').css('display') == 'block') {
            play_audio_h1('hat_correct', 'b_text_w', 'ans_correct');
        } else if ($('#screen6').css('display') == 'block') {
            play_audio_h1('hat_correct', 'b_text_w', 'ans_correct');
        } else if ($('#screen7').css('display') == 'block') {
            play_audio_h1('hat_correct', 'b_text_w', 'ans_correct');
        } else if ($('#screen8').css('display') == 'block') {
            play_audio_h1('hat_correct', 'b_text_w', 'ans_correct');
        } else if ($('#screen9').css('display') == 'block') {
            play_audio_h1('hat_correct', 'b_text_w', 'ans_correct');
        }*/
    });

    $('.cont').bind('touchstart click', function (e) {
        e.preventDefault();
        pause_all();
        play_audio('menu_continue');
        $('.w1').removeClass('worng trans').addClass('trans');
        $('.r1').removeClass('right trans').addClass('trans');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        //$('.disable').removeClass('d_none').addClass('d_block');
        //$('.disable_b').removeClass('d_block').addClass('d_none');

	});

    $('#cont2').bind('touchstart click', function (e) {
        e.preventDefault();
		localStorage.setItem("qno","2");
        //$('#screen1,#screen2,#screen4,#screen5').css('display', 'none');
		$('#screen1,#screen2,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9').css('display', 'none');
        $('#screen3').css('display', 'block');
        $('.b_text_w').html('<span>My _________ pushes blood</span>');
        pause_all();
        //play_audio_h('socks_question', 'b_text_w');
				switchContainer('sl_02')
    });
    $('#cont3').bind('touchstart click', function (e) {
        e.preventDefault();
		localStorage.setItem("qno","3");
		$('#screen1,#screen2,#screen3,#screen5,#screen6,#screen7,#screen8,#screen9').css('display', 'none');
        $('#screen4').css('display', 'block');
        $('.b_text_w').html('<span>My _________ is made of many bones</span>');
        pause_all();
        //play_audio_h('hoodie_question', 'b_text_w');
				switchContainer('sl_03')
    });
    $('#cont4').bind('touchstart click', function (e) {
        e.preventDefault();
		localStorage.setItem("qno","4");
        //$('#screen1,#screen3,#screen2,#screen4').css('display', 'none');
        $('#screen1,#screen2,#screen3,#screen4,#screen6,#screen7,#screen8,#screen9').css('display', 'none');

		$('#screen5').css('display', 'block');
		$('.b_text_w').html('<span>My _________ is the boss of my body</span>');
        pause_all();
        //play_audio_h('hoodie_question', 'b_text_w');
				switchContainer('sl_04')
    });
    $('#cont5').bind('touchstart click', function (e) {
        e.preventDefault();
		localStorage.setItem("qno","5");
        //$('#screen1,#screen3,#screen2,#screen4').css('display', 'none');
        $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen7,#screen8,#screen9').css('display', 'none');

		$('#screen6').css('display', 'block');
		$('.b_text_w').html('<span>My _________ covers my skeleton</span>');
        pause_all();
        //play_audio_h('hoodie_question', 'b_text_w');
				switchContainer('sl_05')
    });
	$('#cont6').bind('touchstart click', function (e) {
        e.preventDefault();
		localStorage.setItem("qno","5");
        //$('#screen1,#screen3,#screen2,#screen4').css('display', 'none');
        $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen6,#screen8,#screen9').css('display', 'none');

		$('#screen7').css('display', 'block');
		$('.b_text_w').html('<span>Choose where the body part is found: Inside or Outside the body?</span>');
        pause_all();
       // play_audio_h('hoodie_question', 'b_text_w');
    });

	$('#cont9').bind('touchstart click', function (e) {
        e.preventDefault();
        $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9').css('display', 'none');
        $('#screen10').css('display', 'block');
        $('.disable').removeClass('d_block').addClass('d_none');
        pause_all();
       // play_audio_h('well_done_all_clothes', 'b_text_w3');
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

 function play_audio_h(audio,high) {
 clearTimeout(x1);
 var aud = document.getElementById(audio);
 if(aud.paused) {
 aud.play();
 $('.disable_b1').addClass('d_block');
 $('.'+high+' span').addClass('highlight');
 $('.'+high+' span span').removeClass('highlight');
 var x1 = setTimeout(function(){
 $('.'+high+' span').removeClass('highlight');
 $('.disable_b1').removeClass('d_block').addClass('d_none');
 }, aud.duration*1000);
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
