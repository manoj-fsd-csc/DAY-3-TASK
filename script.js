//1. Question:-
var obj1 = {name:"Person 1",age:5};
var obj2 = {age:5,name:"Person 1"};

var result = JSON.stringify(obj1);
var result1 = JSON.stringify(obj2);

result===result1;

//2. Question:-

var receiver2 = new XMLHttpRequest();
receiver2.open("GET","https://restcountries.com/v3.1/all",true);
receiver2.send();

receiver2.onload = function(){
    var data = receiver2.response;
    var show2 = JSON.parse(data);
    console.log(show2);
    
    
    for(var i=0; i<show2.length; i++){
        console.log(show2[i].flags.png);
    }
}
//3. question:-

var receiver3 = new XMLHttpRequest();
receiver3.open("GET","https://restcountries.com/v3.1/all",true);
receiver3.send();

receiver3.onload = function(){
    var data = receiver3.response;
    var show3 = JSON.parse(data);
    console.log(show3);
  
     
    for(var i=0; i<show3.length; i++){
        console.log(show3[i].name.common,show3[i].subregion,show3[i].population);
    }
}
