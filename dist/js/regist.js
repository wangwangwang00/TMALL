var oForm=document.getElementById("regist");
var username=document.getElementById("username");
var password1=document.getElementById("password1");
var password2=document.getElementById("password2");
var email=document.getElementById("Email");
var sex=document.getElementById("sex");
var yanzheng=document.getElementById("yanzheng");
var oBtn=document.getElementById("btn");

oBtn.onclick=function(){
	//debugger;
	//判断密码是否相同
	if(password1.value != password2.value){
		alert("两次密码输入不一致，请重新输入");
		return;
	}
	//判断性别输入是否有误
	if(sex.value !="男" && sex.value !="女"){
		alert("性别输入有误，只可输入男或女！");
		return;
	}
	//验证用户名
	$.get("http://47.104.244.134:8080/username.do",{
				"username":username.value
			},function(data){
				/*if(data.msg=="成功"){
					
				}else{
					alert("用户名输入有误！");
					return;
				}*/
			})
	//验证邮箱
	$.get("http://47.104.244.134:8080/useremail.do",{
				"email":email.value
			},function(data){
				/*if(data.msg=="成功"){
					
				}else{
					alert("邮箱输入有误！");
					return;
				}*/
			})
	//注册
	$.post("http://47.104.244.134:8080/usersave.do",{
				"username":username.value,
				"password":password1.value,
				"email":email.value,
				"sex":sex.value
			},function(data){
				if(data.msg=="成功"){//注册成功，自动跳转到登录页面
					location.assign("login.html");
				}
			})
}
