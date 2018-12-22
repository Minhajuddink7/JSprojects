
function changeImage(x){
    document.getElementById('myImg').src=x;

}
function toggle(){
    var x = document.getElementById("myDiv");
    if(x.style.display==="block"){
        x.style.display = "none";
        document.getElementById("id1").innerHTML="Show";
        

    }
    else{
        x.style.display = "block";
        document.getElementById("id1").innerHTML="Hide";
    }

}