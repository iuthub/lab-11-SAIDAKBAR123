//alert("Hello World!");

function textChangeForm(){
document.getElementById("textInside").style.fontSize='24pt';

}
function checkForm(){
    var check=document.getElementById("myCheck");
    var text=document.getElementById("textInside");
    if(check.checked == true){
        text.style.fontWeight='bold';
        text.style.textDecoration='underline';
        text.style.color='green';
    }
    else{

text.style.fontWeight='normal';
text.style.textDecoration='';
        text.style.textDecoration='';
        text.style.color='';
    }
}

function Snoopfy(){
    var str=document.getElementById("textInside").value;

var parts = str.split("."); 
console.log(parts);

str = parts.join(" ");
str=str+'-izzle.';
document.getElementById("textInside").value=str;
console.log(str);
}