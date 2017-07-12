//tab切换样式函数
function auditingCss($this) {
    $this.addClass("active").siblings().removeClass('active');
    $this.css("left", "4.8%");
    $('.reward-convert').css("left", "8%");
    $('.box-child').css({
        "left": "-0.8%",
        "margin": "none",
        "right": ""
    });
    $('.reward-draw').css("left", "71.5%");
    // $('.reward-balance-box').css("background-image", "url(img/point/money_background2.fw.png)");
    $('.auditing-list').show().siblings().hide();
}

function convertCss($this) {
    $this.addClass("active").siblings().removeClass('active');
    $this.css("left", "0");
    $('.reward-auditing').css("left", "6.5%");
    $('.reward-draw').css("left", "71.5%");
    $('.box-child').css({
        "left": "0",
        "right": "0",
        "margin": "0 auto"
    });
    $('.point-convert-list').show().siblings().hide();
    $('.conver-list').show().siblings().hide();
}

function drawCss($this) {
    $this.addClass("active").siblings().removeClass('active');
    $this.css("left", "62.5%");
    $('.reward-auditing').css("left", "7%");
    $('.reward-convert').css("left", "-8%");
    $('.box-child').css({
        "right": "0",
        "left": "56.8%",
        "margin": "none"
    });
    // $('.reward-balance-box').css("background-image", "url(img/point/money_background.fw.png)");
    $('.draw-list').show().siblings().hide();
}