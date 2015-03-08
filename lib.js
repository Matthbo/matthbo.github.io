function getFile(file){
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET",file,false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;
		
	var nodes = xmlDoc.getElementsByTagName("update").length;
		
	/*document.write(nodes);*/

	var updates = document.getElementsByClassName("updates")[0];
	for(var id = nodes-1; id >= 0; id--){
		var el = document.createElement("span");
		var br = document.createElement("br");
		var br2 = document.createElement("br");
		el.setAttribute('id', id);
		el.setAttribute('class', "update");
		if(id != nodes-1){
			updates.appendChild(br);
			document.write("==========")
			updates.appendChild(br2);
		}
		updates.appendChild(el);
		document.getElementById(id).innerHTML=
		xmlDoc.getElementsByTagName("update")[id].childNodes[0].nodeValue;
	}
}