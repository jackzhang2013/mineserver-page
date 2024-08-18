$(document).ready(function(){$("#start").html(marked.parse(`# 如何进入
在游戏界面中打开多人游戏 -> 直接连接 -> ip即可

ip有以下几个，哪个连得上用哪个

- cn-js-nj-1.govfrp.com:60017
- cn-hk-bgp-4.ofalias.net:56824
- frp-usa.tji0.cn:65040`)),$.get("https://api.github.com/repos/jackzhang2013/mineserver-page/issues",function(a,n){for(var s,e=0;e<a.length;e++)"jackzhang2013"==a[e].user.login&&(s=`<div class="card">
${`<span class="author">[jackzhang2013 ${a[e].created_at.split("T")[0]}]</span>`+marked.parse(a[e].body)}
</div>`,console.log(s),$("main").append(s))})});