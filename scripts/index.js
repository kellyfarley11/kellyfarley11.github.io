// set interval -- for timer

var time = 0;

setInterval(function(){
	time = time + 1;
	$("#timer").html(time);
}, 1000);

/* $("p").on("click",function(){
  $("body").css("color", "#990000");
});
 */


$(".HTMLanswer").on("click", function(){
  var newCurrentTotal = parseInt($("#total").html()) + 1;
  $("#total").html(newCurrentTotal);
});


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