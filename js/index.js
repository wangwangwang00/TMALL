var list01=document.getElementsByClassName("list01")[0];
var list001=document.getElementsByClassName("list001")[0]; 
var value = document.getElementById("value");
var Txt=document.getElementById("txt");
var oBtn=document.getElementById("btn");
var Txtvalue=Txt.value;

var loc = location.href;
var n1 = loc.length;//地址的总长度
var n2 = loc.indexOf("=");//取得=号的位置
var name = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
if(name.length==0){
	list001.style.display="none";
}else{
	list001.style.display="block";
	list01.style.display="none";
	value.innerHTML=name;
}

oBtn.onclick=function(){
	$.post("http://47.104.244.134:8080/goodsbytid.do",{
				"tid":13,
				"page":3,
				"limit":20
			},function(data){
				console.log(data);
				//debugger;
			})
}




var oBanner = document.getElementById("banner");
			var oImgList = document.getElementById("imgList");
			//角标
			var oNum = document.getElementById("nums");
			var aNumList = oNum.children;

			var aLi = oImgList.children;

			var i = 0;
			var timer = setInterval(function(){
				move();
				
			},3000)
			
			function move(){
				i++;
				if(i==aLi.length){
					i = 0;
				}
				if(i==-1){
					i = aLi.length - 1;
				}
				for(var j = 0; j < aNumList.length; j++){
					aNumList[j].className = "";
				}
					aNumList[i].className = "hover";
				for(var k = 0; k < aLi.length; k++){
					startMove(aLi[k],{opacity:0});
				}
				startMove(aLi[i],{opacity:100});
			}
			
			
			for(let k = 0; k < aNumList.length; k++){
				aNumList[k].onmouseover = function(){
					i = k-1;
					move();
				}
			}	
			oBanner.onmouseover = function(){
				clearInterval(timer);
			}
			oBanner.onmouseout = function(){
				timer = setInterval(function(){
					move();
				},3000);
			}