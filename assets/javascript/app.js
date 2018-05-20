
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;
var count = 30;


$(document).ready(function(){

	$("#game_container").hide();
	$("#the_end").hide();

	$("#start_button").on("click", function(){

		$("#start_container").hide();

		$("#game_container").show();

		startCountdown();
		return;

	});

	// Counts down and displays the timer
	function countdown(){

		// count down from 30 seconds to 0
		count--;

    	$('#timer_number').text(count + " Seconds");

			$("#done_button").on("click", function(){
			count = 0; 
			return;

			});

			if(count == -1){

				timeUp();

				$("#game_container").hide();

			}

	}

	function startCountdown(){

		setInterval(countdown, 1000);

	}

	function timeUp(){
		// Radio imput for questions
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();

		// figure out the right and wrong andswer with an if statement
		if(Q1 === undefined){
			unansweredCount++;
		}
		else if(Q1 === "Sylvester Stallone"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q2 === undefined){
			unansweredCount++;
		}
		else if(Q2 === "Arnold Schwarzenegger"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q3 === undefined){
			unansweredCount++;
		}
		else if(Q3 === "David Hasselhoff"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q4 === undefined){
			unansweredCount++;
		}
		else if(Q4 === "Chuck Norris"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q5 === undefined){
			unansweredCount++;
		}
		else if(Q5 === "Harrison Ford"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		$('#correct_answers').text(correctCount);
		$('#wrong_answers').text(wrongCount);
		$('#unanswered').text(unansweredCount);
		$("#the_end").show();

	}

});