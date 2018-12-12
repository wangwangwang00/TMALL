function $1(id) {
	return document.getElementById(id);
}

var oZoomBox = $1("zoomBox");
var oMidArea = $1("midArea");
var oBigArea = $1("bigArea");
var oZoom = $1("zoom");
var oBigImg = oBigArea.children[0];
//console.log(oBigImg);

oMidArea.onmouseover = function() {
	oZoom.style.display = "block";
	oBigArea.style.display = "block";
}
oMidArea.onmouseout = function() {
	oZoom.style.display = "none";
	oBigArea.style.display = "none";
}

oMidArea.onmousemove = function(e) {
	var evt = e || event;
	//var x = evt.offsetX;
	//var y = evt.offsetY;
	var x = evt.pageX - oZoomBox.offsetLeft;
	var y = evt.pageY - oZoomBox.offsetTop;
	//console.log(x, y);
	var _left = x - oZoom.offsetWidth / 2;
	var _top = y - oZoom.offsetHeight / 2;

	var cw = oMidArea.clientWidth;
	var ch = oMidArea.clientHeight;

	var zw = oZoom.offsetWidth;
	var zh = oZoom.offsetHeight;

	if(_left <= 0) {
		_left = 0;
	}
	if(_left >= cw - zw) {
		_left = cw - zw;
	}

	if(_top <= 0) {
		_top = 0;
	}
	if(_top >= ch - zh) {
		_top = ch - zh;
	}

	oZoom.style.left = _left + "px";
	oZoom.style.top = _top + "px";

	oBigImg.style.left = -_left / oMidArea.offsetWidth * oBigImg.offsetWidth + "px";
	oBigImg.style.top = -_top / oMidArea.offsetHeight * oBigImg.offsetHeight + "px";

}

var oSmall=document.getElementById("small");
var oBig=document.getElementById("big");

$(function() {
	
	var id = location.search.split("=")[1];
	console.log(id);
	$.get("http://47.104.244.134:8080/goodsbyid.do", {
		id: id
	}, function(data) {
		//console.log(data);
		oSmall.src=data.picurl;
		oBig.src=data.picurl;
		var str = `<h2>${data.name}</h2><p>${data.info}</p><span>价格:${data.price}</span><p>评分:${data.star}</p><input type="button" data-id="${data.id}" value="加入购物车">`;
		console.log(str);
		$(".w-center").html(str);

		$("input").click(function() {
			var id = $(this).attr("data-id");
			var token = $.cookie("token");
			$.get("http://47.104.244.134:8080/cartsave.do", {
				gid: id,
				token: token
			}, function(data) {
				if(data.code == 0) {
					alert("添加成功");
					location.assign("cart.html");
				}
			})
		})

	});
})

