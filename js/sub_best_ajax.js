
/* 이분야의베스트 */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "세이노의 가르침" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_content > .bc1").length; i++) {
        $(".best_content > .bc1").eq(0).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_content > .bc1").eq(0).children(".bc1_c").eq(i).find("h1").eq(i).text(msg.documents[i].title);
        $(".best_content > .bc1").eq(0).children(".bc1_c").eq(i).find("h2").eq(i).text(msg.documents[i].authors);
        $(".best_content > .bc1").eq(0).children(".bc1_c").eq(i).children("h3").eq(i).find("b").eq(i).text(msg.documents[i].sale_price);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "역행자(확장판)" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_content > .bc1").length; i++) {
        $(".best_content > .bc1").eq(1).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_content > .bc1").eq(1).children(".bc1_c").eq(i).find("h1").eq(i).text(msg.documents[i].title);
        $(".best_content > .bc1").eq(1).children(".bc1_c").eq(i).find("h2").eq(i).text(msg.documents[i].authors);
        $(".best_content > .bc1").eq(1).children(".bc1_c").eq(i).children("h3").eq(i).find("b").eq(i).text(msg.documents[i].sale_price);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "상식을 뒤엎는 돈의 심리학" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_content > .bc1").length; i++) {
        $(".best_content > .bc1").eq(2).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_content > .bc1").eq(2).children(".bc1_c").eq(i).find("h1").eq(i).text(msg.documents[i].title);
        $(".best_content > .bc1").eq(2).children(".bc1_c").eq(i).find("h2").eq(i).text(msg.documents[i].authors);
        $(".best_content > .bc1").eq(2).children(".bc1_c").eq(i).children("h3").eq(i).find("b").eq(i).text(msg.documents[i].sale_price);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "유연함의 힘" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_content > .bc1").length; i++) {
        $(".best_content > .bc1").eq(3).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_content > .bc1").eq(3).children(".bc1_c").eq(i).find("h1").eq(i).text(msg.documents[i].title);
        $(".best_content > .bc1").eq(3).children(".bc1_c").eq(i).find("h2").eq(i).text(msg.documents[i].authors);
        $(".best_content > .bc1").eq(3).children(".bc1_c").eq(i).children("h3").eq(i).find("b").eq(i).text(msg.documents[i].sale_price);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "끈기보다 끊기" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_content > .bc1").length; i++) {
        $(".best_content > .bc1").eq(4).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_content > .bc1").eq(4).children(".bc1_c").eq(i).find("h1").eq(i).text(msg.documents[i].title);
        $(".best_content > .bc1").eq(4).children(".bc1_c").eq(i).find("h2").eq(i).text(msg.documents[i].authors);
        $(".best_content > .bc1").eq(4).children(".bc1_c").eq(i).children("h3").eq(i).find("b").eq(i).text(msg.documents[i].sale_price);
    }
    });