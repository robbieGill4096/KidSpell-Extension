const input = document.querySelector('input');
const log = document.getElementById('values');



//right now this can only be fed in a single word at a time and will give suggestions for everything including correctly spelled words. I plan on only plugging values into this that have been identifed as incorrect only when the user highlights the word and expects the list of suggestions to appear.
input.addEventListener('input', updateValue);

function updateValue(e) {
    textContent = e.target.value;
  //log.textContent = e.target.value;
    
    
    var selectionArr = textContent.split(" ");

  //log.textContent = `You selected: ${selection}`;
//console.log(selection);

for(let i=0;i< selectionArr.length; i++){
fetch('https://cast.boisestate.edu/test/splchk.php?word='+selectionArr[i]+'&max=5')
.then(res => res.text())// your code
.then(res => res =res.split(','))// your code
.then(data => passer(data))
	}
    
console.clear();
}
function passer(arrVal){
//console.log(arrVal[0].substring(15,arrVal[0].length));//original value
//console.log(arrVal[1].substring(24,arrVal[1].length));
//console.log(arrVal[2].substring(5,arrVal[2].length));
//console.log(arrVal[3].substring(5,arrVal[3].length));
//console.log(arrVal[4].substring(5,arrVal[3].length));

//console.log(arrVal[5].substring(5,arrVal[5].length-6));//last suggestion	
//console.log('-------------------');
    
    

document.getElementById("Suggestion1").innerHTML=arrVal[0].substring(15,arrVal[0].length);
document.getElementById("Suggestion2").innerHTML=arrVal[1].substring(24,arrVal[1].length);
document.getElementById("Suggestion3").innerHTML=arrVal[2].substring(5,arrVal[2].length);
document.getElementById("Suggestion4").innerHTML=arrVal[3].substring(5,arrVal[3].length);
document.getElementById("Suggestion5").innerHTML=arrVal[4].substring(5,arrVal[3].length);

}



    





