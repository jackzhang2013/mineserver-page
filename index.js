$(document).ready(function(){
    $("#start").html(marked.parse(
`# 如何进入
在游戏界面中打开多人游戏 -> 直接连接 -> ip即可

ip有以下几个，哪个连得上用哪个

- cn-js-nj-1.govfrp.com:60017
- cn-hk-bgp-4.ofalias.net:56824
- frp-usa.tji0.cn:65040`
    ));
    $(".card").html(marked.parse($(".card").html()));
    $(".card").html(`<p class="author">[jackzhang2013]</p>` + $(".card").html());
});