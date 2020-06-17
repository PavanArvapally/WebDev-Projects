var count = 0;
var incrementId=-1,decrementId=-1;
function $(selector){
	return document.querySelector(selector);
}

function countChecker(){
	if (count>0) {
		$(".count").style.color="green";
	}
	else if(count==0){
		$(".count").style.color="black";
	}
	 else {
	 	$(".count").style.color="red";
	 }
}
$(".count").innerText=count;
$("#increase").addEventListener("click",function(){
	clearInterval(decrementId);
	if(incrementId==-1){
	incrementId=setInterval(increaseCount,1000);
	decrementId=-1;
	}
});

$("#reset").addEventListener("click",resetCount);

$("#decrease").addEventListener("click",function(){
	clearInterval(incrementId);
	if (decrementId==-1){
	decrementId=setInterval(decreaseCount,1000);
	incrementId=-1;
}
});

function increaseCount(){
	count++;
	$(".count").innerText=count;
	countChecker();
}
function resetCount(){
	clearInterval(decrementId);
	clearInterval(incrementId);
	incrementId=-1;
	decrementId=-1;
	count=0;
	$(".count").innerText=count;
	countChecker();
}
function decreaseCount(){
	count--;
	$(".count").innerText=count;
	countChecker();
}