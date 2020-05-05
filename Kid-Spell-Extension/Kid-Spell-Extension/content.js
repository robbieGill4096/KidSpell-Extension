



var text = window.getSelection().toString();
var current = window.location.href;
if(window.getSelection().toString()){
window.open("https://cast.boisestate.edu/test/splchk.php?word="+text+"&max=5"); 
var bod = document.body;
//window.close();
//window.open(current);
alert(bod.innerText);

   }

     
