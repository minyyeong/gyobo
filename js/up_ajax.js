
/*급상승 도서*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "오늘부터 성장할 나에게" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".up_ul > li").length; i++) {
        $(".up_ul > li").eq(0).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".up_ul > li").eq(0).find("h3").eq(i).text(msg.documents[i].title);
        $(".up_ul > li").eq(0).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".up_ul > li").eq(0).find("h2").eq(i).append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "모든 삶은 흐른다" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".up_ul > li").length; i++) {
        $(".up_ul > li").eq(1).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".up_ul > li").eq(1).find("h3").eq(i).text(msg.documents[i].title);
        $(".up_ul > li").eq(1).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".up_ul > li").eq(1).find("h2").eq(i).append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "메리골드 마음 세탁소" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".up_ul > li").length; i++) {
        $(".up_ul > li").eq(2).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".up_ul > li").eq(2).find("h3").eq(i).text(msg.documents[i].title);
        $(".up_ul > li").eq(2).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".up_ul > li").eq(2).find("h2").eq(i).append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "도시락과 강아지의 기웃댐" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".up_ul > li").length; i++) {
        $(".up_ul > li").eq(3).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".up_ul > li").eq(3).find("h3").eq(i).text(msg.documents[i].title);
        $(".up_ul > li").eq(3).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".up_ul > li").eq(3).find("h2").eq(i).append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "사장학개론" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".up_ul > li").length; i++) {
        $(".up_ul > li").eq(4).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".up_ul > li").eq(4).find("h3").eq(i).text(msg.documents[i].title);
        $(".up_ul > li").eq(4).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".up_ul > li").eq(4).find("h2").eq(i).append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "유연함의 힘" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".up_ul > li").length; i++) {
        $(".up_ul > li").eq(5).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".up_ul > li").eq(5).find("h3").eq(i).text(msg.documents[i].title);
        $(".up_ul > li").eq(5).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".up_ul > li").eq(5).find("h2").eq(i).append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불필요한 생각 버리기 연습" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".up_ul > li").length; i++) {
        $(".up_ul > li").eq(6).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".up_ul > li").eq(6).find("h3").eq(i).text(msg.documents[i].title);
        $(".up_ul > li").eq(6).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".up_ul > li").eq(6).find("h2").eq(i).append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "디베이터" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".up_ul > li").length; i++) {
        $(".up_ul > li").eq(7).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".up_ul > li").eq(7).find("h3").eq(i).text(msg.documents[i].title);
        $(".up_ul > li").eq(7).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".up_ul > li").eq(7).find("h2").eq(i).append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "허브 코헨의 협상의 기술 1" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".up_ul > li").length; i++) {
        $(".up_ul > li").eq(8).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".up_ul > li").eq(8).find("h3").eq(i).text(msg.documents[i].title);
        $(".up_ul > li").eq(8).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".up_ul > li").eq(8).find("h2").eq(i).append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "김대석 셰프의 집밥 레시피" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".up_ul > li").length; i++) {
        $(".up_ul > li").eq(9).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".up_ul > li").eq(9).find("h3").eq(i).text(msg.documents[i].title);
        $(".up_ul > li").eq(9).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".up_ul > li").eq(9).find("h2").eq(i).append(msg.documents[i].publisher);
    }
    });