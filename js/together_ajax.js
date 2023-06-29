
/* 함께 구매한 책 */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "고수의 질문법" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".toge_content > .toge_box").length; i++) {
        $(".toge_content > .toge_box").eq(0).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".toge_content > .toge_box").eq(0).find("h1").eq(i).text(msg.documents[i].title);
        $(".toge_content > .toge_box").eq(0).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".toge_content > .toge_box").eq(0).children("h3").eq(i).find("b").eq(i).append(msg.documents[i].sale_price);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "거인의 노트" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".toge_content > .toge_box").length; i++) {
        $(".toge_content > .toge_box").eq(1).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".toge_content > .toge_box").eq(1).find("h1").eq(i).text(msg.documents[i].title);
        $(".toge_content > .toge_box").eq(1).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".toge_content > .toge_box").eq(1).children("h3").eq(i).find("b").eq(i).append(msg.documents[i].sale_price);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "긴긴밤" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".toge_content > .toge_box").length; i++) {
        $(".toge_content > .toge_box").eq(2).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".toge_content > .toge_box").eq(2).find("h1").eq(i).text(msg.documents[i].title);
        $(".toge_content > .toge_box").eq(2).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".toge_content > .toge_box").eq(2).children("h3").eq(i).find("b").eq(i).append(msg.documents[i].sale_price);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "메리골드 마음 세탁소" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".toge_content > .toge_box").length; i++) {
        $(".toge_content > .toge_box").eq(3).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".toge_content > .toge_box").eq(3).find("h1").eq(i).text(msg.documents[i].title);
        $(".toge_content > .toge_box").eq(3).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".toge_content > .toge_box").eq(3).children("h3").eq(i).find("b").eq(i).append(msg.documents[i].sale_price);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "내가 가진 것을 세상이 원하게 하라" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".toge_content > .toge_box").length; i++) {
        $(".toge_content > .toge_box").eq(4).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".toge_content > .toge_box").eq(4).find("h1").eq(i).text(msg.documents[i].title);
        $(".toge_content > .toge_box").eq(4).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".toge_content > .toge_box").eq(4).children("h3").eq(i).find("b").eq(i).append(msg.documents[i].sale_price);
    }
    });