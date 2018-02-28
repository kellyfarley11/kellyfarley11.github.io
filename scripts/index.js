// set interval -- for timer

var time = 0;

setInterval(function(){
	time = time + 1;
	if (time>3){
		console.log("yes");
	}
}, 1000);

$("p").on("click",function(){
  $("body").css("color", "#990000");
});

var answerTotal = 0;

/* $("#HTMLanswer").on("click", function(){
	answerTotal = answerTotal + 1;
});

$("#CSSanswer").on("click", function(){
	answerTotal = answerTotal + 2;
});

$("#JSanswer").on("click", function(){
	answerTotal = answerTotal + 3;
});

if (answertotal=9){
	$("body").css("background-color", "#990000");
} */

function addToAnswerTotal(x){
	answerTotal = answerTotal + x;
	if answerTotal > 9 {
		$("body").css("background-color", "#990000");
	}
}

addToAnswerTotal(10);