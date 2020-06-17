document.querySelector("#btn").addEventListener("click",function(){
    var randomcolor = Math.floor(Math.random()*16777215).toString(16)
    document.querySelector("body").style.backgroundColor="#"+randomcolor;
    document.querySelector("body").style.transition="all 1s";
    document.querySelector("p").innerHTML="Body color code:#"+randomcolor;
})

document.querySelector("#btn").addEventListener("click",function(){
    var randomcolor = Math.floor(Math.random()*16777215).toString(16)
    document.querySelector("button").style.backgroundColor="#"+randomcolor;
    document.querySelector("button").style.transition="all 1s";
    document.querySelector("p").innerHTML+="<br>Button color code:#"+randomcolor;
})