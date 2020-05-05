


            function sendToPage(){
                var input = document.getElementById("search").value;
                 alert(input);
                if (true){
                    location.href = "https://cast.boisestate.edu/test/splchk.php?word="+input+"&max=5";
                    return false;
                }
                else if (input == "sad"){
                    location.href = "suggestion_sad.html";
                    return false;
                }
                else {
                    alert('Invalid Input.');
                }
                    }
//input type="text" method="put" id="search" placeholder="Search" value=""
//input type='submit' onclick="sendToPage();
//if(window.getSelection().toString()){
//var text = window.getSelection().toString();
//alert(text);
//}

//var a=0;
//function count() {
//var text = window.getSelection().toString();
//alert(text);
//alert("w hy");

    //a++;
    //document.getElementById('demo').textContent = a;
//}
//document.getElementById('do-count').onclick = count;
//msg;




//<input type="button" value="Click me" onclick="msg()">
//function msg() {
//var text = window.getSelection().toString();
  //alert(text);
//}
//var selection = window.getSelection();
//var selectionText = selection.anchorNode.textContent

