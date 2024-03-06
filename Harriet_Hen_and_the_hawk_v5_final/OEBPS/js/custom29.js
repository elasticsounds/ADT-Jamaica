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

    $('#screen4 .no_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.b_text_w').html('<span>Well done!</span>');
		//console.log("screen4");
    });
	$('#screen5 .no_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.b_text_w').html('<span>Well done!</span>');
 		//console.log("screen5");
   });
	$('#screen6 .no_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.b_text_w').html('<span>Well done!</span>');
		//console.log("screen6");
    });
	$('#screen7 .yes_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.b_text_w').html('<span>Well done!</span>');
		//console.log("screen7");
    });
	$('#screen8 .yes_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.b_text_w').html('<span>Well done!</span>');
    });
	$('#screen9 .yes_btn').bind('touchstart click', function (e) {
        e.preventDefault();
        $('.b_text_w').html('<span>Well done!</span>');
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
        $('.b_text_w').html('<span>Have fun with this activity. Use the blank space provided to draw a farm. They can include their favourite animals, fruits, vegetables or other items found on a farm.</span>');
		}
	});
	
	$('.done').bind('click', function (e) {
		console.log("done");
		document.getElementById('pg30a').click();
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
        $('.b_text_w').html('<span>Read the statement carefully. Click, tap or touch the correct box to say if it is TRUE or FALSE: <br/><br/>I will do the first one for you. </span>');
		}*/
	});

    $('.restart').bind('touchstart click', function (e) {
		console.log(this.id);
		var myid=this.id;
		//if (myid=="restart2")
		//{
		//	document.getElementById('pg30a').click();
		//}
		//else
		//{
       e.preventDefault();
        pause_all();
        play_audio('menu_restart');
        $('#screen1,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9').css('display', 'none');
        $('#screen2').css('display', 'block');
        $('.w1').removeClass('worng trans wrong').addClass('trans');
        $('.r1').removeClass('right trans wrong').addClass('trans');
        $('.disable').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_block').addClass('d_none');
        $('.cont_g').removeClass('cont_g').addClass('cont');
        $('.b_text_w').html('<span>Have fun with this activity. Use the blank space provided to draw a farm. They can include their favourite animals, fruits, vegetables or other items found on a farm.</span>');
        //}
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
        $('.b_text_w').html('<span>Have fun with this activity. Use the blank space provided to draw a farm. They can include their favourite animals, fruits, vegetables or other items found on a farm.</span>');
        //play_audio_h('activity_start', 'b_text_w');
    });

    $('.w1').bind('touchstart click', function (e) {
		//console.log("wrong");
        e.preventDefault();
        $('.w1').removeClass('worng trans').addClass('wrong');
        $('.r1').removeClass('right trans').addClass('trans');
        $('.disable').removeClass('d_none').addClass('d_block');
        $('.cont').removeClass('cont_g').addClass('cont');
		
        $('.b_text_w').html('<span>Are you sure? Try Again!</span>');
        pause_all();
        play_audio_h1('answer_incorrect', 'b_text_w', 'ans_wrong');
    });

    $('.r1').bind('touchstart click', function (e) {
		//console.log("right");
        e.preventDefault();
        pause_all();
        $('.r1').removeClass('right trans').addClass('right');
        $('.w1').removeClass('wrong trans').addClass('trans');
		$('.cont').removeClass('cont').addClass('cont_g');
		$('.disable').removeClass('d_block').addClass('d_none');
        $('.disable_b').removeClass('d_none').addClass('d_block');
        if ($('#screen2').css('display') == 'block') {
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
        }
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
        console.log("cont2");
		//$('#screen1,#screen2,#screen4,#screen5').css('display', 'none');
		/*$('#screen1,#screen2,#screen4,#screen5,#screen6,#screen7,#screen8,#screen9').css('display', 'none');
        $('#screen3').css('display', 'block');
        $('.b_text_w').html('<span>Read the statement carefully. Click, tap or touch the correct box to say if it is TRUE or FALSE: <br/></span>');
        pause_all();
        */
		document.getElementById('pg30a').click();
		//play_audio_h('socks_question', 'b_text_w');
    });
    $('#cont3').bind('touchstart click', function (e) {
        e.preventDefault();
		$('#screen1,#screen2,#screen3,#screen5,#screen6,#screen7,#screen8,#screen9').css('display', 'none');
        $('#screen4').css('display', 'block');
        $('.b_text_w').html('<span>Read the statement carefully. Click, tap or touch the correct box to say if it is TRUE or FALSE: <br/></span>');
        pause_all();
        //play_audio_h('hoodie_question', 'b_text_w');
    });
    $('#cont4').bind('touchstart click', function (e) {
        e.preventDefault();
        //$('#screen1,#screen3,#screen2,#screen4').css('display', 'none');
        $('#screen1,#screen2,#screen3,#screen4,#screen6,#screen7,#screen8,#screen9').css('display', 'none');

		$('#screen5').css('display', 'block');
		$('.b_text_w').html('<span>Read the statement carefully. Click, tap or touch the correct box to say if it is TRUE or FALSE: <br/></span>');
        pause_all();
        //play_audio_h('hoodie_question', 'b_text_w');
    });
    $('#cont5').bind('touchstart click', function (e) {
        e.preventDefault();
        //$('#screen1,#screen3,#screen2,#screen4').css('display', 'none');
        $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen7,#screen8,#screen9').css('display', 'none');

		$('#screen6').css('display', 'block');
		$('.b_text_w').html('<span>Read the statement carefully. Click, tap or touch the correct box to say if it is TRUE or FALSE: <br/></span>');
        pause_all();
        //play_audio_h('hoodie_question', 'b_text_w');
    });
	$('#cont6').bind('touchstart click', function (e) {
        e.preventDefault();
        //$('#screen1,#screen3,#screen2,#screen4').css('display', 'none');
        $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen6,#screen8,#screen9').css('display', 'none');

		$('#screen7').css('display', 'block');
		$('.b_text_w').html('<span>Read the statement carefully. Click, tap or touch the correct box to say if it is TRUE or FALSE: <br/></span>');
        pause_all();
       // play_audio_h('hoodie_question', 'b_text_w');
    });
	$('#cont7').bind('touchstart click', function (e) {
        e.preventDefault();
        //$('#screen1,#screen3,#screen2,#screen4').css('display', 'none');
        $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen6,#screen7,#screen9').css('display', 'none');

		$('#screen8').css('display', 'block');
		$('.b_text_w').html('<span>Read the statement carefully. Click, tap or touch the correct box to say if it is TRUE or FALSE: <br/></span>');
        pause_all();
        //play_audio_h('hoodie_question', 'b_text_w');
    });
	$('#cont8').bind('touchstart click', function (e) {
        e.preventDefault();
        //$('#screen1,#screen3,#screen2,#screen4').css('display', 'none');
        $('#screen1,#screen2,#screen3,#screen4,#screen5,#screen6,#screen7,#screen8').css('display', 'none');

		$('#screen9').css('display', 'block');
		$('.b_text_w').html('<span>Read the statement carefully. Click, tap or touch the correct box to say if it is TRUE or FALSE: <br/></span>');
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