
$(function(){
    $("input").on("click",function(){
    //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        //var elem = document.createElement("img");
        var im = "img/" + randomChildNumber+".jpg";
        $("#thisImg").attr("src",im);
        //elem.setAttribute('src', im);
        //$("body").append(elem);
        //1.create img element
        //2.set img src
    });
});