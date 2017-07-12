/**
 * Created by user on 2016/4/18.
 */
window.onload = function () {
}

//创建答案
var createAnswers = function (question, context) {
    if (question.type == QUESTION_TYPE_SINGLE ||
        question.type == QUESTION_TYPE_MULTIPLE) {
        var answers = [];
        $('label.checked', context).each(function (i, e) {
            var code = $(this).attr('code');
            answers.push({
                id: -1,
                sampleID: sample.id,
                questionID: question.id,
                optionID: null,
                code: code,
                text: null
            });
        });
        return answers;
    } else if (question.type == QUESTION_TYPE_BLANK ||
               question.type == QUESTION_TYPE_MULTIPLE_BLANK ||
               question.type == QUESTION_TYPE_MULTIPLE_LINE_BLANK) {
        var answers = [];
        $('.blank', context).each(function (i, e) {
            var text = $(this).val();
            var code = $(this).attr('code');
            answers.push({
                id: -1,
                sampleID: sample.id,
                questionID: question.id,
                optionID: null,
                code: code,
                text: text
            });
        });
        return answers;
    } else if (question.type == QUESTION_TYPE_IMAGE_SINGLE ||
               question.type == QUESTION_TYPE_IMAGE_MULTIPLE) {
        var answers = [];
        $('li.checked', context).each(function (i, e) {
            var code = $(this).attr('code');
            answers.push({
                id: -1,
                sampleID: sample.id,
                questionID: question.id,
                optionID: null,
                code: code,
                text: null
            });
        });
        return answers;
    } else if (question.type == QUESTION_TYPE_MATRIX_SINGLE) {
        var answers = [];
        if (question.layout == QUESTION_LAYOUT_FLUID) {
            $('.matrix').each(function (i, e) {
                var _this = this;
                var optionid = $(_this).attr('oid');
                $('label.checked', $(_this)).each(function (i, e) {
                    var _that = this;
                    answers.push({
                        id: -1,
                        sampleID: sample.id,
                        questionID: question.id,
                        optionID: optionid,
                        code: $(_that).attr('code'),
                        text: null
                    });
                });
            });
        } else {
            $('.matrix-options').each(function (i, e) {
                var _this = this;
                var optionid = $(_this).attr('oid');
                $('.active', $(_this)).each(function (i, e) {
                    var _that = this;
                    answers.push({
                        id: -1,
                        sampleID: sample.id,
                        questionID: question.id,
                        optionID: optionid,
                        code: $(_that).attr('code'),
                        text: null
                    });
                });
            });
        }
        return answers;
    } else if (question.type == QUESTION_TYPE_MATRIX_MULTIPLE) {
        var answers = [];
        if (question.matrixPivot == true) {
            if (question.layout == QUESTION_LAYOUT_FLUID) {
                $('.matrix').each(function (i, e) { // col option
                    var _this = this;
                    var code = $(_this).attr('code'); 
                    $('label.checked', $(_this)).each(function (i, e) { // row option
                        var _that = this;
                        var optionid = $(_that).attr('oid');
                        answers.push({
                            id: -1,
                            sampleID: sample.id,
                            questionID: question.id,
                            optionID: optionid,
                            code: code,
                            text: null
                        });
                    });
                });
            } else {
                $('.matrix-options').each(function (i, e) { // col option
                    var _this = this;
                    var code = $(_this).attr('code');
                    $('.active', $(_this)).each(function (i, e) { // row option
                        var _that = this;
                        var optionid = $(_that).attr('oid');
                        answers.push({
                            id: -1,
                            sampleID: sample.id,
                            questionID: question.id,
                            optionID: optionid,
                            code: code,
                            text: null
                        });
                    });
                });
            }
        } else {
            if (question.layout == QUESTION_LAYOUT_FLUID) {
                $('.matrix').each(function (i, e) { // row option
                    var _this = this;
                    var optionid = $(_this).attr('oid');
                    $('label.checked', $(_this)).each(function (i, e) { // col option
                        var _that = this;
                        answers.push({
                            id: -1,
                            sampleID: sample.id,
                            questionID: question.id,
                            optionID: optionid,
                            code: $(_that).attr('code'),
                            text: null
                        });
                    });
                });
            } else {
                $('.matrix-options').each(function (i, e) { // row option
                    var _this = this;
                    var optionid = $(_this).attr('oid');
                    $('.active', $(_this)).each(function (i, e) { // col option
                        var _that = this;
                        answers.push({
                            id: -1,
                            sampleID: sample.id,
                            questionID: question.id,
                            optionID: optionid,
                            code: $(_that).attr('code'),
                            text: null
                        });
                    });
                });
            }
        }
        return answers;
    } else if (question.type == QUESTION_TYPE_SCORE) {
        var answers = [];
        $('.raty', context).each(function (i, e) {
            var code = $(this).attr('code');
            answers.push({
                id: -1,
                sampleID: sample.id,
                questionID: question.id,
                optionID: null,
                code: code,
                text: null
            });
        });
        return answers;
    } else if (question.type == QUESTION_TYPE_MATRIX_SCORE) {
        var answers = [];
        if (question.layout == QUESTION_LAYOUT_FLUID) {
            $('.raty', context).each(function (i, e) {
                var code = $(this).attr('code');
                var optionid = $(this).attr('oid');
                answers.push({
                    id: -1,
                    sampleID: sample.id,
                    questionID: question.id,
                    optionID: optionid,
                    code: code,
                    text: null
                });
            });
        } else {
            $('.raty', context).each(function (i, e) {
                var code = $(this).attr('code');
                var optionid = $(this).attr('oid');
                answers.push({
                    id: -1,
                    sampleID: sample.id,
                    questionID: question.id,
                    optionID: optionid,
                    code: code,
                    text: null
                });
            });
        }        
        return answers;
    }
}

//生成html
var generateHtml = function (question, step) {
    //template.config('escape', 'true');
    //template.config('escape', true);
    template.config('escape');
    question.index = step;
    var html = '';
    if (question.type == QUESTION_TYPE_SINGLE) {
        html = template('template_single', question);
    } else if (question.type == QUESTION_TYPE_MULTIPLE) {
        html = template('template_multiple', question);
    } else if (question.type == QUESTION_TYPE_SCORE) {
        html = template('template_score', question);
    } else if (question.type == QUESTION_TYPE_BLANK) {
        html = template('template_blank', question);
    } else if (question.type == QUESTION_TYPE_MULTIPLE_LINE_BLANK) {
        html = template('template_multiple_line_blank', question);
    } else if (question.type == QUESTION_TYPE_IMAGE_SINGLE) {
        html = template('template_single_img', question);
    } else if (question.type == QUESTION_TYPE_IMAGE_MULTIPLE) {
        html = template('template_multiple_img', question);
    } else if (question.type == QUESTION_TYPE_MULTIPLE_BLANK) {
        html = template('template_multiple_blank', question);
    } else if (question.type == QUESTION_TYPE_MATRIX_SCORE) {
        //拆分options，row为行选项，cols为列选项
        question.rows = [], question.cols = [];
        for (var i = 0; i < question.options.length; ++i)
            question.options[i].orientation == 1 ? question.rows.push(question.options[i]) : question.cols.push(question.options[i]);
        //行随机排列
        if (question.rowDisordered == true)
            question.rows = shuffle(question.rows, question.rowLastFixed == true ? 2 : 0);
        //列随机排列
        //if (question.colDisordered == true)
        //    question.cols = shuffle(question.cols, question.colLastFixed == true ? 2 : 0);
        //显示方式，矩阵/展开
        if (question.layout == QUESTION_LAYOUT_TABULAR)
            html = template('template_matrix_score_tabular', question);
        else
            html = template('template_matrix_score_fluid', question);
    } else if (question.type == QUESTION_TYPE_MATRIX_SINGLE) {
        //拆分options，row为行选项，cols为列选项
        question.rows = [], question.cols = [];
        for (var i = 0; i < question.options.length; ++i)
            question.options[i].orientation == 1 ? question.rows.push(question.options[i]) : question.cols.push(question.options[i]);
        //行随机排列
        if (question.rowDisordered == true)
            question.rows = shuffle(question.rows, question.rowLastFixed == true ? 2 : 0);
        //列随机排列
        if (question.colDisordered == true)
            question.cols = shuffle(question.cols, question.colLastFixed == true ? 2 : 0);
        //显示方式，矩阵/展开
        if (question.layout == QUESTION_LAYOUT_TABULAR)
            html = template('template_matrix_single_tabular', question);
        else
            html = template('template_matrix_single_fluid', question);
    } else if (question.type == QUESTION_TYPE_MATRIX_MULTIPLE) {
        //拆分options，row为行选项，cols为列选项
        question.rows = [], question.cols = [];
        for (var i = 0; i < question.options.length; ++i)
            question.options[i].orientation == 1 ? question.rows.push(question.options[i]) : question.cols.push(question.options[i]);
        //行随机排列
        if (question.rowDisordered == true)
            question.rows = shuffle(question.rows, question.rowLastFixed == true ? 2 : 0);
        //列随机排列
        if (question.colDisordered == true)
            question.cols = shuffle(question.cols, question.colLastFixed == true ? 2 : 0);
        //矩阵行列交换
        if (question.matrixPivot == true) {
            var temp = question.rows;
            question.rows = question.cols;
            question.cols = temp;
        }
        //显示方式，矩阵/展开
        if (question.layout == QUESTION_LAYOUT_TABULAR)
            html = template('template_matrix_multiple_tabular', question);
        else
            html = template('template_matrix_multiple_fluid', question);
    }
    return html;
}

//绑定事件
var bindEvents = function (context) {
    //单选题/多选题，小汽车动画效果
    $('.weui_check_label', context).off(type).on(type, function () {
        var _this = $(this);
        if (_this.find('input').hasClass('radio')) {//单选
            //console.log(_this.attr('for') + ', ' + _this.hasClass('checked'));
            //选中状态
            _this.addClass('checked');
            _this.siblings().removeClass('checked');
            //隐藏汽车与对勾
            _this.siblings().find('.car').animate({ 'right': $(window).width() }, 300);
            _this.siblings().find('.hook').animate({ 'left': $(window).width() }, 300);
            //显示汽车与对勾，PC与移动端汽车停放位置不同
            if (type == 'tap') {//移动端
                _this.find('.car').animate({ 'right': '5%' }, 800);
                _this.find('.hook').animate({ 'left': '85%' }, 800);
            } else if (type == 'click') {//PC
                _this.find('.car').animate({ 'right': '5.5%' }, 800);
                _this.find('.hook').animate({ 'left': '92%' }, 800);
            }
            //设置边框颜色
            setBorders(_this.parents('.weui_cells'));
            //显示/隐藏开放选项
            $('.open', context).hide();
            $('.open', _this).show();
            //去掉错误提示框
            $('.error-tip', context).remove();
        } else if (_this.find('input').hasClass('checkbox')) {//多选
            //console.log(_this.attr('for') + ', ' + _this.hasClass('checked'));
            if (_this.hasClass('checked')) {
                //选中状态
                _this.removeClass('checked');
                //隐藏汽车与对勾
                _this.find('.car').animate({ 'right': $(window).width() }, 800);
                _this.find('.hook').animate({ 'left': $(window).width() }, 800);
                //隐藏开放选项
                $('.open', _this).hide();
            } else {
                //选中状态
                _this.addClass('checked');
                //显示汽车与对勾，PC与移动端汽车停放位置不同
                if (type == 'tap') {
                    _this.find('.car').animate({ 'right': '5%' }, 800);
                    _this.find('.hook').animate({ 'left': '85%' }, 800);
                } else if (type == 'click') {
                    _this.find('.car').animate({ 'right': '5.5%' }, 800);
                    _this.find('.hook').animate({ 'left': '92%' }, 800);
                }
                //显示开放选项
                $('.open', _this).show();
                $('.open', _this).on(type,function(){
                    return false;//阻止冒泡
                });
            }
            //设置边框颜色
            setBorders(_this.parents('.weui_cells'));
        }
    });
    //图片单选题选择事件
    $('.img-single-box li').off(type).on(type, function () {
        if ($(this).hasClass('checked') == false) {
            $(this).siblings('li').removeClass('checked');
            $(this).siblings('li').children().hide();
            $(this).addClass('checked');
            $(this).children('span, i').show();
        }
    });
    //图片多选题选择事件
    $('.img-multiple-box li').off(type).on(type, function () {
        if ($(this).hasClass('checked')) {
            $(this).removeClass('checked');
            $(this).children('span, i').hide();
        } else {
            $(this).addClass('checked');
            $(this).children('span, i').show();
        }
    });
    //矩阵单选－方格样式
    $('.matrix-options-single .matrix-option').off(type).on(type, function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    //矩阵多选－方式样式
    $('.matrix-options-multiple .matrix-option').off(type).on(type, function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
    //开放选项自动缩放
    $('.open-option').off(type).on(type, function () {
        autoTextArea($(this)[0]);
    });
    //多项填空选中
    $('.multiple_blank_group input').on('blur', function() {
        $(this).siblings('.q-title').children('.error-tip',context).hide();
    });
};

//附加数据
var attachData = function (question, context) {
    if (question.type == QUESTION_TYPE_SINGLE ||
        question.type == QUESTION_TYPE_MULTIPLE) {
        $('label', context).each(function (i, e) {
            $(this).data('model', optionOf($(this).attr('oid'), question.options));
        });
    } else if (question.type == QUESTION_TYPE_SCORE) {
        //
    } else if (question.type == QUESTION_TYPE_BLANK ||
               question.type == QUESTION_TYPE_MULTIPLE_LINE_BLANK ||
               question.type == QUESTION_TYPE_MULTIPLE_BLANK) {
        $('.blank', context).each(function (i, e) {
            $(this).data('model', optionOf($(this).attr('oid'), question.options));
        });
    } else if (question.type == QUESTION_TYPE_IMAGE_SINGLE ||
               question.type == QUESTION_TYPE_IMAGE_MULTIPLE) {
        $('li', context).each(function (i, e) {
            $(this).data('model', optionOf($(this).attr('oid'), question.options));
        });
    } else if (question.type == QUESTION_TYPE_MATRIX_SCORE) {
        $('.raty', context).each(function (i, e) {
            $(this).data('model', optionOf($(this).attr('oid'), question.rows));
        });
    } else if (question.type == QUESTION_TYPE_MATRIX_SINGLE ||
               question.type == QUESTION_TYPE_MATRIX_MULTIPLE) {
        $('.matrix', context).each(function (i, e) {
            var that = $(this);
            that.data('model', optionOf(that.attr('oid'), question.rows));
            $('label', that).each(function (i, e) {
                var mine = $(this);
                mine.data('model', optionOf(mine.attr('oid'), question.cols));
            });
        });
    }
}

//设置边框
function setBorders(context) {
    var count = $('.weui_check_label', context).length;
    var prevChecked = undefined;
    $('.weui_check_label', context).each(function (i) {
        var _this = $(this);
        var selfChecked = _this.hasClass('checked');
        //第1个选项
        if (i == 0) {
            if (_this.hasClass('checked')) {
                _this.css('border-top', '1px solid #FEBC21');
                _this.css('border-right', '1px solid #FEBC21');
                //_this.css('border-bottom', '1px solid #FEBC21');
                _this.css('border-left', '1px solid #FEBC21');
            } else {
                _this.css('border-top', '1px solid #D9D9D9');
                _this.css('border-right', '1px solid #D9D9D9');
                //_this.css('border-bottom', '1px solid #D9D9D9');
                _this.css('border-left', '1px solid #D9D9D9');
            }
        }
            //中间选项
        else if (i < count - 1) {
            if (prevChecked == true || selfChecked == true) {
                _this.css('border-top', '1px solid #FEBC21');
            } else {
                _this.css('border-top', '1px solid #D9D9D9');
            }
            if (_this.hasClass('checked')) {
                _this.css('border-right', '1px solid #FEBC21');
                //_this.css('border-bottom', '1px solid #FEBC21');
                _this.css('border-left', '1px solid #FEBC21');
            } else {
                _this.css('border-right', '1px solid #D9D9D9');
                //_this.css('border-bottom', '1px solid #D9D9D9');
                _this.css('border-left', '1px solid #D9D9D9');
            }
        }
            //最后一个选项
        else {
            if (prevChecked == true || selfChecked == true) {
                _this.css('border-top', '1px solid #FEBC21');
            } else {
                _this.css('border-top', '1px solid #D9D9D9');
            }
            if (_this.hasClass('checked')) {
                _this.css('border-right', '1px solid #FEBC21');
                _this.css('border-bottom', '1px solid #FEBC21');
                _this.css('border-left', '1px solid #FEBC21');
            } else {
                _this.css('border-right', '1px solid #D9D9D9');
                _this.css('border-bottom', '1px solid #D9D9D9');
                _this.css('border-left', '1px solid #D9D9D9');
            }
        }
        //
        prevChecked = selfChecked;
    })
}

//进度条
function setProgress(pos, total) {
    var progress = ($('.progress').width() - 30) / total;
    $('.bar').animate({ 'left': pos * progress }, 1000);
    $('.mask').animate({ 'width': pos * progress + 30 }, 1000);
}

//获取题目类型名称
var getTypeName = function (type) {
    if (type == QUESTION_TYPE_SINGLE)
        return '单选题';
    else if (type == QUESTION_TYPE_MULTIPLE)
        return '多选题';
    else if (type == QUESTION_TYPE_MATRIX_SINGLE)
        return '矩阵单选题';
    else if (type == QUESTION_TYPE_MATRIX_MULTIPLE)
        return '矩阵多选题';
    else if (type == QUESTION_TYPE_BLANK)
        return '填空题';
    else if (type == QUESTION_TYPE_MATRIX_SCORE)
        return '矩阵打分题';
    else if (type == QUESTION_TYPE_BLANK_DROPDOWN)
        return '下拉题';
    else if (type == QUESTION_TYPE_MULTIPLE_LINE_BLANK)
        return '多行填空题';
    else if (type == QUESTION_TYPE_IMAGE_SINGLE)
        return '图片单选题';
    else if (type == QUESTION_TYPE_IMAGE_MULTIPLE)
        return '图片多选题';
    else if (type == QUESTION_TYPE_UPLOAD_FILE)
        return '上传题';
    else if (type == QUESTION_TYPE_SCORE)
        return '打分题';
    else if (type == QUESTION_TYPE_ORDER)
        return '排序题';
    else if (type == QUESTION_TYPE_DESC)
        return '描述题';
    else if (type == QUESTION_TYPE_MULTIPLE_BLANK)
        return '多项填空';
    else if (type == QUESTION_TYPE_MATRIX_BLANK)
        return '矩阵填空';
    else
        return '未知题型';
};

//下一题
var next = function () {
    //第一道题
    if (_index < 0) {
        ++_index; ++_step;
        gotoNext(questions[_index], _index, _step);
    }
    //其它题
    else if (_index < questions.length) {
        var question = questions[_index];
        if (sample == null) {
            sample = {
                id: -1,
                templateID: templateid,
                memberID: memberid,
            };
            ajaxPost(app.apiHost + 'sample/create', sample, null, function (data) {
                sample.id = data.objs[0].id;
                var answers = createAnswers(question, '.options');
                ajaxPost(app.apiHost + 'answer/create', answers, null, function (data) {
                    ajaxGet(app.apiHost + 'logic/search?type=' + LOGIC_TYPE_JUMP + '&subjecttype=' + LOGIC_SUBJECT_TYPE_QUESTION + '&contextid=' + question.id, function (data) {
                        _index = evalJumpLogic(question, answers, data.objs, questions, _index);
                        if (_index < questions.length) {
                            ++_step;
                            evalReference(question, answers, questions);
                            gotoNext(questions[_index], _index, _step);
                        } else {
                            finish();
                        }
                    }, function (err) {
                        alert(err);
                    });
                }, function (err) {
                    alert(err);
                });
            }, function (err) {
                alert(err);
            });
        } else {
            var answers = createAnswers(question, '.options');
            ajaxPost(app.apiHost + 'answer/create', answers, null, function (data) {
                ajaxGet(app.apiHost + 'logic/search?type=' + LOGIC_TYPE_JUMP + '&subjecttype=' + LOGIC_SUBJECT_TYPE_QUESTION + '&contextid=' + question.id, function (data) {
                    _index = evalJumpLogic(question, answers, data.objs, questions, _index);
                    if (_index < questions.length) {
                        ++_step;
                        evalReference(question, answers, questions);
                        gotoNext(questions[_index], _index, _step);
                    } else {
                        finish();
                    }
                }, function (err) {
                    alert(err);
                });
            }, function (err) {
                alert(err);
            });
        }
    }
    //最后一道题
    else {
        finish();
    }
}

//结束答卷
var finish = function () {
    if (closing == 'exception') {
        window.location = 'exception.html?memberid=' + memberid + '&templateid=' + templateid;
    } else {
        ajaxPost(app.apiHost + 'sample/complete', sample, null, function (data) {
            var reward = data.objs[0].rewardEntity;
            window.location = 'closing.html?memberid=' + memberid + '&templateid=' + templateid + '&amount=' + reward.amount + '&typecode=' + reward.typeCode + '&typename=' + reward.typeName;
        }, function (err) {
            alert(err);
        });
        //window.location = 'closing.html?memberid=' + memberid + '&templateid=' + templateid;
    }
}

//通用逻辑（可答/最多选项/最少选项/开放选项）
var evalGeneralLogic = function (question, context) {
    if (question.type == QUESTION_TYPE_SINGLE) {
        var labels = $('label.checked', context);
        if (question.optional == false) {
            if (labels.length <= 0) {
                //show error
                var tip = "亲，这是必答题哦";
                var tipWidth = 120;
                errorTip('.question-box',context,tip,tipWidth);
                return false;
            }
        }
        for (var i = 0; i < labels.length; ++i) {
            var option = optionOf($(labels[i]).attr('oid'), question.options);
            if (option.open == true && option.blankOptional == false) {
                var textarea = $('.open-option', $(labels[i]));
                if (textarea.val().length <= 0) {
                    //show error
                    var tip = "亲，这是必填的哦";
                    var tipWidth = 120;
                    errorTip('.open',context,tip,tipWidth);
                    return false;
                }
                if (option.blankMax > 0 && textarea.val().length < option.blankMax) {
                    //show error
                    var tip = "限制输入" + option.blankMax + "个字";
                    var tipWidth = 125;
                    errorTip('.open',context,tip,tipWidth);
                    return false;
                }
            }
        }
        return true;
    } else if (question.type == QUESTION_TYPE_MULTIPLE) {
        var labels = $('label.checked', context);
        if (question.optional == false) {
            if (labels.length <= 0) {
                //show error
                var tip = "亲，这是必答题哦";
                var tipWidth = 120;
                errorTip('.question-box',context,tip,tipWidth);
                return false;
            }
        }
        if (question.selectionMin > 0 && labels.length < question.selectionMin) {
            //show error
            var tip = "最少选择" + question.selectionMin + "个选项";
            var tipWidth = 130;
            errorTip('.question-box',context,tip,tipWidth);
            return false;
        }
        if (question.selectionMax > 0 && labels.length > question.selectionMax) {
            //show error
            var tip = "最多选择" + question.selectionMax + "个选项";
            var tipWidth = 130;
            errorTip('.question-box',context,tip,tipWidth);
            return false;
        }
        for (var i = 0; i < labels.length; ++i) {
            var option = optionOf($(labels[i]).attr('oid'), question.options);
            if (option.open == true && option.blankOptional == false) {
                var textarea = $('.open-option', $(labels[i]));
                if (textarea.val().length <= 0) {
                    //show error
                    var tip = "亲，这是必填的哦";
                    var tipWidth = 120;
                    errorTip('.open',context,tip,tipWidth);
                    return false;
                }
            }
        }
        return true;
    } else if (question.type == QUESTION_TYPE_BLANK || question.type == QUESTION_TYPE_MULTIPLE_LINE_BLANK) {
        if (question.options[0].blankOptional == false) {
            if ($('.blank', context).val().length <= 0) {
                //show error
                var tip = "亲，这是必答题哦";
                var tipWidth = 120;
                errorTip('.question-box',context,tip,tipWidth);
                return false;
            }
        }
        return true;
    } else if (question.type == QUESTION_TYPE_MULTIPLE_BLANK) {
        for(var i = 0;i<question.options.length; i++) {
            if(question.options[i].blankOptional == false){
                var inputs = $('input[type=text]', context);
                var id = question.options[i].id;
                var input = $('input[oid="'+question.options[i].id+'"]');
                if($.trim(input.val()) == ''){
                    //show error
                    var tip = "亲，这是必答题哦";
                    var tipWidth = 120;
                    errorTip('.question-box',context,tip,tipWidth);
                    return false;
                }
            }
        }
        return true;
    } else if (question.type == QUESTION_TYPE_IMAGE_SINGLE || question.type == QUESTION_TYPE_IMAGE_MULTIPLE) {
        var lis = $('li.checked', context);
        if (question.optional == false) {
            if ($('li.checked', context).length <= 0) {
                //show error
                var tip = "亲，这是必答题哦";
                var tipWidth = 120;
                errorTip('.question-box',context,tip,tipWidth);
                return false;
            }
        }
        //图片题开放选项提示错误信息逻辑
        /*for (var i = 0; i<lis.length; ++i) {
            var option = optionOf($(lis[i]).attr('oid'), question.options);
            if (option.open == true && option.blankOptional == false) {
                var textarea = $('.open-option', $(lis[i]));
                if (textarea.val().length <= 0) {
                    //show error
                    var tip = "亲，这是必填的哦";
                    var tipWidth = 120;
                    errorTip('.img-open',context,tip,tipWidth);
                    return false;
                }
            }
        }*/
        return true;
    } else if (question.type == QUESTION_TYPE_MATRIX_SINGLE) {
        if (question.optional == false) {
            if (question.layout == QUESTION_LAYOUT_FLUID) {
                if ($('label.checked', context).length <= 0) {
                    //show error
                    var tip = "亲，这是必答题哦";
                    var tipWidth = 120;
                    errorTip('.question-box',context,tip,tipWidth);
                    return false;
                }
            } else {
                if ($('.matrix-options .active', context).length <= 0) {
                    //show error
                    var tip = "亲，这是必答题哦";
                    var tipWidth = 120;
                    errorTip('.question-box',context,tip,tipWidth);
                    return false;
                }
            }
        }
        return true;
    } else if (question.type == QUESTION_TYPE_MATRIX_MULTIPLE) {
        if (question.optional == false) {
            if (question.layout == QUESTION_LAYOUT_FLUID) {
                if ($('label.checked', context).length <= 0) {
                    //show error
                    var tip = "亲，这是必答题哦";
                    var tipWidth = 120;
                    errorTip('.question-box',context,tip,tipWidth);
                    return false;
                }
            } else {
                if ($('.matrix-options .active', context).length <= 0) {
                    //show error
                    var tip = "亲，这是必答题哦";
                    var tipWidth = 120;
                    errorTip('.question-box',context,tip,tipWidth);
                    return false;
                }
            }
        }
        return true;
    } else if (question.type == QUESTION_TYPE_SCORE) {
        if (question.optional == false) {
            if ($('.raty', context).attr('code') == '') {
                //show error
                var tip = "亲，这是必答题哦";
                var tipWidth = 120;
                errorTip('.question-box',context,tip,tipWidth);
                return false;
            }
        }
        return true;
    } else if (question.type == QUESTION_TYPE_MATRIX_SCORE) {
        if (question.optional == false) {
            if (question.layout == QUESTION_LAYOUT_FLUID) {
                var raties = $('.raty', context);
                for (var i = 0; i < raties.length; ++i) {
                    if ($(raties[i]).attr('code') != '') {

                        return true;
                    }
                }
                //show error
                var tip = "亲，这是必答题哦";
                var tipWidth = 120;
                errorTip('.question-box',context,tip,tipWidth);
                return false;
            } else {
                var raties = $('.raty', context);
                for (var i = 0; i < raties.length; ++i) {
                    if ($(raties[i]).attr('code') != '') {

                        return true;
                    }
                }
                //show error
                var tip = "亲，这是必答题哦";
                var tipWidth = 120;
                errorTip('.question-box',context,tip,tipWidth);
                return false;
            }
        }
        return true;
    }
    return false;
}

//必答题提示
var errorTip = function (place,context,tip,tipWidth) {
    if($('.error-tip', context).html() == "" || $('.error-tip', context).html() == null || $('.error-tip', context).html() !== tip){
        $('.error-tip', context).remove();

        if(place ==".open"){
            $('.mandatory').css('margin-left','84');
        }
        $(place).append('<p class="font-size-12 error-tip mandatory"></p>');
        $('.error-tip', context).css('width',tipWidth).html(tip);
    }else{
        $('.mandatory',context).css('animation','none');
        setTimeout(function(){
            //$('.mandatory',context).css({'animation':'move 0.2s ease 3'});
            $('.mandatory',context).css(
                {'-webkit-animation-name':'move',
                    '-webkit-animation-duration':'0.2s',
                    '-webkit-animation-iteration-count':'3',
                    '-webkit-animation-timing-function':'ease'
                }
            );
        },100);
    }
}

//引用逻辑
var evalReference = function (question, answers, questions) {
    if (answers.length > 0) {
        var option = optionOf2(answers[0].code, question.options);
        var tag = '[' + question.number + ']';
        var regexp = new RegExp(question.number, "g");
        for (var i = question.dispIndex; i < questions.length; ++i) {
            //var options =
            //    questions[i].type == QUESTION_TYPE_MATRIX_SINGLE ||
            //    questions[i].type == QUESTION_TYPE_MATRIX_MULTIPLE ||
            //    questions[i].type == QUESTION_TYPE_MATRIX_SCORE ? questions[i].rows : questions[i].options;
            var options = questions[i].rows || questions[i].options;
            if (questions[i].title.indexOf(tag) >= 0) {
                questions[i].title = questions[i].title.replace(regexp, option.title);
            }
            for (var j = 0; j < options.length; ++j) {
                if (options[j].title.indexOf(tag) >= 0) {
                    options[j].title = options[j].title.replace(regexp, option.title);
                }
            }
        }
    }
}

//跳题逻辑
var evalJumpLogic = function (question, answers, logics, questions, index) {
    //
    var target = '';
    // 1. top priority is unconditional logic
    if (target == '') {
        for (var i = 0; i < logics.length; ++i) {
            if (logics[i].expType == LOGIC_EXP_TYPE_UNCONDITIONAL) {
                target = logics[i].target;
                break;
            }
        }
    }
    // 2. next priority is count logic
    if (target == '') {
        for (var i = 0; i < logics.length; ++i) {
            if (logics[i].expType == LOGIC_EXP_TYPE_COUNT) {
                if (evalCountLogic(logics[i], question, answers) == true) {
                    target = logics[i].target;
                    break;
                }
            }
        }
    }
    // 3. next priority is complex logic
    if (target == '') {
        for (var i = 0; i < logics.length; ++i) {
            if (logics[i].expType == LOGIC_EXP_TYPE_COMPLEX) {
                if (evalComplexLogic(logics[i], question, answers) == true) {
                    target = logics[i].target;
                    break;
                }
            }
        }
    }
    // 4. next priority is simple logic
    if (target == '') {
        for (var i = 0; i < logics.length; ++i) {
            if (logics[i].expType == LOGIC_EXP_TYPE_SIMPLE) {
                if (evalSimpleLogic(logics[i], question, answers) == true) {
                    target = logics[i].target;
                    break;
                }
            }
        }
    }
    // 5.
    if (target != '') {
        if (target == 'complete') {
            closing = target;
            return questions.length;
        } else if (target == 'exception') {
            closing = target;
            return questions.length;
        } else {
            var i = indexOf(target, questions);
            if (i >= 0) {
                return i;
            } else {
                // Can not find the appropriate question, then goto closing page
                return index + 1;
            }
        }
    } else {
        return index + 1;
    }
}

//跳至下一题
var gotoNext = function (question, index, step) {
    // inject resource host
    question.resHost = app.resHost;
    // generate html, step or index
    var html = generateHtml(question, index + 1);
    // replace
    $('.question-box').html(html);
    // attach data
    attachData(question, '.question-box');
    // update type
    $('.type').html(getTypeName(question.type));
    // bind events
    bindEvents('.question-box');
    // update progress
    setProgress(index, questions.length);
}

//计数逻辑求值
//COUNT(Q18.OP1.selected=true,Q18.OP2.selected=true)>1
//COUNT(Q18.IX2.OP1.selected=true,Q18.IX5.OP2.selected=true)>1
var evalCountLogic = function (logic, question, answers) {
    var expression = logic.expression.trim();
    var evalExp = logic.subjectType == LOGIC_SUBJECT_TYPE_QUESTION ? evalExp2 : evalExp3;
    var exp1 = expression.split(')')[0].replace('COUNT(', ''); //Q18.OP1.selected=true,Q18.OP2.selected=true
    var exp2 = expression.split(')')[1]; //>1
    var relation = relationOf(exp2);
    var exps = exp1.split(',');
    var count = parseInt(exp2.split(relation)[1]);
    var _count = 0;
    for (var i = 0; i < exps.length; ++i) {
        if (evalExp(exps[i].trim(), question, answers) == true)
            ++_count;
    }
    return compExp(relation, count, _count);
}

//条件逻辑求值
//Q18.OP1.selected=true AND Q18.OP2.selected=true
//Q10.IX1.OP6.selected=true AND Q10.IX1.OP2.selected=true
var evalComplexLogic = function (logic, question, answers) {
    var expression = logic.expression.trim();
    var evalExp = logic.subjectType == LOGIC_SUBJECT_TYPE_QUESTION ? evalExp2 : evalExp3;
    var relation = expression.indexOf('AND') >= 0 ? 'AND' : 'OR';
    var exps = expression.split(relation);
    if (relation == 'AND') {
        for (var i = 0; i < exps.length; ++i) {
            if (evalExp(exps[i].trim(), question, answers) == false)
                return false;
        }
        return true;
    } else {
        for (var i = 0; i < exps.length; ++i) {
            if (evalExp(exps[i].trim(), question, answers) == true)
                return true;
        }
        return false;
    }
}

//条件逻辑求值
//Q18.OP1.selected=true
//Q10.IX1.OP6.selected=true
var evalSimpleLogic = function (logic, question, answers) {
    var evalExp = logic.subjectType == LOGIC_SUBJECT_TYPE_QUESTION ? evalExp2 : evalExp3;
    if (evalExp(logic.expression.trim(), question, answers) == false)
        return false;
    return true;
}

//验证两级表达式（非矩阵题型）
var evalExp2 = function (exp, question, answers) {
    var temp1 = exp.split('=');
    var temp2 = temp1[0].split('.');
    var code = temp2[1];
    var attr = temp2[2];
    var criteria = temp1[1];
    if (attr == 'selected') {
        //Q18.OP1.selected=true
        var answer = answerOf(code, answers);
        if ((criteria == 'true' && answer != null) ||
            (criteria == 'false' && answer == null)) {
            return true;
        }
        return false;
    } else /*if (attr == 'text')*/ {
        //Q18.OP1.text='yiqing'
        var answer = answerOf(code, answers);
        if (answer != null && criteria == answer.text) {
            return true;
        }
        return false;
    }
}

//验证三级表达式（矩阵题型）
var evalExp3 = function (exp, question, answers) {
    //Q10.IX1.OP6.selected=true
    var temp1 = exp.split('=');
    var temp2 = temp1[0].split('.');
    var code = temp2[1];
    var attr = temp2[2];
    var criteria = temp1[1];
    if (attr == 'selected') {
        var answer = answerOf(code, answers);
        if ((criteria == 'true' && answer != null) ||
            (criteria == 'false' && answer == null)) {
            return true;
        }
        return false;
    } else /*if (attr == 'text')*/ {
        var answer = answerOf(code, answers);
        if (answer != null && criteria == answer.text) {
            return true;
        }
        return false;
    }
}

//比较传入的两个参数
var compExp = function (relation, expVal, realVal) {
    if (relation == '!=')
        return realVal != expVal;
    else if (relation == '>=')
        return realVal >= expVal;
    else if (relation == '<=')
        return realVal <= expVal;
    else if (relation == '=')
        return realVal == expVal;
    else if (relation == '>')
        return realVal > expVal;
    else if (relation == '<')
        return realVal < expVal;
    else
        return false;
}

//根据题目number找到题目的索引
var indexOf = function (number, questions) {
    for (var i = 0; i < questions.length; ++i) {
        if (questions[i].number == number)
            return i;
    }
    return -1;
}

//根据选项code返回answer对象
var answerOf = function (code, answers) {
    for (var i = 0; i < answers.length; ++i) {
        if (answers[i].code == code)
            return answers[i];
    }
    return null;
}

//解析关系表达式
var relationOf = function (expression) {
    var relation = ">";
    if (expression.indexOf("!=") >= 0)
        relation = "!=";
    else if (expression.indexOf(">=") >= 0)
        relation = ">=";
    else if (expression.indexOf("<=") >= 0)
        relation = "<=";
    else if (expression.indexOf("=") >= 0)
        relation = "=";
    else if (expression.indexOf(">") >= 0)
        relation = ">";
    else if (expression.indexOf("<") >= 0)
        relation = "<";
    return relation;
}

//
var optionOf = function(oid, options) {
    for (var i = 0; i < options.length; ++i) {
        if (options[i].id == oid)
            return options[i];
    }
    return null;
}

//
var optionOf2 = function(code, options) {
    for (var i = 0; i < options.length; ++i) {
        if (options[i].code == code)
            return options[i];
    }
    return null;
}

//
var showRaty = function (me) {
    var container = $(me).parents('.raty');
    var max = parseInt(container.attr('max'));
    var num = parseInt(container.attr('num'));
    var exid = container.attr('exid');
    var half = container.attr('half');
    //var tip = container.attr('tip');
    //var noneof = container.attr('noneof');
    container.find('.star').each(function () {
        $(this).html('&#xe63f;').css('color','#FF7F00');
    });
    container.parents('.raty-box').find('.score').css('color', '#EE5752');
    if (half && half == "half")
        num = (exid == me.id) ? ((num + 1) % 3) : 1;
    else
        num = (exid == me.id) ? ((num + 1) % 2) : 1;
    var rank = $(me).attr('index');
    if (half && half == "half")
        rank = (num == 0) ? (rank - 1) : (num == 1 ? (rank - 1 + 0.5) : rank);
    else
        rank = (num == 0) ? (rank - 1) : (rank);
    var html = "";
    var rank_floor = Math.floor(rank);
    var rank_ceil = Math.ceil(rank);
    for (var i = 1; i <= rank_floor; i++)
        container.find('.star').eq(i - 1).html('&#xe644;');
    if (rank - rank_floor > 0)
        container.find('.star').eq(rank_floor).html('&#xe64e;');
    for (var i = rank_ceil + 1; i <= max; i++)
        container.find('.star').eq(i - 1).html('&#xe63f;');
    container.attr('num', num);
    container.attr('exid', me.id);
    container.attr('code', $(me).attr('code'));
    container.parents('.raty-box').find('.score').html($(me).attr('value') + '分').css('color','#333');
}

//
var cancelRaty = function (me) {
    var container = $(me).parents('.raty-box');
    container.find('.star').each(function () {
        $(this).html('&#xe63f;').css('color','#eee');
    });
    container.attr('num', '0');
    container.attr('exid', '');
    container.attr('code', '');
    container.find('.score').html('未涉及').css('color', '#eee');
}

