/**
 * Created by user on 2016/4/28.
 */
window.onload=function(){
    /*var data={
        list:[
            {
                title:'卓思简介',
                content:'卓思(MaxInsight)成立于2009年，一直专注于汽车市场研究，在大数据和移动互联网调查上拥有核心优势，已成为业内最领先的市场研究和数据挖掘供应商，位列汽车市场研究领域NO.1。同时，我们已经启动IPO，期待更多新鲜血液加入，共同开创更大发展。我们的客户涵盖几乎所有的国内外主流汽车品牌客户，如宝马中国、奔驰中国、一汽大众-奥迪、大众中国、一汽丰田、东风标致、日产中国（Infiniti）等，他们在持续使用卓思（MaxInsight）关于产品定位、定价、品牌策略、渠道服务质量监测及提升、经销商管理、数据挖掘等方面的服务与解决方案。'
            },{
                title:'汽车调查',
                content:'汽车调查是卓思大数据存储的一项调查工作，调查公司及个人对各种汽车的各项指标反馈的调查存储，以定向指导未来的研发设计及商业活动。卓思专注于汽车行业，以市场研究业务为主，并提供数据和和渠道咨询服务。卓思在产品生命周期各阶段均有丰富的项目经验，能够为客户提供全面的市场研究服务'
            }
        ]
    }

    var html=template('abContent',data);
    document.getElementById('content').innerHTML=html;*/
    /*展开与收起*/
    var seeMore=document.getElementsByClassName('see-more');
    var moreBox=document.getElementsByClassName('more-box');
    for(var i=0;i<seeMore.length;i++){
        seeMore[i].index=i;
        seeMore[i].onclick=function(e){
            e.preventDefault();
            if(this.innerHTML=='查看更多'){
                this.innerText='收起';
                moreBox[this.index].style.display='block';
                console.log('if:'+this.innerHTML)
            }else{
                this.innerHTML='查看更多';
                moreBox[this.index].style.display='none';
            }

        }
    }
}
