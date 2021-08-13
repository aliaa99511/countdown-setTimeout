

var head=document.getElementById("head");
var count = 10;

function repetition (){
    head.innerHTML = count;
    count--;

    var set=setTimeout(repetition,1000);

    if(count < 0){
        head.innerHTML="Done..."
        clearTimeout(set);
    }
    
}
repetition ();