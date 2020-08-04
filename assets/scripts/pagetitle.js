var message="selmankon.github.io      "
var neonbasecolor="white"
var neontextcolor="#55ffc5"
var neontextcolor2="#fff"
var flashspeed=100                 
var flashingletters=24                  
var flashingletters2=0                  
var flashpause=0                  
 
var n=0
if (document.all||document.getElementById){
    document.write('<font color="'+neonbasecolor+'">')
    for (m=0;m<message.length;m++)
        document.write('<span id="neonlight'+m+'">'+message.charAt(m)+'</span>')
        document.write('</font>')
}
else document.write(message)
 
function crossref(number){
    var crossobj=document.all? eval("document.all.neonlight"+number) : document.getElementById("neonlight"+number)
    return crossobj
}
 
function neon(){
 
    if (n==0){
        for (m=0;m<message.length;m++)
        crossref(m).style.color=neonbasecolor
    }
 
    crossref(n).style.color=neontextcolor
 
    if (n>flashingletters-1) crossref(n-flashingletters).style.color=neontextcolor2 
    if (n>(flashingletters+flashingletters2)-1) crossref(n-flashingletters-flashingletters2).style.color=neonbasecolor
 
    if (n<message.length-1)
        n++
    else{
        n=0
        clearInterval(flashing)
        setTimeout("beginneon()",flashpause)
        return
    }
}
 
    function beginneon(){
        if (document.all||document.getElementById)
        flashing=setInterval("neon()",flashspeed)
    }
beginneon()
 