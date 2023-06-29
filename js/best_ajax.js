/*베스트*/


/* 베스트 > 전체 */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "세이노의 가르침" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(0).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(0).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(0).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(0).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "최애의 아이 10" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(1).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(1).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(1).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(1).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "원씽(The One Thing)(리커버 특별판)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(2).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(2).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(2).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(2).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "모든 삶은 흐른다" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(3).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(3).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(3).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(3).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불필요한 생각 버리기 연습" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(4).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(4).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(4).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(4).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "챗GPT, 질문이 돈이 되는 세상" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(5).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(5).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(5).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(5).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "흔한남매 13" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(6).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(6).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(6).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(6).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "The Scent of PAGE : 룸스프레이 60ml" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(7).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(7).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(7).find("h2").prepend(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "도둑맞은 집중력" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(8).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(8).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(8).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(8).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "유연함의 힘" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(9).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(9).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(9).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(0).children(".best_ul").eq(0).children("li").eq(9).find("h2").append(msg.documents[i].publisher);
    }
    });




/* 베스트 > 국내도서 */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "세이노의 가르침" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(0).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(0).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(0).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(0).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "최애의 아이 10" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(1).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(1).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(1).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(1).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "원씽(The One Thing)(리커버 특별판)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(2).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(2).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(2).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(2).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "모든 삶은 흐른다" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(3).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(3).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(3).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(3).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불필요한 생각 버리기 연습" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(4).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(4).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(4).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(4).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "챗GPT, 질문이 돈이 되는 세상" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(5).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(5).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(5).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(5).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "흔한남매 13" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(6).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(6).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(6).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(6).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "도둑맞은 집중력" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(7).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(7).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(7).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(7).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "유연함의 힘" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(8).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(8).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(8).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(8).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "생각하는 대로 해내는 시간 연금술사" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(9).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(9).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(9).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(1).children(".best_ul").eq(0).children("li").eq(9).find("h2").append(msg.documents[i].publisher);
    }
    });



/* 베스트 > 외국도서 */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "A Wish in the Dark (2021 Newbery Honor)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(0).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(0).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(0).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(0).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "Edward Hopper Masterpieces of Art" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(1).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(1).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(1).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(1).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "13 Reasons Why (NETFLIX)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(2).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(2).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(2).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(2).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "The Miraculous Journey of Edward Tulane" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(3).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(3).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(3).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(3).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "Numberblocks Annual 2023" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(4).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(4).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(4).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(4).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "Holes (1999 Newbery Winner)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(5).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(5).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(5).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(5).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "The Graveyard Book (2009 Newbery Winner)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(6).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(6).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(6).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(6).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "Subject Link 7 (Studentbook + Workbook + QR)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(7).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(7).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(7).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(7).find("h2").append(msg.documents[i].publisher);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "To All the Boys I've Loved Before #01" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(8).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(8).find("h1").append(msg.documents[i].title);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "The American Roommate Experiment" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(9).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(9).find("h1").append(msg.documents[i].title);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(9).find("h2").prepend(msg.documents[i].authors);
        $(".best_2_c").eq(2).children(".best_ul").eq(0).children("li").eq(9).find("h2").append(msg.documents[i].publisher);
    }
    });


    

/* 베스트 > eBook */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "재벌3세의 월스트리트. 22(완결)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(0).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(0).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(0).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "그 마법사는 절대고수. 11(완결)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(1).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(1).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(1).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "대사형 이회. 20(완결)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(2).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(2).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(2).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "은퇴한 S급 용병의 회귀생활. 외전 (완결)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(3).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(3).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(3).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "신의독비. 22 (완결)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(4).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(4).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(4).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "뉴턴이 들려주는 지수함수와 로그함수 이야기" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(5).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(5).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(5).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "회귀자도 못 깬 탑 등반합니다. 22(완결)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(6).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(6).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(6).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "즉사기 들고 게임 속으로. 8(완결)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(7).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(7).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(7).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "이계 황자는 세상을 구하고 싶다. 10(완결)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(8).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(8).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(8).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "도쿄 리벤저스. 30" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(9).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(9).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(3).children(".best_ul").eq(0).children("li").eq(9).find("h2").text(msg.documents[i].authors);
    }
    });


    
    /* 베스트 > sam */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "도파민네이션" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(0).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(0).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(0).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "인생에서 가장 후회되는 게 뭐냐고 묻는다면" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(1).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(1).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(1).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "끈기보다 끊기" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(2).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(2).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(2).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나는 불황에도 여전히 부동산 투자를 한다" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(3).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(3).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(3).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "모든 삶은 흐른다" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(4).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(4).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(4).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "메리골드 마음 세탁소" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(5).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(5).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(5).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "GPT 세대가 온다" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(6).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(6).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(6).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "투자의 역사는 반드시 되풀이 된다" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(7).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(7).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(7).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "비전공자도 이해할 수 있는 AI 지식(챗GPT 수록 개정판)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(8).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(8).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(8).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "장하준의 경제학 레시피" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(9).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(9).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(4).children(".best_ul").eq(0).children("li").eq(9).find("h2").text(msg.documents[i].authors);
    }
    });


    
    /* 베스트 > 핫트랙스 */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "물고기는 존재하지 않는다" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(0).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(0).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(0).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "2023 제14회 젊은작가상 수상작품집" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(1).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(1).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(1).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "당신은 결국 무엇이든 해내는 사람(10만 부 기념 특별 리커버 에디션)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(2).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(2).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(2).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "거인의 노트" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(3).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(3).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(3).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "K 배터리 레볼루션" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(4).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(4).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(4).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불편한 편의점(벚꽃 에디션)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(5).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(5).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(5).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "브라질에 비가 내리면 스타벅스 주식을 사라" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(6).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(6).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(6).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "아주 세속적인 지혜" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(7).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(7).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(7).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "더 좋은 삶을 위한 철학" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(8).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(8).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(8).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "타이탄의 도구들(블랙 에디션)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(9).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(9).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(5).children(".best_ul").eq(0).children("li").eq(9).find("h2").text(msg.documents[i].authors);
    }
    });


    
    /* 베스트 > 교보ONLY */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "세이노의 가르침" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(0).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(0).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(0).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "장하준의 경제학 레시피" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(1).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(1).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(1).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "메리골드 마음 세탁소" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(2).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(2).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(2).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "김미경의 마흔 수업" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(3).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(3).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(3).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "돌연한 출발" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(4).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(4).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(4).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "마음을 사로잡는 말센스의 비밀" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(5).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(5).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(5).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "내일을 바꾸는 인생 공부" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(6).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(6).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(6).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "The Scent of PAGE : 룸스프레이 60ml" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(7).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(7).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(7).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "원씽(The One Thing)(리커버 특별판)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(8).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(8).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(8).find("h2").text(msg.documents[i].authors);
    }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "The Scent of PAGE : 미니 룸스프레이 15ml (개선판)" },
    headers: { Authorization: "KakaoAK d3bdf32a90fbabfda3ea8c8b8ce88337" },
}).done(function (msg){
    console.log(msg);
    for (var i = 0; i < $(".best_2_c > .best_ul > li").length; i++) {
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(9).find("img").attr("src", msg.documents[i].thumbnail);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(9).find("h1").text(msg.documents[i].title);
        $(".best_2_c").eq(6).children(".best_ul").eq(0).children("li").eq(9).find("h2").text(msg.documents[i].authors);
    }
    });