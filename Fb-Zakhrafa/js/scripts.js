if (top.location!= self.location) {
top.location = self.location.href 
}


function toggle(optie)
{
var f = optie;

	if (f == "more")
	{
	document.getElementById('button_div_less').style.display='block';
	document.getElementById('button_div_more').style.display='none';
	document.getElementById('morediv').style.display='block';
	}
	else
	{
	document.getElementById('button_div_more').style.display='block';
	document.getElementById('button_div_less').style.display='none';
	document.getElementById('morediv').style.display='none';
	}
}
  



function checklpnew( form )
{

	if (/http:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{2}/.test(form.lp_url.value)) {}
	else{
    alert( "Please, fill in a valid URL!" );
    form.lp_url.focus();
    return false ; 
   }  

	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.lp_contact.value)) {}
	else{
    alert( "Please, fill in a valid e-mailaddress!" );
    form.lp_contact.focus();
    return false ;
  }
	
  if (form.lp_url_desc.value == "") {
    alert( "Please, fill in a valid description of your URL." );
    form.lp_url_desc.focus();
    return false ;
  }  	 
  
  if (form.lp_url.value == "") {
    alert( "Please, fill in a valid URL" );
    form.lp_url.focus();
    return false ;
  }
return true ;
}


function CheckAddlink( form )
{
	if (/http:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{2}/.test(form.link.value)) {}
	else{
    alert( "Please, fill in a valid URL!" );
    form.link.focus();
    return false ;
    }

	if (form.email.value != "") {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {}
		else{
	    alert( "Please, fill in a valid e-mailaddress or leave it empty!" );
	    form.email.focus();
	    return false ;
		}
    }

	if (form.oms.value == "") {
    alert( "Please, fill in a title for your URL." );
    form.oms.focus();
    return false ;
    }
return true ;
}

function checkcontact( form )
{

  if (form.contactname.value == "") {
    alert( "Please, fill in your name" );
    form.contactname.focus();
    return false ;
  }

	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.contactemail.value)) {}
	else{
    alert( "Please, fill in a valid e-mailaddress!" );
    form.contactemail.focus();
    return false ;
  }


  if (form.contactmessage.value.length < 10) {
    alert( "Your message is too short!" );
    form.contactmessage.focus();
    return false ;
  }  


  if (form.contactmessage.value == "") {
    alert( "The Message field is empty" );
    form.contactmessage.focus();
    return false ;
  }   

return true ;
}


function checkgb( form )
{

  if (form.gb_name.value == "") {
    alert( "Please, fill in your name" );
    form.gb_name.focus();
    return false ;
  }

  if (form.gb_email.value != "") {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.gb_email.value)) {}
	else{
    alert( "Please, fill in a valid e-mailaddress or leave it empty" );
    form.gb_email.focus();
    return false ;
  	}
  }
	
  if (form.gb_message.value == "") {
    alert( "The Message field is empty" );
    form.gb_message.focus();
    return false ;
  }   

return true ;
}


function checktellafriend( form )
{
  if (form.sender_name.value == "") {
    alert( "Please, fill in your name" );
    form.sender_name.focus();
    return false ;
  }

	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.sender_email.value)) {}
	else{
    alert( "Your e-mailaddress is invalid!" );
    form.sender_email.focus();
    return false ;
  }

	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.receiver_email.value)) {}
	else{
    alert( "Your friends e-mailaddress is invalid!" );
    form.receiver_email.focus();
    return false ;
  }

return true ;
}


function breezah(_in, _out)
{
	var s="";
	var n=_in.value.toLowerCase();
	
	for(i=0; i<n.length; i++)
	{
	var c=n.charAt(i);
	s+=i%2?c:c.toUpperCase();
	}
	  
_out.value=s;
}


function flipString(aString) {
 var last = aString.length - 1;
 var result = new Array(aString.length)
 for (var i = last; i >= 0; --i) {
  var c = aString.charAt(i)
  var r = flipTable[c]
  result[last - i] = r != undefined ? r : c
 }
 return result.join('')

}

var flipTable = {
a : '\u0250',
b : 'q',
c : '\u0254',
d : 'p',
e : '\u01DD',
f : '\u025F',
g : '\u0183',
h : '\u0265',
i : '\u0131',
j : 'ſ',
k : '\u029E',
l : 'ן',
m : '\u026F',
n : 'u',
r : '\u0279',
t : '\u0287',
v : '\u028C',
w : '\u028D',
y : '\u028E',
'.' : '\u02D9',
'[' : ']',
'(' : ')',
'{' : '}',
'?' : '\u00BF',
'!' : '\u00A1',
"\'" : ',',
'<' : '>',
'_' : '\u203E',
';' : '\u061B',
'\u203F' : '\u2040',
'\u2045' : '\u2046',
'\u2234' : '\u2235',
'\r' : '\n',
0 : '0',
1 : '⇂',
2 : 'Շ',
3 : 'Ɛ',
4 : 'h',
5 : 'ʢ',
6 : '9',
7 : 'L',
8 : '8',
9 : '6'
}

for (i in flipTable) {
  flipTable[flipTable[i]] = i
}

function mirrorString(aString) {
 var last = aString.length - 1;
 var result = new Array(aString.length)
 for (var i = last; i >= 0; --i) {
  var c = aString.charAt(i)
  var r = mirrorTable[c]
  result[last - i] = r != undefined ? r : c
 }
 return result.join('')

}

var mirrorTable = {
a : 'ɒ',
b : 'ʚ',
c : 'ɔ',
d : 'α',
e : 'ɘ',
f : 'ʇ',
g : 'ϱ',
h : 'н',
i : 'ı',
j : 'į',
k : 'ʞ',
l : 'l',
m : 'м',
n : 'и',
o : 'o',
p : 'q',
q : 'p',
r : 'я',
s : 'ƨ',
t : 'т',
u : 'υ',
v : 'v',
w : 'ω',
x : 'x',
y : 'γ',
z : 'z',
'[' : ']',
'(' : ')',
'{' : '}',
'?' : '؟',
'<' : '>'
}

for (i in mirrorTable) {
  mirrorTable[mirrorTable[i]] = i
}


function BigString(aString) {
 var last = aString.length - 1;
 var result = new Array(aString.length)
 for (var i = last; i >= 0; --i) {
  var c = aString.charAt(i)
  var r = BigTable[c]
  result[i] = r != undefined ? r : c
 }

 return result.join('')

}

var BigTable = {
a : '|̶̿ ̶̿ ̶̿ ̶̿|',
b : '|̶͇̿ ̶͇̿ ̶͇̿)',
c : '|͇̿ ͇̿ ͇̿ ͇̿ ',
d : '|͇̿ ͇̿ ͇̿ ͇̿)',
e : '|̶͇̿ ̶͇̿ ͇̿ ',
f : '|̶̿ ̶̿ ̶̿ ̶̿ ',
g : '|͇̿ ͇̿ ͇̿ ̶͇̿ι ',
h : '|̶ ̶ ̶ ̶| ',
i : '| ',
j : '͇ ͇͇͇͇|',
k : '|< ',
l : '|͇ ͇  ',
m : '|̿ V ̿|',
n : '|̿ \\͇|',
o : '|͇̿ ͇̿ ͇̿|',
p : '|̶̿ ̶̿ ̶̿ ̶̿\' ',
q : '|͇̿ ͇̿ ͇̿ ͇͇̿|͇ ',
r : '|̿ ̿ ̿\\ ', 
s : '͇ ͇\\̿ ̿ ',
t : '  ̿ ̿|̿ ̿ ',
u : '|͇ ͇ ͇ ͇ ͇|',
v : '\\ ͇ / ',
w : '|͇ Λ ͇|',
x : 'X ',
y : 'Y ',
z : '̿ ̿/ ͇ ͇ '
}

for (i in BigTable) {
  BigTable[BigTable[i]] = i
}

function big() {
 	var result = BigString(document.generator.textin.value.toLowerCase()); document.generator.textBig.value = result;
}



function BoxedString(aString) {
 var last = aString.length - 1;
 var result = new Array(aString.length)
 for (var i = last; i >= 0; --i) {
  var c = aString.charAt(i)
  var r = BoxedTable[c]
  result[i] = r != undefined ? r : c
 }

 return result.join('')

}

var BoxedTable = {
a : '[̲̅a̲̅]',
b : '[̲̅b̲̅]',
c : '[̲̅c̲̅]',
d : '[̲̅d̲̅]',
e : '[̲̅e̲̅]',
f : '[̲̅f̲̅]',
g : '[̲̅g̲̅]',
h : '[̲̅h̲̅]',
i : '[̲̅i̲̅]',
j : '[̲̅j̲̅]',
k : '[̲̅k̲̅]',
l : '[̲̅l̲̅]',
m : '[̲̅m̲̅]',
n : '[̲̅n̲̅]',
o : '[̲̅o̲̅]',
p : '[̲̅p̲̅]',
q : '[̲̅q̲̅]',
r : '[̲̅r̲̅]', 
s : '[̲̅s̲̅]',
t : '[̲̅t̲̅]',
u : '[̲̅u̲̅]',
v : '[̲̅v̲̅]',
w : '[̲̅w̲̅]',
x : '[̲̅x̲̅]',
y : '[̲̅y̲̅]',
0 : '[̲̅0̲̅]',
1 : '[̲̅1̲̅]',
2 : '[̲̅2̲̅]',
3 : '[̲̅3̲̅]',
4 : '[̲̅4̲̅]',
5 : '[̲̅5̲̅]',
6 : '[̲̅6̲̅]',
7 : '[̲̅7̲̅]',
8 : '[̲̅8̲̅]',
9 : '[̲̅9̲̅]',
'!' : '[̲̅﹗̲̅]',
'?' : '[̲̅﹖̲̅]'
}

for (i in BoxedTable) {
  BoxedTable[BoxedTable[i]] = i
}

function box() {
 	var result = BoxedString(document.generator.textin.value.toLowerCase()); document.generator.textBoxed.value = result;
}










function focusFirst() {

  if (els = oTD.getElementsByTagName("input")) {
    els[0].focus();
  }
}


function textin_focus(e,o){
if(o.firstTime){return}
o.firstTime=true
o.value=""
}


function clearall(){
 document.generator.reset();
 document.generator.textin.value = '';
 }
 
String.prototype.reverse = function() {
var r = '';
for(var i=this.length-1;i>=0;i--) {r += this.charAt(i);}return r;}
function invert(n) {
var field = document.getElementsByName(n)[0];
field.value = field.value.reverse();
}

function out(nr){
window.open("/linkpartners/out.php?id="+nr+"", "intern");
}

function BackTex()
{
var story = document.tex.texarea.value

story=story.substring(0, story.length-1)
document.tex.texarea.value=story
document.tex.texarea.focus()
}

function addTex(chaineAj) { 
var myForm = document.tex.texarea;
//IE support 
if (document.selection) { 
myForm.focus();
sel = document.selection.createRange(); 
sel.text = chaineAj; 
document.tex.texarea.focus();
} 
//MOZILLA/NETSCAPE support 
else if (document.tex.texarea.selectionStart || document.tex.texarea.selectionStart == "0") { 
var startPos = document.tex.texarea.selectionStart; 
var endPos = document.tex.texarea.selectionEnd; 
var chaine = document.tex.texarea.value; 
myForm.value = chaine.substring(0, startPos) + chaineAj + chaine.substring(endPos, chaine.length); 
} else { 
myForm.value += chaineAj; 
} 
document.tex.texarea.focus();
}

function addBookmark(title,url) {
if (window.sidebar) {
window.sidebar.addPanel(title, url,"");
} else if( document.all ) {
window.external.AddFavorite( url, title);
} else if( window.opera && window.print ) {
return true;
}
}