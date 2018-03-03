// timer functionality

var time = 0;

// researched tool SET INTERVAL
setInterval(function(){
	time = time + 1;
	// defined as global variable bc no "var"
	$("#timer").html(time);
	// change html to new time
}, 1000);
// increase displayed time by 1 every 1000 milisecconds

setInterval(function(){
	var askReset = prompt("Wow...you must be pretty invested in accurately determining what language you are. Do you want to reset?");
	if (askReset="yes"){
		reset();
	}
}, 200000)
// asks if want to reset if past 200 seconds
// less repetitive than an if/then statement bc now prompt won't get stuck for all times greater than 200 - will only ask after 200 seconds have passed

// define counters
var HTMLcounter = 0;
var CSScounter = 0;
var JScounter = 0;

// reset functinoality
function reset(){
	HTMLcounter = 0;
	CSScounter = 0;
	JScounter =0;
	time=0;
}

// can also reset by clicking on button -- NOT WORKING
$("#reset").on("click", function(){
	reset();
});


//change color when clicked
function changeColor(x){
	$(x).css("color", "orange");
}

$("#1a").on("click", function(){
	changeColor("#1a");
});

$("#1b").on("click", function(){
	changeColor("#1b");
});

$("#1c").on("click", function(){
	changeColor("#1c");
});

$("#2a").on("click", function(){
	changeColor("#2a");
});

$("#2b").on("click", function(){
	changeColor("#2b");
});

$("#2c").on("click", function(){
	changeColor("#2c");
});

$("#3a").on("click", function(){
	changeColor("#3a");
});

$("#3b").on("click", function(){
	changeColor("#3b");
});

$("#3c").on("click", function(){
	changeColor("#3c");
});

$("#4a").on("click", function(){
	changeColor("#4a");
});

$("#4b").on("click", function(){
	changeColor("#4b");
});

$("#4c").on("click", function(){
	changeColor("#4c");
});

/*
$("#1a").on("click", changeColorWhenClicked(1a));

//counter

$(".HTMLanswer").on("click", function(){
  var newCurrentTotal = parseInt($("#total").html()) + 1;
  $("#total").html(newCurrentTotal);
});

var HTMLcounter = 0;

var CSScounter = 0;

var JScounter = 0;

var questionCounter = 0;

//show results
if (questionCounter = 4){
	if HTMLcounter > CSScounter
		if (HTMLcounter > JScounter){
			$(".HTMLresult").show;
		}
		else
			$(".JSSresult").show;
	if CSScounter > HTMLcounter
		if (CSScounter > JScounter){
			$(".CSSresult").show;
		}
		else
			$(".JSresult").show;
	if JScounter > HTMLcounter
		if (JScounter > CSScounter):
			$(".JSresult").show;
		else
			$(".CSSresult").show;
}

/* 
$("#CSSanswer").on("click", function(){
	answerTotal = answerTotal + 2;
});

$("#JSanswer").on("click", function(){
	answerTotal = answerTotal + 3;
}); */

/*
function addToAnswerTotal(x){
	answerTotal = answerTotal + x;
	if answerTotal > 9 {
		$("body").css("background-color", "#990000");
	}
} */