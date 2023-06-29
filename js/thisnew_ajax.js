
/* 이분야의신간 */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "삶의 방향이 달라져도 괜찮아" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".tn_content > .tnc1").length; i++) {
        $(".tn_content > .tnc1").eq(0).find("img").attr("src", msg.documents[i].thumbnail);
        $(".tn_content > .tnc1").eq(0).children(".tnc1_c").eq(i).find("h1").eq(i).text(msg.documents[i].title);
        $(".tn_content > .tnc1").eq(0).children(".tnc1_c").eq(i).find("h2").eq(i).text(msg.documents[i].authors);
        $(".tn_content > .tnc1").eq(0).children(".tnc1_c").eq(i).children("h3").eq(i).find("b").eq(i).text(msg.documents[i].sale_price);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "간단한 습관이 끝까지 간다" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".tn_content > .tnc1").length; i++) {
        $(".tn_content > .tnc1").eq(1).find("img").attr("src", msg.documents[i].thumbnail);
        $(".tn_content > .tnc1").eq(1).children(".tnc1_c").eq(i).find("h1").eq(i).text(msg.documents[i].title);
        $(".tn_content > .tnc1").eq(1).children(".tnc1_c").eq(i).find("h2").eq(i).text(msg.documents[i].authors);
        $(".tn_content > .tnc1").eq(1).children(".tnc1_c").eq(i).children("h3").eq(i).find("b").eq(i).text(msg.documents[i].sale_price);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "고수의 질문법" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".tn_content > .tnc1").length; i++) {
        $(".tn_content > .tnc1").eq(2).find("img").attr("src", msg.documents[i].thumbnail);
        $(".tn_content > .tnc1").eq(2).children(".tnc1_c").eq(i).find("h1").eq(i).text(msg.documents[i].title);
        $(".tn_content > .tnc1").eq(2).children(".tnc1_c").eq(i).find("h2").eq(i).text(msg.documents[i].authors);
        $(".tn_content > .tnc1").eq(2).children(".tnc1_c").eq(i).children("h3").eq(i).find("b").eq(i).text(msg.documents[i].sale_price);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "고수와의 대화, 생산성을 말하다" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".tn_content > .tnc1").length; i++) {
        $(".tn_content > .tnc1").eq(3).find("img").attr("src", msg.documents[i].thumbnail);
        $(".tn_content > .tnc1").eq(3).children(".tnc1_c").eq(i).find("h1").eq(i).text(msg.documents[i].title);
        $(".tn_content > .tnc1").eq(3).children(".tnc1_c").eq(i).find("h2").eq(i).text(msg.documents[i].authors);
        $(".tn_content > .tnc1").eq(3).children(".tnc1_c").eq(i).children("h3").eq(i).find("b").eq(i).text(msg.documents[i].sale_price);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나는 내 인생의 선장이다" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".tn_content > .tnc1").length; i++) {
        $(".tn_content > .tnc1").eq(4).find("img").attr("src", msg.documents[i].thumbnail);
        $(".tn_content > .tnc1").eq(4).children(".tnc1_c").eq(i).find("h1").eq(i).text(msg.documents[i].title);
        $(".tn_content > .tnc1").eq(4).children(".tnc1_c").eq(i).find("h2").eq(i).text(msg.documents[i].authors);
        $(".tn_content > .tnc1").eq(4).children(".tnc1_c").eq(i).children("h3").eq(i).find("b").eq(i).text(msg.documents[i].sale_price);
    }
    });