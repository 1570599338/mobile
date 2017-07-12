'use strict';

/*! main.js - v0.1.1*/

var app = {
    //apiHost: "http://192.168.0.247:8002/api/",
    //apiHost2: "http://192.168.0.247:8001/wenjuan/",
    //resHost: "http://192.168.0.247:8001/mobile/imageres/",
    //apiHost: "http://192.168.0.201:8002/api/",
    //apiHost2: "http://192.168.0.201:8001/wenjuan/",
    //resHost: "http://192.168.0.201:8001/mobile/imageres/",
    apiHost: "http://101.200.128.84:80/api/api/",
    apiHost2: "http://101.200.128.84:80/wesurvey/",
    resHost: "http://101.200.128.84:80/imageres/"
};

var QUESTION_TYPE_SINGLE = 2;
var QUESTION_TYPE_MULTIPLE = 3;
var QUESTION_TYPE_MATRIX_SINGLE = 4;
var QUESTION_TYPE_MATRIX_MULTIPLE = 5;
var QUESTION_TYPE_BLANK = 6;
var QUESTION_TYPE_MATRIX_SCORE = 7;
var QUESTION_TYPE_BLANK_DROPDOWN = 8;
var QUESTION_TYPE_MULTIPLE_LINE_BLANK = 11;
var QUESTION_TYPE_IMAGE_SINGLE = 12;
var QUESTION_TYPE_IMAGE_MULTIPLE = 13;
var QUESTION_TYPE_UPLOAD_FILE = 14;
var QUESTION_TYPE_SCORE = 50;
var QUESTION_TYPE_ORDER = 60;
var QUESTION_TYPE_DESC = 70;
var QUESTION_TYPE_MULTIPLE_BLANK = 95;
var QUESTION_TYPE_MATRIX_BLANK = 100;

var QUESTION_LAYOUT_VERTICAL = 1;
var QUESTION_LAYOUT_TRANSVERSE = 2;
var QUESTION_LAYOUT_COLUMN = 3;
var QUESTION_LAYOUT_DROPDOWN = 4;
var QUESTION_LAYOUT_FLUID = 1;
var QUESTION_LAYOUT_TABULAR = 2;
var QUESTION_SCORE_TYPE_STAR = 1;
var QUESTION_SCORE_TYPE_SQUARE = 2;

var LOGIC_TYPE_JUMP = 1;
var LOGIC_TYPE_INIT = 2;
var LOGIC_TYPE_CHECK = 3;

var LOGIC_SUBJECT_TYPE_QUESTION = 1;
var LOGIC_SUBJECT_TYPE_OPTION = 2;

var LOGIC_EXP_TYPE_SIMPLE = 1;
var LOGIC_EXP_TYPE_COMPLEX = 2;
var LOGIC_EXP_TYPE_COUNT = 3;
var LOGIC_EXP_TYPE_COUNTIF = 4;
var LOGIC_EXP_TYPE_UNCONDITIONAL = 5;

var OPTION_OPEN_BLANK_TYPE_TEXT = 1;
var OPTION_OPEN_BLANK_TYPE_NUMBER = 2;
var OPTION_OPEN_BLANK_TYPE_ALPHABET = 3;
var OPTION_OPEN_BLANK_TYPE_EMAIL = 4;
var OPTION_OPEN_BLANK_TYPE_PHONENUMBER = 5;
var OPTION_OPEN_BLANK_TYPE_DATE = 6;
var OPTION_OPEN_BLANK_TYPE_TIME = 7;

var REWARD_TYPE_EMONEY = 1;
var REWARD_TYPE_POINT = 2;
var REWARD_TYPE_GIFTCARD = 3;


var ERROR_QUESTION_IS_MANDATORY = '该题是必答题';

// Universal ajax
function ajax2(url, dataType, type, data, onSuccess, onError) {
    $.ajax({
        url: app.apiHost2 + url,
        dataType: dataType,
        type: type,
        data: data,
        beforeSend: function(request) {
            request.setRequestHeader("ticket", "F56F0DB2AD89U464A6CA8EDC728585EC");
        },
        error: function(xhr, status, error) {
            if (onError) onError(error);
        },
        success: function(data, status, xhr) {
            if (onSuccess) onSuccess(data);
        }
    });
}

// Universal ajax
function ajax3(url, dataType, type, data, onSuccess, onError) {
    $.ajax({
        url: url,
        dataType: dataType,
        type: type,
        data: data,
        beforeSend: function(request) {
            //
        },
        error: function(xhr, status, error) {
            if (onError) onError(error);
        },
        success: function(data, status, xhr) {
            if (onSuccess) onSuccess(data);
        }
    });
}

// Asynchronous GET
function ajaxGet(url, onSuccess, onError) {
    $.ajax({
        url: app.apiHost + url,
        dataType: "json",
        contentType: 'application/json',
        type: "get",
        beforeSend: function(request) {
            //
        },
        error: function(xhr, status, error) {
            if (onError) onError(error);
        },
        success: function(data, status, xhr) {
            if (onSuccess) onSuccess(data);
        }
    });
}

// Asynchronous PUT
function ajaxPut(url, data, tag, onSuccess, onError) {
    $.ajax({
        url: apiHost + url,
        dataType: "text",
        contentType: 'application/json',
        type: "put",
        data: JSON.stringify(data),
        beforeSend: function(request) {
            //
        },
        error: function(xhr, status, error) {
            if (onError) onError(error);
        },
        success: function(data, status, xhr) {
            if (onSuccess) onSuccess(data, tag);
        }
    });
}

// Asynchronous POST
function ajaxPost(url, data, tag, onSuccess, onError) {
    $.ajax({
        url: app.apiHost + url,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        type: "post",
        data: JSON.stringify(data),
        beforeSend: function(request) {
            //
        },
        error: function(xhr, status, error) {
            if (onError) onError(error);
        },
        success: function(data, status, xhr) {
            if (onSuccess) onSuccess(data, tag);
        }
    });
}

// Synchronous GET
function syncGet(url, onSuccess, onError) {
    $.ajax({
        url: url,
        dataType: "json",
        contentType: 'application/json',
        type: "get",
        ansync: false,
        beforeSend: function(request) {
            //
        },
        error: function(xhr, status, error) {
            if (onError) onError(error);
        },
        success: function(data, status, xhr) {
            if (onSuccess) onSuccess(data);
        }
    });
}

// Synchronous PUT
function syncPut(url, data, tag, onSuccess, onError) {
    $.ajax({
        url: url,
        dataType: "text",
        contentType: 'application/json',
        type: "put",
        data: JSON.stringify(data),
        ansync: false,
        beforeSend: function(request) {
            //
        },
        error: function(xhr, status, error) {
            if (onError) onError(error);
        },
        success: function(data, status, xhr) {
            if (onSuccess) onSuccess(data, tag);
        }
    });
}

// Synchronous POST
function syncPost(url, data, tag, onSuccess, onError) {
    $.ajax({
        url: url,
        dataType: "json",
        contentType: 'application/json',
        type: "post",
        data: JSON.stringify(data),
        ansync: false,
        beforeSend: function(request) {
            //
        },
        error: function(xhr, status, error) {
            if (onError) onError(error);
        },
        success: function(data, status, xhr) {
            if (onSuccess) onSuccess(data, tag);
        }
    });
}

Array.prototype.unique = function() {
        this.sort();
        var re = [this[0]];
        for (var i = 1; i < this.length; i++) {
            if (this[i] !== re[re.length - 1]) {
                re.push(this[i]);
            }
        }
        return re;
    }
    //选项乱序
function shuffle(array, flag) {
    var cur = (flag == 2) ? (array.length - 1) : array.length;
    var stop = (flag == 1) ? 1 : 0;
    // While there remain elements to shuffle...
    while (cur > stop) {
        // Pick a remaining element...
        var pos = Math.floor(Math.random() * cur);
        cur -= 1;
        // And swap it with the current element.
        if (flag != 1 || pos > 0) {
            var temp = array[cur];
            array[cur] = array[pos];
            array[pos] = temp;
        }
    }
    return array;
}
//题目乱序
function shuffles(inputArr) {
    var valArr = [],
        k = '';
    for (k in inputArr) { // Get key and value arrays
        if (inputArr.hasOwnProperty(k)) {
            valArr.push(inputArr[k]);
        }
    }
    valArr.sort(function() {
        return 0.5 - Math.random();
    });

    return valArr;
}

//
function getParamByName(name, url) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' ').replace('#', ''));
}

//
function isUndefinedNullEmpty(val) {
    if (val == undefined || val == null || val == "")
        return true;
    return false;
}

//
function autoTextArea(elem, extra, maxHeight) {
    extra = extra || 0;
    var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
        isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
        addEvent = function(type, callback) {
            elem.addEventListener ?
                elem.addEventListener(type, callback, false) :
                elem.attachEvent('on' + type, callback);
        },
        getStyle = elem.currentStyle ? function(name) {
            var val = elem.currentStyle[name];
            if (name === 'height' && val.search(/px/i) !== 1) {
                var rect = elem.getBoundingClientRect();
                return rect.bottom - rect.top - parseFloat(getStyle('paddingTop')) - parseFloat(getStyle('paddingBottom')) + 'px';
            };
            return val;
        } : function(name) {
            return getComputedStyle(elem, null)[name];
        },
        minHeight = parseFloat(getStyle('height'));
    //
    elem.style.resize = 'none';
    //
    var change = function() {
        var scrollTop, height, padding = 0,
            style = elem.style;
        if (elem._length === elem.value.length)
            return;
        elem._length = elem.value.length;
        if (!isFirefox && !isOpera) {
            padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
        };
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        elem.style.height = minHeight + 'px';
        if (elem.scrollHeight > minHeight) {
            if (maxHeight && elem.scrollHeight > maxHeight) {
                height = maxHeight - padding;
                style.overflowY = 'auto';
            } else {
                height = elem.scrollHeight - padding;
                style.overflowY = 'hidden';
            };
            style.height = height + extra + 'px';
            scrollTop += parseInt(style.height) - elem.currHeight;
            document.body.scrollTop = scrollTop;
            document.documentElement.scrollTop = scrollTop;
            elem.currHeight = parseInt(style.height);
        };
    };
    //
    addEvent('propertychange', change);
    addEvent('input', change);
    addEvent('focus', change);
    //
    change();
};

//分享
var formData = {
    requestUrl: location.href
}
ajax2('sysmng.initTemplate.do?subSys=wesurvey&tplID=141', 'json', 'get', formData, function(data) {
   console.log("微信配置参数");
  // wx.config(data); //获得微信配置参数
   console.log("微信配置参数");
}, function(error) {});

function shareFun(href, memberid, context, templateid) {

    //
    var shareSuccess = function(memberid, context) {
        ajax2(app.apiHost2 + 'wesurvey.share.do?memberID=' + memberid + '&templateID=' + templateid, 'json', 'get', null, function(data) {
            //第一次分享（有奖励）
            if (data.isShare == 'true') {
                var rewardType = '';
                if (data.rewardType == 1) {
                    rewardType = '礼金';
                } else if (data.rewardType == 2) {
                    rewardType = '积分';
                }
                $('.public-mask', context).css('display', 'block');
                $('.public-mask .reward-type', context).html(rewardType);
                $('.public-mask .reward-amount', context).html(data.rewardAmount);
                $('.close', context).on('click', function() {
                    $('.public-mask', context).css('display', 'none');
                    // window.location.href = href;
                });
            }
            /*else{
                            window.location.href = href;
                        }*/
        }, function() {});
    }
    wx.ready(function() {
        //微信分享

        wx.onMenuShareAppMessage({
            title: '汽车调研', // 分享标题
            desc: '欢迎参加汽车调研，期待您的加入', // 分享描述
            link: href, // 分享链接
            imgUrl: '', // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
                // 用户确认分享后执行的回调函数
                shareSuccess(memberid, context);
            },
            cancel: function() {}
        });

        //QQ分享
        wx.onMenuShareQQ({
            title: '汽车调研', // 分享标题
            desc: '欢迎参加汽车调研，期待您的加入', // 分享描述
            link: href, // 分享链接
            imgUrl: '', // 分享图标
            success: function() {
                // 用户确认分享后执行的回调函数
                shareSuccess(memberid, context);
            },
            cancel: function() {}
        });

        //朋友圈分享
        wx.onMenuShareTimeline({
            title: '汽车调研', // 分享标题
            desc: '欢迎参加汽车调研，期待您的加入', // 分享描述
            link: href, // 分享链接
            imgUrl: '', // 分享图标
            success: function() {
                // 用户确认分享后执行的回调函数
                shareSuccess(memberid, context);
            },
            cancel: function() {}
        });

        //新浪微博分享
        wx.onMenuShareWeibo({
            title: '汽车调研', // 分享标题
            desc: '欢迎参加汽车调研，期待您的加入', // 分享描述
            link: href, // 分享链接
            imgUrl: '', // 分享图标
            success: function() {
                // 用户确认分享后执行的回调函数
                shareSuccess(memberid, context);
            },
            cancel: function() {}
        });

        //QQ空间
        wx.onMenuShareQZone({
            title: '汽车调研', // 分享标题
            desc: '欢迎参加汽车调研，期待您的加入', // 分享描述
            link: href, // 分享链接
            imgUrl: '', // 分享图标
            success: function() {
                // 用户确认分享后执行的回调函数
                shareSuccess(memberid, context);
            },
            cancel: function() {}
        });
    });
};
var hideShar = function() {
    function onBridgeReady() {
        wx.hideOptionMenu();
    }

    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    } else {
        onBridgeReady();
    }
}

//返回到顶部
$.fn.scrollTo = function(options) {
    var defaults = {
        toT: 0, //滚动目标位置
        durTime: 500, //过渡动画时间
        delay: 30, //定时器时间
        callback: null //回调函数
    };
    var opts = $.extend(defaults, options),
        timer = null,
        _this = this,
        curTop = _this.scrollTop(), //滚动条当前的位置
        subTop = opts.toT - curTop, //滚动条目标位置和当前位置的差值
        index = 0,
        dur = Math.round(opts.durTime / opts.delay),
        smoothScroll = function(t) {
            index++;
            var per = Math.round(subTop / dur);
            if (index >= dur) {
                _this.scrollTop(t);
                window.clearInterval(timer);
                if (opts.callback && typeof opts.callback == 'function') {
                    opts.callback();
                }
                return;
            } else {
                _this.scrollTop(curTop + index * per);
            }
        };
    timer = window.setInterval(function() {
        smoothScroll(opts.toT);
    }, opts.delay);
    return _this;
};