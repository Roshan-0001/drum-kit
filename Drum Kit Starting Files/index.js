var noOfButoons=document.querySelectorAll(".drum").length;

for (var i  = 0; i  < noOfButoons; i ++) {
    
    document.querySelectorAll(".drum")[i].
    addEventListener("click",clck);
}

document.addEventListener("keypress",function(event){
    var vr=event.key;
    play(vr);
    buttonAnimation(vr);
});



function clck(){
    play(this.innerHTML);
    buttonAnimation(this.innerHTML);
}

function play(check){
    
        
        
            if(check=="w"){
                var audio = new Audio('sounds/1.mp3');
                audio.play();
            }
            else if(check=="a"){
                var audio = new Audio('sounds/2.mp3');
                audio.play();
            }
            else if(check=="s"){
                var audio = new Audio('sounds/3.mp3');
                audio.play();
            }
            else if(check=="d"){
                var audio = new Audio('sounds/4.mp3');
                audio.play();
            }
            else if(check=="j"){
                var audio = new Audio('sounds/5.mp3');
                audio.play();
            }
            else if(check=="k"){
                var audio = new Audio('sounds/6.mp3');
                audio.play();
            }
            else if(check=="l"){
                var audio = new Audio('sounds/7.mp3');
                audio.play();
            }}


            function buttonAnimation(currentKey){
                elemnt=("."+currentKey);

                document.querySelector(elemnt).classList.add("pressed");

                setTimeout(function(){
                    document.querySelector(elemnt).classList.remove("pressed");
                }, 50);

            }






