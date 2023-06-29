
/* 책소개 텍스트 가져오기 */
$(function(){
    $.get("./sub_txt/txt1_1.txt", function(data) {
        $(".bi_top").html(data);
    })
});
$(function(){
    $.get("./sub_txt/txt1_2.txt", function(data) {
        $(".bi_middle").html(data);
    })
});
$(function(){
    $.get("./sub_txt/txt1_3.txt", function(data) {
        $(".bi_bottom").html(data);
    })
});


/* 작가정보 텍스트 가져오기 */
$(function(){
    $.get("./sub_txt/txt2.txt", function(data) {
        $(".author_t >.at_3").html(data);
    })
});
$(function(){
    $.get("./sub_txt/txt3.txt", function(data) {
        $(".author_b >.at_6").html(data);
    })
});


/* 목차 텍스트 가져오기 */
$(function(){
    $.get("./sub_txt/txt4_1.txt", function(data) {
        $(".concept >.cc_1").html(data);
    })
});
$(function(){
    $.get("./sub_txt/txt4_2.txt", function(data) {
        $(".concept >.cc_2").html(data);
    })
});


/* 추천사 텍스트 가져오기 */
$(function(){
    $.get("./sub_txt/txt5_1.txt", function(data) {
        $(".chu >.ch_1").html(data);
    })
});
$(function(){
    $.get("./sub_txt/txt5_2.txt", function(data) {
        $(".chu >.ch_2").html(data);
    })
});


/* 책속으로 텍스트 가져오기 */
$(function(){
    $.get("./sub_txt/txt6_1.txt", function(data) {
        $(".inbook >.ib_1").html(data);
    })
});
$(function(){
    $.get("./sub_txt/txt6_2.txt", function(data) {
        $(".inbook >.ib_2").html(data);
    })
});

