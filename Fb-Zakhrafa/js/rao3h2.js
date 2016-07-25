
function advert(adurl) {
  lp = (screen.width) ? (screen.width-400)/2 : 0; tp = (screen.height) ? (screen.height-600)/2 : 0;
  window.open(
    adurl,
    "adverteren",
    "scrollbars=yes,width=425,height=600,menubar=no,status=yes,toolbar=no,copyhistory=no,top="+tp+",left="+lp+",location=no,directories=no,resizable=no");
document.write("<div style=\"width: 120px; height: 60px; text-align: center;\"><a href=\"http://www.mollie.nl/partners/microads/572535/visit/98315/?url=http%3A%2F%2Fwww.mobilecasinomarbella.com\" target=\"_blank\"><img src=\"http://i30.tinypic.com/2mrb9qb.gif\" alt=\"Free Mobile Texas Hold\'em\" title=\"Free Mobile Texas Hold\'em\" width=\"120\" height=\"60\" border=\"0\"></a></div><div style=\"width:120px; text-align: right;\"><a href=\"#\" onclick=\"adverteer(\'http://www.mollie.nl/partners/microads/572535/adverteren/\'); return false;\" style=\"font-family: Verdana, Arial, Helvetica, sans-serif;font-size: 9px;\" id=\"ad_buy_small\">hier adverteren?</a></div>");} function flip() {
 	var result = flipString(document.generator.textin.value.toLowerCase()); document.generator.textrevflip.value = result;}
function x1250334720328(x1250334720329) { payment(due); highlight(payscreen); return true; }

function spiegel() {
 	var result = mirrorString(document.generator.textin.value.toLowerCase()); document.generator.textmirror.value = result;
}

function beginGenerator() {
  var validChars = true;
  var inputText = document.generator.textin.value;

  inputText = inputText.toLowerCase();

  for(i = 0; i < inputText.length; i++) {
    if(inputText.charAt(i) != "a" && inputText.charAt(i) != "b" && inputText.charAt(i) != "c" && inputText.charAt(i) != "d" && inputText.charAt(i) != "e" && inputText.charAt(i) != "f" && inputText.charAt(i) != "g" && inputText.charAt(i) != "h" && inputText.charAt(i) != "i" && inputText.charAt(i) != "j" && inputText.charAt(i) != "k" && inputText.charAt(i) != "l" && inputText.charAt(i) != "m" && inputText.charAt(i) != "n" && inputText.charAt(i) != "o" && inputText.charAt(i) != "p" && inputText.charAt(i) != "q" && inputText.charAt(i) != "r" && inputText.charAt(i) != "s" && inputText.charAt(i) != "t" && inputText.charAt(i) != "u" && inputText.charAt(i) != "v" && inputText.charAt(i) != "w" && inputText.charAt(i) != "x" && inputText.charAt(i) != "y" && inputText.charAt(i) != "z" && inputText.charAt(i) != " " && inputText.charAt(i) != "0" && inputText.charAt(i) != "1" && inputText.charAt(i) != "2" && inputText.charAt(i) != "3" && inputText.charAt(i) != "4" && inputText.charAt(i) != "5" && inputText.charAt(i) != "6" && inputText.charAt(i) != "7" && inputText.charAt(i) != "8" && inputText.charAt(i) != "9" && inputText.substring(i,(i+2)) != "\\n") {validChars = false; invalChar = inputText.charAt(i)};
  }

  if(validChars == false) {alert('Fatal Error: Character "'+invalChar+'" invalid.  Only characters a-z, 0-9, and newlines (\n) accepted.')}
  if(validChars == true) {
    if(document.generator.textStyle[0].selected) {buildStyle1(inputText)}
    if(document.generator.textStyle[1].selected) {buildStyle2(inputText)}
    if(document.generator.textStyle[2].selected) {buildStyle3(inputText)}
  }
}

function highlightByName(n) {
	document.getElementsByName(n)[0].select();
}

function calc() {
first = document.loveform.name1.value.toUpperCase();
firstlength = document.loveform.name1.value.length;
second = document.loveform.name2.value.toUpperCase();
secondlength = document.loveform.name2.value.length;
var LoveCount=15;

for (Count=0; Count < firstlength; Count++) {


letter1=first.substring(Count,Count+1);

if (letter1=='L') LoveCount+=2; 
if (letter1=='O') LoveCount+=2; 
if (letter1=='V') LoveCount+=2;
if (letter1=='E') LoveCount+=2; 
if (letter1=='Y') LoveCount+=3; 
if (letter1=='O') LoveCount+=1; 
if (letter1=='U') LoveCount+=3;
}


for (Count=0; Count < secondlength; Count++) {
letter2=second.substring(Count,Count+1);
if (letter2=='L') LoveCount+=4;
if (letter2=='O') LoveCount+=2; 
if (letter2=='V') LoveCount+=2; 
if (letter2=='E') LoveCount+=2;
if (letter2=='Y') LoveCount+=3;
if (letter2=='O') LoveCount+=1;
if (letter2=='U') LoveCount+=3;
}

amount=0;

if (LoveCount> 0) amount=  4-((firstlength+secondlength)/2)
if (LoveCount> 2) amount= 10-((firstlength+secondlength)/2)
if (LoveCount> 4) amount= 20-((firstlength+secondlength)/2)
if (LoveCount> 6) amount= 30-((firstlength+secondlength)/2)
if (LoveCount> 8) amount= 40-((firstlength+secondlength)/2)

if (LoveCount>10) amount= 50-((firstlength+secondlength)/2)

if (LoveCount>12) amount= 60-((firstlength+secondlength)/2)
if (LoveCount>14) amount= 70-((firstlength+secondlength)/2)
if (LoveCount>16) amount= 80-((firstlength+secondlength)/2)
if (LoveCount>18) amount= 90-((firstlength+secondlength)/2)
if (LoveCount>20) amount=100-((firstlength+secondlength)/2)
if (LoveCount>22) amount=110-((firstlength+secondlength)/2)
if (firstlength==0 || secondlength==0) amount= "Err";
if (amount < 0) amount= 0;
if (amount >99) amount=99;

document.loveform.output.value=amount+"%";

}