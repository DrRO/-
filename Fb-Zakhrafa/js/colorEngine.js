


/*

colorEngine - version Beta1 june 28th 2010
==========================================
Copyright 2010 Danya Internet Services
http://www.danya.nl
info@danya.nl

COPYRIGHT INFORMATIE (Nederlands)

Op de inhoud van dit bestand berust automatisch bescherming van het Nederlandse auteursrecht. 
Het is niet toegestaan om de (gedeeltelijke) inhoud van dit bestand te kopiëren en te verspreiden zonder toestemming van Danya Internet Services.
Wanneer dit wel wordt gedaan, en er geen gehoor wordt gegeven aan een verzoek tot verwijdering, zullen juridische stappen worden ondernomen.
Meer informatie over dit auteursrecht is te vinden op http://www.justitie.nl/images/auteurswet_tcm34-2335.pdf.


COPYRIGHT INFORMATION (English)

The content of this file is automatically protected under the Dutch copyright protection.
It's not allowed to copy and distribute the content (or portions) from this file without permission from Danya Internet services.
If you do so, and no hearing is given to a request to remove, legal action will be taken.
More information about this copyright can be found at http://www.justitie.nl/images/copyright%20act_tcm34-2341.pdf.

*/






function GenCode() {

	var idstart = document.getElementById('txtstart'),
		idend = document.getElementById('txtend');
	var start = idstart.options[idstart.selectedIndex].value.split(",");
	var end   = idend.options[idend.selectedIndex].value.split(",");
	
	var idbgstart = document.getElementById('bgstart'),
		idbgend = document.getElementById('bgend');
	var bgstart = idbgstart.options[idbgstart.selectedIndex].value.split(",");
	var bgend = idbgend.options[idbgend.selectedIndex].value.split(",");

	var mysource = document.getElementById('mysource').value;
	var myresult = document.getElementById('myresult');
	var deco = document.getElementById('decoTemp').value.split(",");
	
	var decoStart = new Array();
	var decoEnd = new Array();

	if (deco[0] == '1') {decoStart[0] = '[b]';decoEnd[0] = '[/b]';}else {decoStart[0] = '';decoEnd[0] = '';}
	if (deco[1] == '1') {decoStart[1] = '[i]';decoEnd[1] = '[/i]';}else {decoStart[1] = '';decoEnd[1] = '';}
	if (deco[2] == '1') {decoStart[2] = '[u]';decoEnd[2] = '[/u]';}else {decoStart[2] = '';decoEnd[2] = '';}
	if (deco[3] == '1') {decoStart[3] = '[s]';decoEnd[3] = '[/s]';}else {decoStart[3] = '';decoEnd[3] = '';}
	
	if ((bgstart[0] == 'transparent') || (bgend[0] == 'transparent')) {
	bgstart[1] = '';
	bgend[1] = '';
	}

	if ((start[0] == '000000') && (end[0] == '000000')) {
	start[1] = '';
	end[1] = '';
	}
	
	myresult.value = decoStart[0]+decoStart[1]+decoStart[2]+decoStart[3]+bgstart[1]+start[1]+mysource+end[1]+bgend[1]+decoEnd[3]+decoEnd[2]+decoEnd[1]+decoEnd[0];
}


function Decorate(decoration) {
	var chk = document.getElementById(decoration),
		boxU = document.getElementById('underline'),
		boxS = document.getElementById('strike'),
		elem = document.getElementById('gradientbg'),
		myresult = document.getElementById('myresult'),
		decoTemp = document.getElementById('decoTemp'),
		decoArray = decoTemp.value.split(",");

	if (chk.checked == 1) {
		if (decoration == 'bold') {
			elem.style.fontWeight = 'bold';
			decoArray[0] = 1;
		}
		if (decoration == 'italic') {
			elem.style.fontStyle = 'italic';
			decoArray[1] = 1;
		}
		if (decoration == 'underline') {
			if (boxS.checked == 1) {
				elem.style.textDecoration = 'underline line-through';
			}
			else {
				elem.style.textDecoration = 'underline';			
			}			
			decoArray[2] = 1;
		}
		if (decoration == 'strike') {
			if (boxU.checked == 1) {
				elem.style.textDecoration = 'underline line-through';
			}
			else {
				elem.style.textDecoration = 'line-through';			
			}
			decoArray[3] = 1;
		}
	}
	else {
		if (decoration == 'bold') {
			elem.style.fontWeight = 'normal';
			decoArray[0] = 0;
		}
		if (decoration == 'italic') {
			elem.style.fontStyle = 'normal';
			decoArray[1] = 0;
		}
		if (decoration == 'underline') {
			if (boxS.checked == 1) {
				elem.style.textDecoration = 'line-through';
			}
			else {
				elem.style.textDecoration = 'none';
			}
			decoArray[2] = 0;
		}
		if (decoration == 'strike') {
			if (boxU.checked == 1) {
				elem.style.textDecoration = 'underline';
			}
			else {
				elem.style.textDecoration = 'none';
			}
			decoArray[3] = 0;
		}
	}
	
	decoTemp.value = decoArray[0]+','+decoArray[1]+','+decoArray[2]+','+decoArray[3];
	GenCode();
}



function TextColor() {
	var idstart = document.getElementById('txtstart'),
		idend = document.getElementById('txtend');
	var start = idstart.options[idstart.selectedIndex].value.split(",");
	var end   = idend.options[idend.selectedIndex].value.split(",");
	htmlElements=document.getElementById('gradientbg'); gradientText.set(htmlElements,start[0],end[0]);
	
	idstart.style.backgroundColor=idstart.options[idstart.selectedIndex].style.backgroundColor;
	idend.style.backgroundColor=idend.options[idend.selectedIndex].style.backgroundColor;
	
	GenCode();
}



function BgColor() {
	var idbgstart = document.getElementById('bgstart'),
		idbgend = document.getElementById('bgend');
	var bgstart = idbgstart.options[idbgstart.selectedIndex].value.split(",");
	var bgend = idbgend.options[idbgend.selectedIndex].value.split(",");
	var elem = document.getElementById('gradientbg');
	
	if ((bgstart[0] != 'transparent') && (bgend[0] != 'transparent')) {
		try {
			// Firefox
			elem.style.background='-moz-linear-gradient(left, #'+bgstart[0]+', #'+bgend[0]+')';
			// For WebKit (Safari, Google Chrome etc)
			elem.style.background='-webkit-gradient(linear, left top, right top, from(#'+bgstart[0]+'), to(#'+bgend[0]+'))';
		}
		catch( error ) {
			// IE
			elem.style.filter= 'progid:DXImageTransform.Microsoft.gradient(startColorStr=#'+bgstart[0]+', endColorStr=#'+bgend[0]+', GradientType=1)';
		}
	}
	else {
		elem.style.filter= 'none';
		elem.style.background='none';
	}
	
	idbgstart.style.backgroundColor=idbgstart.options[idbgstart.selectedIndex].style.backgroundColor;
	idbgend.style.backgroundColor=idbgend.options[idbgend.selectedIndex].style.backgroundColor;
	
	GenCode();
	return;
}//end backcolor


function MoveText() {
	document.getElementById('gradientbg').innerHTML = document.getElementById('mysource').value;
}



window.onload=function() {
	var ms = document.getElementById('mysource');
	var bold = document.getElementById('bold');
	var italic = document.getElementById('italic');
	var underline = document.getElementById('underline');
	var strike = document.getElementById('strike');
	document.getElementById('decoTemp').value = '0,0,0,0';
	
	ms.onfocus=function() {
		if (!this.clicked) {
			ms.value='';
			this.clicked = true;
		}
	}//end mysource onfocus
	
	ms.onpaste=function() {
		MoveText();
		TextColor();
		BgColor();
	}
	
	ms.onkeyup=function() {
		MoveText();
		TextColor();
		BgColor();
	}
	
	bold.onclick=function() {
		Decorate('bold');
	}
	
	italic.onclick=function() {
		Decorate('italic');
	}
	
	underline.onclick=function() {
		Decorate('underline');
	}
	
	strike.onclick=function() {
		Decorate('strike');
	}
}//end onload