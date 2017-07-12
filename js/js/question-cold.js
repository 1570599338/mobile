/**
 * Created by user on 2016/4/19.
 */
window.onload=function(){
    next_question();
    check_img();
}
var next_question=function(){
    var next=document.querySelector('.next');
    var questions=document.getElementsByClassName('questions-box');
    var line=document.getElementsByClassName('line')[0];
    var tip=document.getElementsByClassName('tip')[0];
    var complete=document.getElementById('complete');
    var mask=document.getElementsByClassName('mask')[0];

    complete.innerHTML=0+"/"+questions.length;
    questions[0].style.display='block';
    var iNow=0;
    next.onclick=function(){
        iNow++;
        if(iNow==questions.length){
            next.disabled=true;
        }
        if(iNow==questions.length-1){
            next.innerHTML='完成';
        }
        if(!next.disabled){
            topic_tab();
            bar_scroll(iNow,questions.length);
        }

    }
    function topic_tab(){
        for(var i=0;i<questions.length;i++){
            questions[i].style.display='none';
        }
        questions[iNow].style.display='block';
    }
    function bar_scroll(now,total){
        var lineLength=line.offsetWidth;
        var tep=lineLength/total;
        console.log(now);
        complete.innerHTML=now+"/"+total;
        tip.style.left=now*tep+"px";
        mask.style.width=now*tep+'px';
    }
}
var check_img=function(){
    var imgCircle=document.getElementsByClassName('img-circle');
    var imgMask=document.getElementsByClassName('img-mask');
    console.log("img"+imgMask.length);
    var checkedCircle=document.getElementsByClassName('checked-circle');
    console.log("ci"+checkedCircle.length);
    for(var i=0;i<imgCircle.length;i++){
        imgCircle[i].index=i;

        imgCircle[i].onclick=function(){
            for(var j=0;j<imgCircle.length;j++){
                imgMask[j].style.display='none';
                checkedCircle[j].style.display='none';
            }
            imgMask[this.index].style.display='block';
            checkedCircle[this.index].style.display='block';
        }
    }
}