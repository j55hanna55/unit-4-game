    var wins = 0;
	var losses = 0;
	var total = 0;
	

	$('#wins').text(wins);
	$('#losses').text(losses);
	$('#total').text(total);
	$('#rn').text(rn);


	

document.getElementById("rn").innerHTML =
Math.floor(Math.random() * 101) + 19;


$("#13").click(function(){
	total = total + 13;
    $('#total').text(total);
});



$("#10").click(function(){
  total = total + 10;
    $('#total').text(total);
});


$("#7").click(function(){
  total = total + 7;
    $('#total').text(total);
});


$("#1").click(function(){
  total = total + 1;
    $('#total').text(total);
});




// function checkGameStatus() {
//    var currentScore = $("#rn").text()
//    currentScore = parseInt(currentScore);
//    var targetScore = $("#total").text()
//    targetScore = parseInt(targetScore);
// }

// if (currentScore == targetScore){
// 	var targetScore = $("#wins").text();
// 	targetScore = parseInt(targetScore);
// 	wins++;
// 	alert("nsoji");
// 	console.log(targetScore);
// }


// var rn = $('#rn').text();

// if (total > rn){
// 			losses++;
// 			$('#losses').text(losses);
// 		}

// function checkGameStatus { 
// 	var currentScore = $("#rn").text()
// 	currentScore = parseInt(currentScore);

// 	var targetScore = $("#total").text()
// 	targetScore = parseInt(targetScore);
// }

// 		if (currentScore == targetScore) {
//         var winnerNum = $("#wins").text()
//         winnerNum = parseInt(winnerNum);
//         winnerNum++;
//         $("#wins").text(winnerNum);
//         reset();

//     }
//     else if (currentScore > targetScore) {
//         var lossesNum = $("#losses").text()
//         lossesNum = parseInt(lossesNum);
//         lossesNum++;
//         $("#losses").text(lossesNum);
//         reset();
//     }
















