

// // PROMPT NOT ELIGIBLE IN VS CODE

// let age = prompt("what is your age")
// age = Number.parseInt(age)
// if (age>10 && age<=20) {
//     console.log("you are kid")
// }
// else {
//     console.log("you are eligible")
// }
// let age = 19
// let a = age>18 ? "you can drive" : "you cannot drive"
// console . log (a)

// function bhai(b+v) {
//     return 4 + (b+y)/2
//   }
//   let a3 = 1;
//   let a4 = 2;
//   let a5 = 3;
//   console.log("Avarage Velocity is",bhai(a3,a4))
  
//   console .log("Avarage Velocity is",bhai(a5,a3))
  
//   console .log("Avarage Velocity is",bhai(a4,a5))
// let calculation = '';
// let user = prompt("Enter Rock , Paper or Seizur" )
// let cpuI = Math.floor(Math.random()*3);
// let cpu = ["Rock", "Paper","seizure"][cpuI]
// const match = (cpu ,user)=>{
//   if (cpu === user) {
//      return 0

// }
// else if (cpu === "Rock" && user === "Seizure"){
//   return "cpu"
// }
// else if (cpu === "Rock" && user === "Paper"){
//   return "user"
// }
// else if (cpu === "Paper" && user === "Seizure"){
//   return "user"
// }
// else if (cpu === "Seizure" && user === "Rock"){
//   return "user"
// }
// else if (cpu === "Paper" && user === "Rock"){
//   return "cpu"
// }
// else if (cpu === "Paper" && user === "Seizure"){
//   return "user"
// }
// }
// let result = match(cpu,user)
// document.write(`CPU:${cpu} <br> User: ${user} <br>The winner is : ${result.toUpperCase()} `)

// // console.log ("bashar")
// // let a ="nice";
// // console.log(a)
// // var f = "good";
// // console.log(f)

// // // nn bb ss u
// // // const item = {
// // //   "saad": true,
// // //   "mahad" : false,
// // //   "cake" : ball,  
// // // }
// // // console.log(item["mahad"])
// // let full = "bashar"
// // let bull = "sheikh"
// // console.log(full + bull)
// // console.log(typeof (full+bull))
// // let g = 56;
// //   let r = 34;
// //   console.log("g+r=",g+r)
// // console.log("g-r=",g-r)
// // console.log("g*r=",g*r)

// // for(
// //   let a = 9; a < 100; a++
    
// // ){
// //   console.log(a)
// // }
// // chap 1 pratice

// const item = {
//   "bashar" : true,
//   "frog" : false 
// }
// console.log(item["bashar"])
// let z = 7;
//   let t = 12;
//   console.log("z+t=",z+t)

// console.log(typeof(z))

// const a7 = {
//   name: "bashar",
//   Section: 1,
  
// }
// console.log(a7)

// const dic ={
//   good: "best",
//   improve: " try to raise up"
// }
// console.log(dic.good,dic.improve)
// // chap 2 practice
// // let age = prompt("what is your age")
// // age = Number.parseInt(age)
// // if (age>10 && age<=20) {
// //     console.log("you are kid")
// // }
// // else {
// //     console.log("you are eligible")
// // }
// // let age = 19
// // let a = age>18 ? "you can drive" : "you cannot drive"
// // console . log (a)

// // chap 3 practice

// // FOR LOOP

// for (let i = 0; i<5; i++){
//   console.log(i)
// }
// let hz= {
//   usman:23,
//   hamza:34,
//   Mahad:67
// }
// // FOR IN LOOP
// for (
//   let a in hz){
//   console.log("Marks of " + a + " are " + hz[a])  }
// // FOR OF LOOP
// for (
//   let a1 of "bashar"){
//   console.log(a1)  }
// // while loop
// let n = prompt("enter the value")
// n = Number.parseInt(n)
// let i = 4;
// while (i<n) {
//  console.log(i) 
//    i++;
// }
// // do while looop
// let s = prompt("enter the value")
// s = Number.parseInt(s)
// let i = 4;
// do {
//  console.log(i) 
//    i++;
// }while (i<s) 

// // functions

// function bhai(b+v) {
//   console.log ("done")
//   return 4 + (b+y)/2
// }
// let a3 = 1;
// let a4 = 2;
// let a5 = 3:
// console .log("Avarage Velocity is",bhai(a3,a4))

// strings CHAP 4

// let name = "bashar"
// let a = "this is ${name}"

// // ARRAYS

// // concat

// let num = [1,2,3,4]

// let a1 = [1,2,3]

// let a2 = [421,422,423]

// let a3 = [21,22,23]
// let newArray = num.concat(a1,a2,a3)
// console.log(newArray)
// console.log(num,a1,a2,a3)

// // use SPLICE AND SLICE IN NOTES

// // FOR OF LOOP IN ARRAY
// let num = [1,2,3,4]
// for (let i of num) {
//    console.log(i) //it is easy me thod for print all numbers
// }

// // for each loop array

// num.forEach((element)=>{
//   console.log(element*element)
// })

// // map array

// let arr =[ 23,45,67]
// let a = arr.map ((value)=>{
//   console.log(value)
//   return value +1
// })
// console.log (a)

// array filter function
// let arr3 =[ 23,453,67]
// let a2 = arr3.filter((a)=>{
//   return  a<100
// })
// console.log (a2)

// array reduce method
// game of rock paper seizure

// attribute
// let a = first.getAttribute("class")
// console.log (a)

// // class list

// first.className = "text-black  red"
// first.class.remove = " red"

// // set time out

// alert('hello')
// setTimeout alert(message?: any): void {
// alert('i am')
// }, 2000

// events

{/* <div>
    <button onclick = "alert('container ha' )">click here</button>
  </div> */}

  // pr0mises

  // let p1 = new Promise((resolve,reject)=>{
  //   console.log('promise is pending')
  //   setTimeout(()=>{
  //     console.log("i am promise ")
  //     resolve(true)
  //   },5000)
  // })
  // let p2 = new Promise((resolve,reject)=>{
    //   console.log('promise is pending')
    //   setTimeout(()=>{
    //     console.log("i am promise ")
    //     reject(new Error("i am an error"))
    //   },5000)
    // })
  

//   console.log(p1,p2)

//   let p1 = new Promise((resolve,reject)=>{
//     console.log('promise is pending')
//     setTimeout(()=>{
//       console.log("i am promise ")
//       resolve(true)
//     },5000)
//     })
      
// .p1.then(()=>{
 
//   setTimeout(()=>{
//      console.log(congratulations)
//   }2000)
// })

// let promise_all = Promise.all[p1,p2,p3]
// promise_all.then((value)=>{
//     cosole.log(value)
// })

// VERY VERY SPECIAL
// it is use to run javascript if error occur
// //try{
//   console.log(bashar)
// }
// catch(error){
//   console.log(bashar)
// }

//it is used to run always if error occur 
//finally{
 // console.log()
//}

// ASYNC

// let p1 = async()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(10)
//     })
//   },3000)
// }
// let p2 = async()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() =>{
//       resolve(10)
//     })
//   },5000)
// }
// let p3 = async()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(10)
//     })
//   },6000)
// }

// const run = async()=>{
//   console.log('run')

//   let a1 = p1()
//   let a2 = p2()
//   let a3 = p3()
// let a1a2a3 = await Promise.all([a1,a2,a3])
//   console.log(a1a2a3)
//   console.timeEnd('run')
// }
// run()

// FETCH API

// let p = fetch(link)

// // JAVASCRIPT COOKIE
// alert(document.cookie)

// let key = prompt("enter your key")
// let key = prompt("enter your value")
// document.cookie = ${encodeURIComponent(key)}=${encodeURIComponent(value)}
// console.log(document.cookie)

//local storage it stORE DATA PARMANENTLY IN INSPECT IN APPLICATION IN LOCAL STORAGE

// let key = prompt("Enter your key")
// let value = prompt("Enter your value")
// localStorage.setItem(key,value)
// console.log(`the value at ${key} is ${localStorage.getItem(key)}`)
// localStorage.clear to clear all
 
// || use like OR and == use for =

// OBJECT ORIENTED

// class and object

// class RailwayForm{
//   submit(){
//     alert(this.name + ":Your Fom is Submitted for train no is" + ":this.trainno")
    
//   }
//   cancel(){
//     alert(this.name + ": This form is cancelled")

//   }
//   fill(givenname){
//     this.name=givenname
//this.trainno = trainno
//   }
// }
// // create a form for harry
// let harryForm = new RaailwayForm()

// // fill the form with  harry details
// harryForm.fill("harry", 320420)
// // create a form for harry
// let saadForm = new RaailwayForm()
// // ffill the form with saad details
// saadForm.fill("saad",320427)

// harryForm.submit()
// saadForm.submit()
// saadForm.submit()

//Advance JavaScript 

// Destructuring

// let arr = [ 3, 4,6]
// ler [a,b,c] = arr
// console.log(a,b,c,d)

// Arrow Function

// const sayHello = (name, greeting) =>{
//   console.log (greeting + ""+ name)
// }
// const x = {
//   name: "Bashar",
//   Role : "Js Coder",
// Exp: 4,
// babar function() {
//   setTimeout(()=>{
//     console.log(`The name is ${this.name}\nThe role is ${this.role}`)
//   },2000)
// }


// }
// x.babar{}


