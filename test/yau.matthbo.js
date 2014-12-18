// ==UserScript==
// @name        Youtube/Twitch Auto-Updater
// @namespace   #Matthbo
// @version     0.5
// @description Automaticly updates the youtube subscriptions list so you are alway's uptodate
// @include     http://www.youtube.com/feed/subscriptions*
// @include     https://www.youtube.com/feed/subscriptions*
// @include     http://*.twitch.tv/directory/following/*
// ==/UserScript==

//Config
//for in seconds        for in minutes
//time= 'seconds'       time= 'minutes'
//times= 1000           times= 60000
var time= 5;
var times= 60000;

//	**DO NOT TOUCH**
function refresh(){
	window.location.reload();
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function checkInpt1(){
	var cookie = readCookie('yauTime');
	if(cookie != null){
		time=cookie
		return cookie;
	}
	else return 5;
}

function checkInpt2(){
	var cookie = readCookie('yauTimes');
	if(cookie != null){
		times=cookie
		return cookie;
	}
	else return 60000;
}

function maintwtch(){
	var btn = document.createElement("button");
	var txt = document.createTextNode("Auto");
	var txt1 = document.createTextNode("Update");
	btn.appendChild(txt);
	btn.appendChild(txt1);
	btn.setAttribute('onclick', 'javascript:menu();');
	btn.setAttribute('id', 'btn');
	var div1 = document.getElementById("small_more");
	div1.appendChild(btn);
	
	var divMenu = document.createElement("div");
	divMenu.setAttribute('id', 'yaumenu')
	div1.appendChild(divMenu)
	var inpt1 = document.createElement("input");
	inpt1.setAttribute('id', 'inpt1');
	inpt1.setAttribute('type', 'number');
	inpt1.setAttribute('value', checkInpt1());
	divMenu.appendChild(inpt1);
	
	var span1 = document.createElement("span");
	span1.innerHTML = " Time ";
	divMenu.appendChild(span1)
	
	var br = document.createElement("br");
	divMenu.appendChild(br);
	
	var inpt2 = document.createElement("input");
	inpt2.setAttribute('id', 'inpt2');
	inpt2.setAttribute('type', 'number');
	inpt2.setAttribute('value', checkInpt2());
	divMenu.appendChild(inpt2);
	
	var span2 = document.createElement("span");
	span2.innerHTML = " Times ";
	divMenu.appendChild(span2)
	
	document.getElementById('yaumenu').style.visibility = 'hidden';
	document.getElementById('yaumenu').style.position = 'absolute';
	document.getElementById('yaumenu').style.margin = '0';
	//document.getElementById('menu').style.padding = '25px 5px';
	document.getElementById('yaumenu').style.width = 'auto';
	//document.getElementById('menu').style.z-index = 30;
	document.getElementById('yaumenu').style.display = 'block';
	//document.getElementById('menu').style.white-space = 'nowrap';
	document.getElementById('yaumenu').style.border = '1px solid';
	document.getElementById('yaumenu').style.background = 'white';
	
	jQuery('#inpt1').on('input', function() {
	createCookie("yauTime", document.getElementById('inpt1').value, 2650);
	
	});
	
	jQuery('#inpt2').on('input', function() {
	createCookie("yauTimes", document.getElementById('inpt2').value, 2650);
	
	});
}

function mainyt(){
	

	var btn = document.createElement("button");
	var txt = document.createTextNode("Auto");
	var txt1 = document.createTextNode("Update");
	btn.appendChild(txt);
	btn.appendChild(txt1);
	btn.setAttribute('onclick', 'javascript:menu();');
	btn.setAttribute('id', 'btn');
	var div1 = document.getElementById("yt-masthead-content");
	div1.appendChild(btn);
	
	var divMenu = document.createElement("div");
	divMenu.setAttribute('id', 'yaumenu')
	div1.appendChild(divMenu)
	var inpt1 = document.createElement("input");
	inpt1.setAttribute('id', 'inpt1');
	inpt1.setAttribute('type', 'number');
	inpt1.setAttribute('value', checkInpt1());
	divMenu.appendChild(inpt1);
	
	var span1 = document.createElement("span");
	span1.innerHTML = " Time ";
	divMenu.appendChild(span1)
	
	var br = document.createElement("br");
	divMenu.appendChild(br);
	
	var inpt2 = document.createElement("input");
	inpt2.setAttribute('id', 'inpt2');
	inpt2.setAttribute('type', 'number');
	inpt2.setAttribute('value', checkInpt2());
	divMenu.appendChild(inpt2);
	
	var span2 = document.createElement("span");
	span2.innerHTML = " Times ";
	divMenu.appendChild(span2)
	
	document.getElementById('yaumenu').style.visibility = 'hidden';
	document.getElementById('yaumenu').style.position = 'absolute';
	document.getElementById('yaumenu').style.margin = '0';
	//document.getElementById('menu').style.padding = '25px 5px';
	document.getElementById('yaumenu').style.width = 'auto';
	//document.getElementById('menu').style.z-index = 30;
	document.getElementById('yaumenu').style.display = 'block';
	//document.getElementById('menu').style.white-space = 'nowrap';
	document.getElementById('yaumenu').style.border = '1px solid';
	document.getElementById('yaumenu').style.background = 'white';
	
	jQuery('#inpt1').on('input', function() {
	createCookie("yauTime", document.getElementById('inpt1').value, 2650);
	
	});
	
	jQuery('#inpt2').on('input', function() {
	createCookie("yauTimes", document.getElementById('inpt2').value, 2650);
	
	});
}

function menu(){
	var vis = document.getElementById('yaumenu').style.visibility;
	if(vis == 'visible'){document.getElementById('yaumenu').style.visibility = 'hidden'}
	else{document.getElementById('yaumenu').style.visibility = 'visible'}
}

function post(){
	var interval= time * times;
	var timer=setInterval(function(){refresh();},interval);
}

//alert("Auto Updater Not Working!")

var jq = document.createElement("script");
jq.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js');

/*$(document).ready(function () {
    if(window.location.href.indexOf("twitch.tv/directory/following") > -1) {
       maintwtch();
    }
	else if (window.location.href.indexOf("www.youtube.com/feed/subscriptions") > -1){
		mainyt();
	}
	//else alert("Something Went Wrong!");
	else mainyt();
});*/

if (window.location.href.indexOf("twitch.tv/directory/following") > -1) maintwtch();
if (window.location.href.indexOf("www.youtube.com/feed/subscriptions") > -1) mainyt();
else mainyt();
post();