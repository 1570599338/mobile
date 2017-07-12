/**
 * Created by user on 2016/4/21.
 */
window.onload=function(){
    check_tip();
}
var check_tip=function(){
    var tips=document.getElementsByClassName('top-tip');
    for(var i=0;i<tips.length;i++){
        tips[i].onclick=function(){
            for(var j=0;j<tips.length;j++){
                tips[j].className='top-tip';
            }
            this.className='top-tip active';
        }
    }
}