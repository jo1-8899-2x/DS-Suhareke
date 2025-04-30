/*var input =document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text=document.getElementById('teksti_id');

button.onclick=function(){
    text.innerHTML=input.value;
}*/

/*var text="The best school in the world is Digital School";
var result=text.search("Digital School");
document.getElementById("result1").innerHTML = result;*/

/*var text="The best school in the world is Digital School";
var result=text.search(/Digital School/);
document.getElementById("result2").innerHTML=result;*/

/*var text="The best school in the world is Digital School";
var result=text.replace(/Digital School/,"Another School");
document.getElementById("result3").innerHTML=result;*/

/*var text="abcdef";
var regex=new RegExp('abc');
document.getElementById("result4").innerHTML=regex.test(text)0;*/

/*var text="My school is the best school in the world";
var regex=/school/g;
document.getElementById("result5").innerHTML=regex.match(regex);*/

/*var text="My school is the best school in the world";
var regex=/i/g;
document.getElementById("result6").innerHTML=text.match(regex);*/

var text="The best school in the world is Digital School";
var regex=/[abc]/g;
document.getElementById("result7").innerHTML=text.match(regex);