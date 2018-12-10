var list01 = document.getElementsByClassName("list01")[0];
var list001 = document.getElementsByClassName("list001")[0];
var value = document.getElementById("value");
var Txt = document.getElementById("txt");
var oBtn = document.getElementById("btn");
var Txtvalue = Txt.value;
var oTab = document.getElementById("tab");
var oDetail01 = document.getElementById("detail01");
var oDetail02 = document.getElementById("detail02");
var oUl = document.getElementById("tab01");
var oLi = oUl.children;
var oFly = document.getElementById("fly");
var oBlack=document.getElementById("black");
var oBlack01=document.getElementById("black01");
var aLi=oBlack01.children;



window.onscroll = function() {
	//100
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop >= 400) {
		oFly.style.position = "fixed";
		oFly.style.zIndex = 4;
		oFly.style.display = "block";
	} else {
		oFly.style.position = "static";
		oFly.style.display = "none";
	}

}

function show() {

	setTimeout(function() {
		oDetail01.style.display = "none";
		oDetail02.style.display = "block";
		oLi[0].className = "";
		oLi[1].className = "active";
		setTimeout(function() {
			oDetail02.style.display = "none";
			oDetail01.style.display = "block";
			oLi[1].className = "";
			oLi[0].className = "active";
			show();
		}, 2000)

	}, 2000);

}
show();

var name=getCookie("username");
console.log(name);
/*var loc = location.href;
var n1 = loc.length; //地址的总长度
var n2 = loc.indexOf("="); //取得=号的位置
var name = decodeURI(loc.substr(n2 + 1, n1 - n2)); //从=号后面的内容*/
if(name.length == 0) {
	list001.style.display = "none";
} else {
	list001.style.display = "block";
	list01.style.display = "none";
	value.innerHTML = name;
}

$(function() {
	//$(".outer").dirMove();
	$(".slist li").each(function() {
		$(this).dirMove();
	})
})

$(function() {
	var flag = true;
	$(window).scroll(function() {
		if(flag) {
			var scrollTop = $(this).scrollTop();
			//console.log(scrollTop);
			if(scrollTop > 600) {
				$("#floorNav").fadeIn();
			} else {
				$("#floorNav").fadeOut();
			}

			$("body>div").each(function() {
				if(scrollTop >= $(this).offset().top - $(this).outerHeight() / 2) {
					var index = $(this).index();
					$("#floorNav li").eq(index).addClass("hover").siblings().removeClass("hover");
				}
			})
		}

	})
	$("#floorNav li:not(:last)").click(function() {
		flag = false;
		$(this).addClass("hover").siblings().removeClass("hover");
		var index = $(this).index();
		$("html,body").stop().animate({
			"scrollTop": $("body>div").eq(index).offset().top
		}, 800, function() {
			flag = true;
		});
	})

	$("#floorNav li:last").click(function() {
		$("html,body").stop().animate({
			"scrollTop": 0
		}, 800);
	})
})
var oBanner = document.getElementById("banner");
var oImgList = document.getElementById("imgList");
//角标
var oNum = document.getElementById("nums");
var aNumList = oNum.children;

var aLi = oImgList.children;

var i = 0;
var timer = setInterval(function() {
	move();

}, 3000)

function move() {
	i++;
	if(i == aLi.length) {
		i = 0;
	}
	if(i == -1) {
		i = aLi.length - 1;
	}
	for(var j = 0; j < aNumList.length; j++) {
		aNumList[j].className = "";
	}
	aNumList[i].className = "hover";
	for(var k = 0; k < aLi.length; k++) {
		startMove(aLi[k], {
			opacity: 0
		});
	}
	startMove(aLi[i], {
		opacity: 100
	});
}

for(let k = 0; k < aNumList.length; k++) {
	aNumList[k].onmouseover = function() {
		i = k - 1;
		move();
	}
}
oBanner.onmouseover = function() {
	clearInterval(timer);
}
oBanner.onmouseout = function() {
	timer = setInterval(function() {
		move();
	}, 3000);
}