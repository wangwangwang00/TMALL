$(function(){
				var id = location.search.split("=")[1];
				//console.log(id);
				$.get("http://47.104.244.134:8080/goodsbyid.do",{id:id},function(data){
					console.log(data);
					var str = `<img src="${data.picurl}"><p>${data.name}</p><input type="button" data-id="${data.id}" value="加入购物车">`;
					$(".w-center").html(str);
					
					$("input").click(function(){
						var id = $(this).attr("data-id");
						var token = $.cookie("token");
						$.get("http://47.104.244.134:8080/cartsave.do",{gid:id,token:token},function(data){
							if(data.code==0){
								alert("添加成功");
							}
						})
					})
					
				});
			})
