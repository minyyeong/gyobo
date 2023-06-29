/*오늘의 선택 > today_choice_2*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "이지성의 1만 킬로미터" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".today").length; i++) {
        $(".today").eq(0).children(".tc_content_1").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".today").eq(0).find("h1").eq(i).append(msg.documents[i].title);
        $(".today").eq(0).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".today").eq(0).find("h2").eq(i).append(msg.documents[i].publisher);
        $(".today").eq(0).find("h3").eq(i).prepend(msg.documents[i].sale_price);
        $(".today").eq(0).find("h5").eq(i).text(msg.documents[i].contents);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "여기 가려고 주말을 기다렸어" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".today").length; i++) {
        $(".today").eq(1).children(".tc_content_1").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".today").eq(1).find("h1").eq(i).append(msg.documents[i].title);
        $(".today").eq(1).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".today").eq(1).find("h2").eq(i).append(msg.documents[i].publisher);
        $(".today").eq(1).find("h3").eq(i).prepend(msg.documents[i].sale_price);
        $(".today").eq(1).find("h5").eq(i).text(msg.documents[i].contents);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "투자의 역사는 반드시 되풀이 된다" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".today").length; i++) {
        $(".today").eq(2).children(".tc_content_1").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".today").eq(2).find("h1").eq(i).append(msg.documents[i].title);
        $(".today").eq(2).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".today").eq(2).find("h2").eq(i).append(msg.documents[i].publisher);
        $(".today").eq(2).find("h3").eq(i).prepend(msg.documents[i].sale_price);
        $(".today").eq(2).find("h5").eq(i).text(msg.documents[i].contents);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "세상의 마지막 기차역(리커버 에디션)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".today").length; i++) {
        $(".today").eq(3).children(".tc_content_1").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".today").eq(3).find("h1").eq(i).append(msg.documents[i].title);
        $(".today").eq(3).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".today").eq(3).find("h2").eq(i).append(msg.documents[i].publisher);
        $(".today").eq(3).find("h3").eq(i).prepend(msg.documents[i].sale_price);
        $(".today").eq(3).find("h5").eq(i).text(msg.documents[i].contents);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "물고기는 존재하지 않는다" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".today").length; i++) {
        $(".today").eq(4).children(".tc_content_1").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".today").eq(4).find("h1").eq(i).append(msg.documents[i].title);
        $(".today").eq(4).find("h2").eq(i).prepend(msg.documents[i].authors);
        $(".today").eq(4).find("h2").eq(i).append(msg.documents[i].publisher);
        $(".today").eq(4).find("h3").eq(i).prepend(msg.documents[i].sale_price);
        $(".today").eq(4).find("h5").eq(i).text(msg.documents[i].contents);
    }
    });


    /*오늘의 선택 > tc_content_3*/

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "물고기는 존재하지 않는다" },
        headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
    }).done(function (msg){
        console.log(msg);
        for (var i = 0; i < $(".tc_content_3 > .tc_ul > li").length; i++) {
            $(".tc_content_3 > .tc_ul > li").eq(0).find("img").attr("src", msg.documents[i].thumbnail);
            $(".tc_content_3 > .tc_ul > li").eq(0).find("h3").eq(i).text(msg.documents[i].title);
        }
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "여기 가려고 주말을 기다렸어" },
        headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
    }).done(function (msg){
        console.log(msg);
        for (var i = 0; i < $(".tc_content_3 > .tc_ul > li").length; i++) {
            $(".tc_content_3 > .tc_ul > li").eq(1).find("img").attr("src", msg.documents[i].thumbnail);
            $(".tc_content_3 > .tc_ul > li").eq(1).find("h3").eq(i).text(msg.documents[i].title);
        }
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "세상의 마지막 기차역(리커버 에디션)" },
        headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
    }).done(function (msg){
        console.log(msg);
        for (var i = 0; i < $(".tc_content_3 > .tc_ul > li").length; i++) {
            $(".tc_content_3 > .tc_ul > li").eq(2).find("img").attr("src", msg.documents[i].thumbnail);
            $(".tc_content_3 > .tc_ul > li").eq(2).find("h3").eq(i).text(msg.documents[i].title);
        }
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "이지성의 1만 킬로미터" },
        headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
    }).done(function (msg){
        console.log(msg);
        for (var i = 0; i < $(".tc_content_3 > .tc_ul > li").length; i++) {
            $(".tc_content_3 > .tc_ul > li").eq(3).find("img").attr("src", msg.documents[i].thumbnail);
            $(".tc_content_3 > .tc_ul > li").eq(3).find("h3").eq(i).text(msg.documents[i].title);
        }
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "투자의 역사는 반드시 되풀이 된다" },
        headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
    }).done(function (msg){
        console.log(msg);
        for (var i = 0; i < $(".tc_content_3 > .tc_ul > li").length; i++) {
            $(".tc_content_3 > .tc_ul > li").eq(4).find("img").attr("src", msg.documents[i].thumbnail);
            $(".tc_content_3 > .tc_ul > li").eq(4).find("h3").eq(i).text(msg.documents[i].title);
        }
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "아버지의 해방일지" },
        headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
    }).done(function (msg){
        console.log(msg);
        for (var i = 0; i < $(".tc_content_3 > .tc_ul > li").length; i++) {
            $(".tc_content_3 > .tc_ul > li").eq(5).find("img").attr("src", msg.documents[i].thumbnail);
            $(".tc_content_3 > .tc_ul > li").eq(5).find("h3").eq(i).text(msg.documents[i].title);
        }
        });