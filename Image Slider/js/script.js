var count=0;
$("#prev").fadeOut(0.01);
document.querySelector("#next").addEventListener("click",function(){
    count++;
    if(count>0 && count<=3){
        $("#prev").fadeIn();
        document.querySelector(".image").src="images/Torres-"+count+".png";
        document.querySelector(".image").alt="Torres-"+count;
        if(count==3){
            $("#next").fadeOut();
        }
    }
     console.log(count);
})

document.querySelector("#prev").addEventListener("click",function(){
    count--;
    if(count>=0 && count<=3){
        $("#next").fadeIn();
        document.querySelector(".image").src="images/Torres-"+count+".png";
        document.querySelector(".image").alt="Torres-"+count;
        if(count==0){
            $("#prev").fadeOut();
        }
    }
    console.log(count);
})


