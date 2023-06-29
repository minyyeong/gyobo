
/*이 주의 책*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "AI 이후의 세계" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".week_ul > li").length; i++) {
        $(".week_ul > li").eq(0).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
        $(".week_ul > li").eq(0).find("h4").eq(i).append(msg.documents[i].title);
        $(".week_ul > li").eq(0).find("h3").eq(i).prepend(msg.documents[i].authors);
        $(".week_ul > li").eq(0).find("h3").eq(i).append(msg.documents[i].publisher);
        $(".week_ul > li").eq(0).find("h2").eq(i).prepend(msg.documents[i].sale_price);
    }
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "유현준의 인문 건축 기행" },
        headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
    }).done(function (msg){
        console.log(msg);
        for (var i = 0; i < $(".week_ul > li").length; i++) {
            $(".week_ul > li").eq(1).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
            $(".week_ul > li").eq(1).find("h4").eq(i).append(msg.documents[i].title);
            $(".week_ul > li").eq(1).find("h3").eq(i).prepend(msg.documents[i].authors);
            $(".week_ul > li").eq(1).find("h3").eq(i).append(msg.documents[i].publisher);
            $(".week_ul > li").eq(1).find("h2").eq(i).prepend(msg.documents[i].sale_price);
        }
        });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "주디스 헌의 외로운 열정" },
            headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
        }).done(function (msg){
            console.log(msg);
            for (var i = 0; i < $(".week_ul > li").length; i++) {
                $(".week_ul > li").eq(2).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
                $(".week_ul > li").eq(2).find("h4").eq(i).append(msg.documents[i].title);
                $(".week_ul > li").eq(2).find("h3").eq(i).prepend(msg.documents[i].authors);
                $(".week_ul > li").eq(2).find("h3").eq(i).append(msg.documents[i].publisher);
                $(".week_ul > li").eq(2).find("h2").eq(i).prepend(msg.documents[i].sale_price);
            }
            });

            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "유도라 허니셋은 잘 지내고 있답니다" },
                headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
            }).done(function (msg){
                console.log(msg);
                for (var i = 0; i < $(".week_ul > li").length; i++) {
                    $(".week_ul > li").eq(3).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
                    $(".week_ul > li").eq(3).find("h4").eq(i).append(msg.documents[i].title);
                    $(".week_ul > li").eq(3).find("h3").eq(i).prepend(msg.documents[i].authors);
                    $(".week_ul > li").eq(3).find("h3").eq(i).append(msg.documents[i].publisher);
                    $(".week_ul > li").eq(3).find("h2").eq(i).prepend(msg.documents[i].sale_price);
                }
                });

                $.ajax({
                    method: "GET",
                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                    data: { query: "세상 끝의 카페" },
                    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
                }).done(function (msg){
                    console.log(msg);
                    for (var i = 0; i < $(".week_ul > li").length; i++) {
                        $(".week_ul > li").eq(4).children("a").eq(i).find("img").attr("src", msg.documents[i].thumbnail);
                        $(".week_ul > li").eq(4).find("h4").eq(i).append(msg.documents[i].title);
                        $(".week_ul > li").eq(4).find("h3").eq(i).prepend(msg.documents[i].authors);
                        $(".week_ul > li").eq(4).find("h3").eq(i).append(msg.documents[i].publisher);
                        $(".week_ul > li").eq(4).find("h2").eq(i).prepend(msg.documents[i].sale_price);
                    }
                    });