(function($){
	$.fn.extend({
		dirMove:function(){
			var $outer = this;
			//console.log("aaaa");
			var $mask = this.find("span");
			var disL = $outer.offset().left;
			var disT = $outer.offset().top;
			var disR = disL + $outer.outerWidth();
			var disB = disT + $outer.outerHeight();
			
			$outer.hover(function(e){
				confirmDir(e);
			},function(e){
				confirmDir(e);
			});
			
			function confirmDir(e){
				var dirL = Math.abs(e.pageX - disL);
				var dirT = Math.abs(e.pageY - disT);
				var dirR = Math.abs(e.pageX - disR);
				var dirB = Math.abs(e.pageY - disB);
				
				var dir = Math.min(dirL,dirT,dirR,dirB);
				
				if(e.type == "mouseenter"){
					switch(dir){
						case dirL:
							mouseIn("left");
							break;
						case dirT:
							mouseIn("top");
							break;
						case dirR:
							mouseIn("right");
							break;
						case dirB:
							mouseIn("bottom");
					}
				}else{
					switch(dir){
						case dirL:
							mouseOut("left");
							break;
						case dirT:
							mouseOut("top");
							break;
						case dirR:
							mouseOut("right");
							break;
						case dirB:
							mouseOut("bottom");
					}
				}
			}
			
			function mouseIn(dir){
				switch(dir){
					case "left":
						$mask.css({"left":-$outer.outerWidth(),"top":0}).show().stop(true,true).animate({"left":0},10);
						break;
					case "top":
						$mask.css({"top":-$outer.outerHeight(),"left":0}).show().stop(true,true).animate({"top":0},10);
						break;
					case "right":
						$mask.css({"left":$outer.outerWidth(),"top":0}).show().stop(true,true).animate({"left":0},10);
						break;
					case "bottom":
						$mask.css({"top":$outer.outerHeight(),"left":0}).show().stop(true,true).animate({"top":0},10);
						break;
				}
			}
			function mouseOut(dir){
				switch(dir){
					case "left":
						$mask.stop(true,true).animate({"left":-$outer.outerWidth()},10);
						break;
					case "top":
						$mask.stop(true,true).animate({"top":-$outer.outerHeight()},10);
						break;
					case "right":
						$mask.stop(true,true).animate({"left":$outer.outerWidth()},10);
						break;
					case "bottom":
						$mask.stop(true,true).animate({"top":$outer.outerHeight()},10);
						break;
				}
			}

			return this;
		},
		fn1:function(){
			
		},
		fn2:function(){
			
		}
	})
})(jQuery);
