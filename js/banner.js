/*banner.js*/

function banner(){
    var bnn=document.getElementById('banner');
    var bnnWidth=bnn.children[0].offsetWidth;
    window.onresize=function(){
        bnnWidth=bnn.children[0].offsetWidth;
    };
    var prev=document.getElementById("prev");
    var play=document.getElementById("play");
    var next=document.getElementById("next");
    
    var bnnNum=0;
    var lastNum=bnn.children.length-1;
    
    prev.onclick=function(){
        bnnNum--;
        if(bnnNum<0){bnnNum=lastNum;}
        bnn.style.left=-bnnNum*bnnWidth+'px';
    }
    
    next.onclick=function(){
        bnnNum++;
        if(bnnNum>lastNum){bnnNum=0;}
        bnn.style.left=-bnnNum*bnnWidth+'px';
    }
    
    play.onclick=function(){
        play.classList.toggle('on');
        if(play.classList.contains('on')){
            clearTimeout(myAuto);
        }else{
            myAuto=setTimeout(autoBanner,5000);
        }
        
    }
    
    function autoBanner(){
        next.onclick();
        myAuto=setTimeout(autoBanner,5000);
    }
    
    var myAuto=setTimeout(autoBanner,5000);
}


if(window.addEventListener){
    window.addEventListener('load',banner,false); //표준방식 브라우저
}else if(window.attachEvent){
    window.attachEvent('onload',banner); //IE8.0 이하 사용, 비표준방식
}