// function greeting(name){
//     console.log("good morning "+ name)
// }
// greeting("shahana");
// greeting("shifana");


// function sum(a,b){
//    return (a+b)
// }

//  var ressult=sum(30,3)
//  console.log(ressult)


//hello world
// function msg(){
//     console.log("Hello world")
// }
// msg();


//square of a number
// function sqr(a){
//     console.log(a*a)
// }
// sqr(5);
 

// area of a rectangle
// function area(a,b){
//     console.log(a*b)
// }
// area(2,5)


//convert Celsius to Fahrenheit?
// function celcius(c){
//     console.log((c * 9/5) + 32);
// }
// celcius(5);



 //factorial
// function factorial(num){
//     if(num<0){
//         return console.log("Negative number has not factorial")
//     }
//     else if(num==0 || num==1){
//         return console.log("factorial of the" + num+ "= 1")
//     }
//     else{
//         let fact=1;
//         for(i=1; i<=num; i++){
//             fact*=i
//         }
//         return fact
//     }
// }
// num=5
// num=factorial(num)
// console.log(num)
 



//random
// function random(){

//     let randomnum =Math.round(Math.random()*(100))
//     return randomnum
// }

// result=random()
// console.log(result)


//pallindrom
function palli(num){
    let check=num.toLowerCase();
    let reverse=num.split('').reverse().join('');
    return  check===reverse
      
}
 let num="malayalam"
 result=palli(num )
console.log("The given number is pallindrom?"+result)



//prime

// function prime(num){
//     if(num<=1 || num>2&& num%2==0 || num>3&&num%3==0 ||  num>5&&num%5==0){
//         return ("The given number is not a prime number")
//     }
//     else{
//       return ("The given number is a prime number")
//     }
    
// }
// let num=2
//  let result=prime(num)
// console.log(result)



let num=5;
for(i=1; i<=num; i++){
    let row=""
  for(j=1; j<=num; j++){
    if(i==1 || i==num){
       row+="* "
    }
    else {
        row+="- "
    }
  }
  console.log(row)
}



























































