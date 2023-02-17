// // creating element

// //  div,span,h1,etc-->element

// let newelement=document.createElement("div");
// newelement.style.backgrounColor="green"
// newelement.style.color="red"
// // inner text
// // newelement.innerText="i am inner text"
// // inner html
// newelement.innerHTML=`<div>
// <h1 style="backgroundColor:green;">i m inner html</h1></div>`
// // set attributes
// let setatributes=newelement.setAttribute("class","sample");



// // get element by id
// var inbuildelement=document.getElementById("sample-id");
// inbuildelement.innerText="js intro over id"
// inbuildelement.style.backgroundColor="red";


// var demopara=document.getElementById("para")
// // demopara.innerText="i am changed     to innertext"
// console.log(para.innerText);
// // demopara.textContent="i am changed    to text content"
// console.log(para.textContent);

// // query selector
// var queryselector =document.querySelector('.sample-class')
// queryselector.style.color="yellow"

// //quer selector all

//  var queryall=document.querySelectorAll(".sample-class");

// //  console.log(queryall);

// for(i=0;i<queryall.length;i++){
//   // console.log(queryall[i]);
//   queryall[i].style.color="green"
//   queryall[i].innerText="js class over"

// }

//   document.body.append(newelement);
//   // console.log(document);


// // apend vs apenchild

// const newdevision=document.createElement("div")
// newdevision.setAttribute("id","newdiv")
// newdivision.textContent="i am from apend"

// newelement.append(newdivision,"hey there")
// // newelement.appendChild(newdivision)

// console.log(newelement)
// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------

// alert ,prompt, confirm(itha run panni pakumboothu munnadi ula script acommand pannidanum)
// function alertFunction(message){
//   alert(message)
// }

// let promptElement =document.createElement("div")
// document.body.append(promptElement);

// function promptFuntion(){
//   let answer =prompt("hey")
//   if(answer!=null){
//     promptElement.textContent="i am prompt"
//   }
// }

// function confirmFunction(){
//   let response=confirm("i am confirm");
//   if(response==true){
//     promptElement.textContent="i am true"
//   }
//   else{
//     promptElement.textContent="i am false"
//   }
// }

// //  set timout:

// let count = 10;
// function timeOut(){
//   promptElement.textContent=count;
//   count--;
//   const id=setTimeout(timeOut,1000);
//   if(count==0){
//     clearTimeout(id);
//     promptElement.textContent="your time is up"
//   }
// }

// function interval(){
// let ourInterval=setInterval(()=>{
//   promptElement.textContent=count
//   count--;
//   if(count===0){
//     clearInterval(ourInterval)
//     promptElement.textContent="time is over"
//   }
// },1000)
// }

let addbtn=document.getElementById("btn");
addbtn.addEventListener("moousedown",()=>{
    document.body.style.backgroundColor="blue"
})
addbtn.addEventListener("moouseup",()=>{
  document.body.style.backgroundColor="red"
})
