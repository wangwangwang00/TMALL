$(function() {
	var token = $.cookie("token");
	$.get("http://47.104.244.134:8080/cartlist.do", {
		token: token
	}, function(data) {
		//console.log(data);
		var str = "";
		for(var i = 0; i < data.length; i++) {
			str += `<div><input type="checkbox" name="" id="check" value="" /><img src="${data[i].goods.picurl}"><p>${data[i].goods.name}</p><span>${data[i].goods.price}</span><b><em class="minus">-</em><em class=".shu">${data[i].count}</em><em class="add">+</em></b><a class="delete">删除</a></div>`;
			var aa = data[i].id;
			//console.log(aa);
			var count = data[i].count;
			console.log(count);
			var bb = data[i].gid;
			//console.log(bb);
		}
		$(".s-goods").html(str);

		$(".minus").click(function() {
			$.get("http://47.104.244.134:8080/cartupdate.do", {
				id: aa,
				gid: bb,
				num: -1,
				token: token
			}, function(data) {
				count--;
				console.log(count);
				$(".shu").html(count);
				//location.reload();
				if(count == 0) {
					$.get("http://47.104.244.134:8080/cartupdate.do", {
						id: aa,
						gid: bb,
						num: 0,
						token: token
					}, function(data) {
						location.reload();
					})
				}
			})
		})
		$(".add").click(function() {
			$.get("http://47.104.244.134:8080/cartupdate.do", {
				id: aa,
				gid: bb,
				num: 1,
				token: token
			}, function(data) {
				count++;
				console.log(count);
				$(".shu").html(count);
				//location.reload();
			})
		})
		$(".delete").click(function() {
			$.get("http://47.104.244.134:8080/cartupdate.do", {
				id: aa,
				gid: bb,
				num: 0,
				token: token
			}, function(data) {
				location.reload();
			})
		})

		//console.log($(".minus"));
		/*$(".minus").onclick = function() {
			console.log(this);
			k--;
			$.get("http://47.104.244.134:8080/cartupdate.do", {
				"id":arr1,
				"gid":arr2,
				"num":-1,
				"token":token
			},function(data){
				if(data.code==0){
					alert("用户名重名");
				}
				if(data.code==1){
					alert("用户名可用");
				}
			})
		}
*/
	})

})

/*$(function() {
	var token = $.cookie("token");

	$.get("http://47.104.244.134:8080/cartlist.do", {
		token: token
	}, function(data) {
		var str = "";
		console.log(data);
		
		for(var i = 1; i < data.length; i++) {
			str += `<div class="dd"><input type="checkbox" name="" id="check" value="" /><img src="${data[i].goods.picurl}"><p>${data[i].goods.name}</p><span>${data[i].goods.price}</span><b><em class="add">+</em><em class="shu">${data[i].count}</em><em class="minus">-</em></b><a class="delete">删除</a></div>`;
			var aa = data[i].id;
			console.log(aa);
			var count = data[i].count;
			console.log(count);
			var bb = data[i].gid;
			console.log(bb);
		}
		$(".cart-list").html(str);

		$(".minus").click(function() {
			$.get("http://47.104.244.134:8080/cartupdate.do", {
				id: aa,
				gid: bb,
				num: -1,
				token: token
			}, function(data) {
				count--;
				$(".shu").html(count);
				if(count == 0) {

				}
			})
		})
		$(".add").click(function() {
			$.get("http://47.104.244.134:8080/cartupdate.do", {
				id: aa,
				gid: bb,
				num: 1,
				token: token
			}, function(data) {
				count++;
				$(".shu").html(count);
			})
		})
		$(".delete").click(function() {
			$.get("http://47.104.244.134:8080/cartupdate.do", {
				id: aa,
				gid: bb,
				num: 0,
				token: token
			}, function(data) {
				location.reload();
			})
		})

	})
})
*/