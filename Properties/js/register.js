/**
 * Created by user on 2016/4/16.
 */
window.onload=function(){
    countDown();
    //validate();
}
/*点击获取验证码*/
var countDown=function(){
    var validate=document.getElementsByClassName('validate')[0];
    validate.onclick=function(){
        time(this);
    }
    var wait=10;
    function time(o){
        if(wait==0){
            o.removeAttribute('disabled');
            o.style.color="#FE9121";
            o.value='点击获取验证码';
            wait=10;
        }else{
            o.style.color="#999";
            o.setAttribute('disabled',true);
            o.value='已发送('+wait+"/50s)";
            wait--;
            setTimeout(function(){
                time(o)
            },1000);
        }
    }
}
