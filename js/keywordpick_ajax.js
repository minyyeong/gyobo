
/* 키워드Pick */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "데일 카네기 인간관계론" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".ct_ul > li").length; i++) {
        $(".ct_ul > li").eq(0).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "일머리 문해력" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".ct_ul > li").length; i++) {
        $(".ct_ul > li").eq(1).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "이웃집 백만장자(골드 리커버 에디션)" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".ct_ul > li").length; i++) {
        $(".ct_ul > li").eq(2).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "엣지, 한 끗의 차이를 만드는 내 안의 힘" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".ct_ul > li").length; i++) {
        $(".ct_ul > li").eq(3).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "서울 자가에 대기업 다니는 김 부장 이야기 3: 송 과장 편" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".ct_ul > li").length; i++) {
        $(".ct_ul > li").eq(4).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "부자의 언어" },
    headers: { Authorization: "KakaoAK 1a17dcfccdf362a56fce5c384dc5c3ae" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".ct_ul > li").length; i++) {
        $(".ct_ul > li").eq(5).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
    }
    });