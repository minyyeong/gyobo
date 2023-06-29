

/* 목차 펼쳐보기 */
$(function(){
    $(".cc_btn > .cc_btn_1").click(function(){
        $(".concept > .cc_1").show();
        $(".concept > .cc_2").hide();
        $(".cc_btn > .cc_btn_1").hide();
        $(".cc_btn > .cc_btn_2").show();
    });
});

/* 목차 접어보기 */
$(function(){
    $(".cc_btn > .cc_btn_2").click(function(){
        $(".concept > .cc_1").hide();
        $(".concept > .cc_2").show();
        $(".cc_btn > .cc_btn_2").hide();
        $(".cc_btn > .cc_btn_1").show();
    });
});


/* 추천사 펼쳐보기 */
$(function(){
    $(".ch_btn > .ch_btn_1").click(function(){
        $(".chu > .ch_1").show();
        $(".chu > .ch_2").hide();
        $(".ch_btn > .ch_btn_1").hide();
        $(".ch_btn > .ch_btn_2").show();
    });
});

/* 추천사 접어보기 */
$(function(){
    $(".ch_btn > .ch_btn_2").click(function(){
        $(".chu > .ch_1").hide();
        $(".chu > .ch_2").show();
        $(".ch_btn > .ch_btn_2").hide();
        $(".ch_btn > .ch_btn_1").show();
    });
});


/* 책속으로 펼쳐보기 */
$(function(){
    $(".ib_btn > .ib_btn_1").click(function(){
        $(".inbook > .ib_1").show();
        $(".inbook > .ib_2").hide();
        $(".ib_btn > .ib_btn_1").hide();
        $(".ib_btn > .ib_btn_2").show();
    });
});

/* 책속으로 접어보기 */
$(function(){
    $(".ib_btn > .ib_btn_2").click(function(){
        $(".inbook > .ib_1").hide();
        $(".inbook > .ib_2").show();
        $(".ib_btn > .ib_btn_2").hide();
        $(".ib_btn > .ib_btn_1").show();
    });
});