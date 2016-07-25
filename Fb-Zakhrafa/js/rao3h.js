var crossobj=document.all? document.all.scrollmenu : document.getElementById("scrollmenu")
var iebody=(document.compatMode && document.compatMode != "BackCompat")? document.documentElement : document.body

function positionit(){
var dsocleft=document.all? iebody.scrollLeft : pageXOffset
var dsoctop=document.all? iebody.scrollTop : pageYOffset

if (document.all||document.getElementById){
crossobj.style.left=parseInt(dsocleft)+0+"px"
crossobj.style.top=dsoctop+12+"px"
}
}
setInterval("positionit()",100);