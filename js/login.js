var loginName=document.getElementById("loginName");
var loginPassword=document.getElementById("loginPassword");
var oBtn=document.getElementById("btn");
var oMima=document.getElementById("mima");
var oMima02=document.getElementById("mima02");
var oMima03=document.getElementById("mima03");
var erweima=document.getElementById("erweima");
var login1=document.getElementById("login1");
var login2=document.getElementById("login2");
var alert1=document.getElementById("alert1");
var alert2=document.getElementById("alert2");
var alert3=document.getElementById("alert3");
var alert4=document.getElementById("alert4");


oBtn.onclick=function(){
	if(loginName.value.length==0 && loginPassword.value.length==0){
		alert1.style.display="block";
		oMima03.style.display="none";
		return;
	}
	if(loginName.value.length==0){
		alert2.style.display="block";
		oMima03.style.display="none";
		return;
	}
	if(loginPassword.value.length==0){
		alert3.style.display="block";
		oMima03.style.display="none";
		return;
	}
	$.post("http://47.104.244.134:8080/userlogin.do",{
				"name":loginName.value,
				"password":loginPassword.value
			},function(data){
				console.log(data);
				if(data.msg=="OK"){//登录成功后，传值跳转
					setCookie("username",loginName.value,7);
					setCookie("token",data.data.token,7);
					//location.href="index.html?"+"name="+loginName.value;
					location.assign("index.html");
					
				}else{
					alert4.style.display="block";
					oMima03.style.display="none";
					return;
				}
			})
}
oMima.onclick=function(){
	login2.style.display="none";
	login1.style.display="block";
}
erweima.onclick=function(){
	login1.style.display="none";
	login2.style.display="block";
}
oMima02.onclick=function(){
	login1.style.display="none";
	login2.style.display="block";
}