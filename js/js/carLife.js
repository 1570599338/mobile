/**
 * Created by user on 2016/4/21.
 */
window.onload=function(){
    scrollPic();
}
var scrollPic=function(){
    var bannerDom=document.getElementsByClassName('swipper')[0];
    var imageBox=bannerDom.getElementsByTagName('ul')[0];
    var w=bannerDom.offsetWidth;
    var pointBox=bannerDom.getElementsByTagName('ul')[1];
    var points = pointBox.getElementsByTagName("li");
    /*加上过渡*/
    var addTransition = function(){
        imageBox.style.webkitTransition = "all .2s ease 0s";
        imageBox.style.transition = "all .2s ease 0s";
    };
    /*去除过渡*/
    var removeTransition = function(){
        imageBox.style.webkitTransition = "none";
        imageBox.style.transition = "none";
    };
    /*改变距离*/
    var transform = function(){
        imageBox.style.webkitTransform = "translateX("+(-index*w + "px")+")";
        imageBox.style.transform = "translateX("+(-index*w+ "px")+")";
    };
    /*设置点*/
    var setPoint = function(){
        for(var i = 0; i < points.length ; i++){
            points[i].className = " ";
        }
        points[index-1].className = "now";
    };

    /*定时轮播*/
    var index = 1;
    var intervalTimer;//计时器
    intervalTimer = setInterval(function(){
        index ++;
        addTransition();
        transform();
    },3000);


    /*过渡结束后的处理事件*/
    imageBox.addEventListener('transitionEnd',function(){
        if(index>= 4){
            index = 1;
            removeTransition();
            transform();
        }else if(index<= 0){
            index = 3;
            removeTransition();
            transform();
        }
        setPoint();
    });
    imageBox.addEventListener('webkitTransitionEnd',function(){
        if(index>= 4){
            index = 1;
            removeTransition();
            transform();
        }else if(index<= 0){
            index = 3;
            removeTransition();
            transform();
        }
        setPoint();
    });

    /*移动端事件*/
    var X = 0,moveX = 0,endX = 0;
    imageBox.addEventListener('touchstart',function(e){
        console.log("触摸开始");
        X = e.touches[0].clientX;
        console.log(e);
    });
    imageBox.addEventListener('touchmove',function(e){
        //清除默认滚动事件
        // e.preventDefault();
        //console.log("触摸滑动");
        endX = e.touches[0].clientX;
        moveX = X - endX;
        //console.log(moveX);
        //清除计时器
        if(intervalTimer){
            clearInterval(intervalTimer);
        }
        removeTransition();
        imageBox.style.webkitTransform = "translateX("+(-(index*w+ moveX) + "px")+")";
        imageBox.style.transform = "translateX("+(-(index*w+ moveX) + "px")+")";
    });
    imageBox.addEventListener('touchend',function(e){
        //console.log("触摸结束");
        //取绝对值 比 宽度的三分之一大小
        if(Math.abs(moveX) > w/3 && endX!=0 ){
            if(moveX>0){
                index ++ ;
            }else{
                index -- ;
            }
            addTransition();
            transform();
        }else{
            addTransition();
            transform();
        }
        X = 0;
        endX = 0;
        //清除计时器
        if(intervalTimer){
            clearInterval(intervalTimer);
        }
        intervalTimer = setInterval(function(){
            index ++;
            addTransition();
            transform();
        },3000);
    });
}