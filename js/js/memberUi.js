//tab切换样式函数
function auditingCss($this) {
    $this.addClass("active").siblings().removeClass('active');
    $this.css("left", "4.8%");
    $('.reward-convert').css("left", "8%");
    $('.reward-draw').css("left", "71.5%");
    $('.reward-balance-box').css("background-image", "url(img/point/money_background2.fw.png)");
    $('.auditing-list').show().siblings().hide();
}

function convertCss($this) {
    $this.addClass("active").siblings().removeClass('active');
    $this.css("left", "0");
    $('.reward-auditing').css("left", "7%");
    $('.reward-draw').css("left", "71.5%");
    $('.reward-balance-box').css("background-image", "url(img/point/money_background1.fw.png)");
    $('.point-convert-list').show().siblings().hide();
    $('.conver-list').show().siblings().hide();
}

function drawCss($this) {
    $this.addClass("active").siblings().removeClass('active');
    $this.css("left", "62.5%");
    $('.reward-auditing').css("left", "7%");
    $('.reward-convert').css("left", "-8%");
    $('.reward-balance-box').css("background-image", "url(img/point/money_background.fw.png)");
    $('.draw-list').show().siblings().hide();
}