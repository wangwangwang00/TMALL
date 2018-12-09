function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	return getComputedStyle(obj,null)[attr];
}
//obj要改变的DOM对象
//json 要改变的属性及属性的目标值
//fn 实现链式调用
function startMove(obj,json,fn){
	//为了保证针对某个DOM对象的操作始终由一个定时器控制
	//在开启一个定时器之前先清掉该对象上的定时器
	clearInterval(obj.timer);
	//开启一个新的定时器
	obj.timer = setInterval(function(){
		//碰到这个flag时，先不用管，至于有什么用，后面再说
		var flag = true;//假设
		//遍历保存样式属性和目标值的json数据，取到属性名和目标值（对应的属性值）
		for(var attr in json){
			//由于透明度的处理和px的处理方式稍有不同，分别处理
			if(attr == "opacity"){
				//取到当前值，这个值在每一次定时器走的时候都会变化
				var iCur = parseInt(getStyle(obj,attr)*100);
			}else{
				var iCur = parseInt(getStyle(obj,attr));
			}
			//取到目标值
			var iTarget = json[attr];
			//这个是实现缓冲运动的关键代码
			//属性每一次改变的值都不一样，越来越小，无限接近0
			var iSpeed = (iTarget-iCur)/7;
			//考虑到当speed值过小时对样式不在造成影响，将小数取整为1或者-1
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			
			if(attr == "opacity"){
				obj.style.opacity = (iCur + iSpeed)/100;
				obj.style.filter = "alpha(opacity="+(iCur+iSpeed)+")";
			}else{
				obj.style[attr] = iCur + iSpeed + "px";
			}
			//由于可能会出现多个样式同时改变的情况
			//考虑清除定时器的条件，所有的都达到了目标值时，才清除
			//换句话说，只要有一个没有达到就不能清除
			//假设在每次定时器开启时，所有都达到了目标值，看代码顶部的flag
			if(iCur!=iTarget){
				flag = false;//只要有一个没有达到，flag == false
			}
		}
		if(flag){//判断flag的值
			clearInterval(obj.timer);
			if(fn){//如果需要链式调用
				fn();//继续执行传入的函数
			}
		}
		
		
	},20);
}
