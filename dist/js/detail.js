function $(id){
				return document.getElementById(id);
			}
			
			var oZoomBox = $("zoomBox");
			var oMidArea = $("midArea");
			var oBigArea = $("bigArea");
			var oZoom = $("zoom");
			var oBigImg = oBigArea.children[0];
			console.log(oBigImg);
			
			oMidArea.onmouseover = function(){
				oZoom.style.display = "block";
				oBigArea.style.display = "block";
			}
			oMidArea.onmouseout = function(){
				oZoom.style.display = "none";
				oBigArea.style.display = "none";
			}
			
			oMidArea.onmousemove = function(e){
				var evt = e || event;
				//var x = evt.offsetX;
				//var y = evt.offsetY;
				var x = evt.pageX - oZoomBox.offsetLeft;
				var y = evt.pageY - oZoomBox.offsetTop;
				console.log(x,y);
				var _left = x - oZoom.offsetWidth/2;
				var _top = y - oZoom.offsetHeight/2;
				
				var cw = oMidArea.clientWidth;
				var ch = oMidArea.clientHeight;
				
				var zw = oZoom.offsetWidth;
				var zh = oZoom.offsetHeight;
				
				if(_left <= 0){
					_left = 0;
				}
				if(_left >= cw-zw){
					_left = cw-zw;
				}
				
				if(_top<=0){
					_top = 0;
				}
				if(_top>=ch-zh){
					_top = ch-zh;
				}
			
				oZoom.style.left = _left + "px";
				oZoom.style.top = _top + "px";
				
				
				oBigImg.style.left = - _left/oMidArea.offsetWidth*oBigImg.offsetWidth + "px";
				oBigImg.style.top = - _top/oMidArea.offsetHeight*oBigImg.offsetHeight + "px";
				
			}