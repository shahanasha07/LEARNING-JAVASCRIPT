// problem1
var a=10;
  var b=5;
  var sum=a+b;
  var difference=a-b;
  var Product=a*b;
  var quotient=a/b;
console.log("The sum is:",sum);
console.log("The difference is:",difference);
console.log("The Product is:",Product);
console.log("The quotient is:",quotient);


// problem2
var firstname="fathima ";
var lastname="shahana";
var fullname=firstname+lastname;
 console.log( "fullname is:",fullname);


 // problem3
 var temperature=50;
 if(temperature>30){
    console.log("it's hot outside"); 
 }
 else{
  console.log("it's not hot outside"); 
 }


  // problem4
  var num=8;
  if(num%2==0){
    console.log("The number is even");
  }
  else{
    console.log("The number is odd");
  }

    // problem5
    var age=19;
    if(age>=18){
      console.log("You are an adult");
    }
    else{
      console.log("you are an minor");
    }


    //problem6
    var x=15;
    var y=10;
    if(x>y){
      console.log("X is grater than Y");
    }
    else{
      console.log("Y is grater than X");
    }

    //problem7
    var width=5;
    var length=5;
    var area=width*length;
    if(area>20){
      console.log(area,":The area is large");
    }
    else{
      console.log(area,": The area is small");
    }


    // //problem8
    // var x=prompt("enter value");
    // if(x>10){
    //   console.log("Grater than 10");
    // }
    // else{
    //   console.log("Less than 10");
    // }


//problem9
var n=42;
if(n%5==0){
  console.log("Multiple of 5");
}
else{
  console.log("not mulple of 5")
}

//problem10
var temp=-4;
if(temp<0){
  console.log("bellow freezing");
}

//problem11
var age=15;
if(age>13 && age<19){
  console.log("Teenager");
}
else{
  console.log("affs");
}


//positve or negative
var num=-10;
if(num>0){
  console.log("The number is positive");
}else if(num<0){
  console.log("The number is negative");
}else{
  console.log("The number is zero");
}


//time
var time=26;
if(time>0 && time<=11){
  console.log("morning");
}else if(time>=12 && time<=17){
  console.log("afternoon");
}else if(time>=18 && time<=24){
  console.log("evening");
}else{
  console.log("invalid time")
}


//empty
var str="hgh";
if(str==""){
  console.log("Empty");
}else if(str!=""){
  console.log("Not Empty");
}

//age
var age=5;
if(age>=1 && age<=10){
  console.log("small")
}else if(age>=11 && age<=50){
  console.log("Medium");
}
else{
  console.log("Large");
}

//url
var url="httpsdffdf";
if(url.startsWith ("https")){
  console.log("secure");
}else{
  console.log("insecure");
}

//weather
var weather="cloudy";
if(weather=="sunny"){
  console.log("wear sunscreen");
}else if(weather=="rainy"){
  console.log("Bring an umbrella");
}else if(weather=="cloudy"){
  console.log("wear a light jacket");
}
else{
  console.log("check the forecast again")
}

//traffic
var traffic="green";
if(traffic=="green"){
  console.log("Go!");
}
else if(traffic=="yellow"){
  console.log("Caution!");
}
else{
  console.log("Stop!");
}

//day
var day="monday";
if(day=="monday"){
  console.log("Back to work");
}else if(day=="friday"){
  console.log("Almost weekend");
}else if(day=="saturday"){
  console.log("weekend")
}else{
  console.log("just another day");
}


//grade
// var grade=prompt("enter your grade");
var grade=95;
if(grade>=90 && grade<=100){
  console.log("A Grade");
}else if(grade>=80 && grade<=89){
  console.log("B Grade");
}else if(grade>=70 && grade<=79){
  console.log("C Grade");
}else if(grade>=60 && grade<=69){
  console.log("D Grade");
}else if(grade<60){
  console.log("failed");
}


 
  