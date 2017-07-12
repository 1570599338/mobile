/**
 * Created by user on 2016/4/17.
 */
window.onload=function(){
    scrollPic();
    //tab();
}
/*tab切换*/
/*var tab=function(){
    var as=document.getElementsByTagName('footer')[0].getElementsByTagName('a');
    for(var i=0;i<as.length;i++){
        as[i].onclick=function(i){
            return function(){
                for(var j=0;j<as.length;j++){
                    as[j].className='';
                }
                as[i].className="active";
            }
        }(i);
    }
}*/
/*轮播图*/
var scrollPic=function(){
    var bannerDom=document.getElementsByClassName('swipper')[0];
    var imageBox=bannerDom.getElementsByTagName('ul')[0];
    var w=bannerDom.offsetWidth;
    var imgs=imageBox.children;

    /*创建存放小圆点的UL*/
    var pointBox=document.createElement('ul');
    bannerDom.appendChild(pointBox);
    var pointBox=bannerDom.getElementsByTagName('ul')[1];
    /*计算图下面的小点*/
    for(var i=0;i<imgs.length-2;i++){
        var lis=document.createElement('li');
        pointBox.appendChild(lis);
    }
    var points = pointBox.getElementsByTagName("li");
    points[0].setAttribute('class','now');
    var PmarginLeft=84-(points.length*5);
    pointBox.style.marginLeft=PmarginLeft+"%";
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
        if(index>= imgs.length-1){//4
            index = 1;
            removeTransition();
            transform();
        }else if(index<= 0){
            index = imgs.length-2;//3
            removeTransition();
            transform();
        }
        setPoint();
    });
    imageBox.addEventListener('webkitTransitionEnd',function(){
        if(index>= imgs.length-1){
            index = 1;
            removeTransition();
            transform();
        }else if(index<= 0){
            index = imgs.length-2;
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