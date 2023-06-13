/*gnb.js*/
var aout=1;
var ulout=1;

function hideMenu(){
    var header=document.getElementById('header');
    var gnb=document.getElementById('gnb');//ul
    var gnbList=gnb.children;//큰 li 4개
    var ulList=document.querySelectorAll(".gnb>li>ul");//하위ul

    if(aout && ulout){
        //사라지는 동작
        header.style.height='110px';

        for(var j=0; j<gnbList.length; j++){
            var theImg=gnbList[j].children[0].children[0];
            theImg.src=theImg.src.replace('_over.gif','.gif');
        }
        
        for(var i=0; i<ulList.length; i++){
            ulList[i].style.visibility='hidden';
        }
    }
}

function gnb(){
    var gnb=document.getElementById('gnb');//ul
    var gnbList=gnb.children;//큰 li 4개
    var ulList=document.querySelectorAll(".gnb>li>ul");//하위ul
    
    var myAuto=null;
    
    for(var i=0; i<ulList.length; i++){
        ulList[i].style.visibility='hidden';
    }
    
    header.style.height='110px';

    for(var i=0; i<gnbList.length; i++){//0~5
        gnbList[i].children[0].onmouseover=function(){//a
            header.style.height='110px';
            
            for(var i=0; i<ulList.length; i++){
                ulList[i].style.visibility='hidden';
            }

            var theNext=this.nextSibling;
            if(theNext.nodeType!=1){theNext=theNext.nextSibling;}//ul
            theNext.style.visibility='visible';
            header.style.height='400px';

            for(var k=0; k<gnbList.length; k++){
                var theImg=gnbList[k].children[0].children[0];
                theImg.src=theImg.src.replace('_over.gif','.gif');
            }

            this.children[0].src=this.children[0].src.replace('.gif','_over.gif');

            aout=0;
        }//onmouseover

        //큰li a에서 마우스아웃할때 하위 ul 사라짐
        gnbList[i].children[0].onmouseout=function(){//a
            if(myAuto) clearTimeout(myAuto);
            //hideMenu함수를 0.5초 이후에 호출 
            myAuto=setTimeout(hideMenu,500);
            aout=1;
        }

        //큰li a에서는 마우스아웃 됐지만 하위ul에서 마우스오버 할때 하위ul유지 aout=1, ulout=0
        ulList[i].onmouseover=function(){
            ulout=0;
        }

        //큰 li a에서 마우스아웃 되고 하위 ul에서 마우스 아웃 될때 하위 ul 사라짐 aout=1, ulout=1
        ulList[i].onmouseout=function(){
            if(myAuto) clearTimeout(myAuto);
            myAuto=setTimeout(hideMenu,500);
            ulout=1;
        }
    }   
}

if(window.addEventListener){
    window.addEventListener('load',gnb,false); //표준방식 브라우저
}else if(window.attachEvent){
    window.attachEvent('onload',gnb); //IE8.0 이하 사용, 비표준방식
}