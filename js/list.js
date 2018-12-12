$(function() {
	$.get("http://47.104.244.134:8080/goodsbytid.do", {
		tid: 13,
		page: 1,
		limit: 13
	}, function(data) {
		data = data.data;
		var str = "";
		for(var i = 1; i < data.length; i++) {
			
			str+=`<dl><dt><img src="${data[i].picurl}"></dt><dd>${data[i].price}</dd><dd><a href="detail.html?id=${data[i].id}">${data[i].name}</a></dd><dd><span>-</span><span>1</span><span>+</sp<dd><dd>加入购物车</dd></dl>`;
			
			/*str += `<li><img src="${data[i].picurl}"><p><a href="detail.html?id=${data[i].id}">${data[i].name}</a></p><p>${data[i].price}</p></li>`*/
		}
		$(".t-list").html(str);
	})
})