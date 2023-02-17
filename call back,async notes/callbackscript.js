// call a function when i need

// function registerinhotel(name,callback){
//     console.log(name);
//     callback(name);
// }
// function welcomeguest(name){
//     console.log(`hi ${name} welcome our hotel`)
// }

// registerinhotel("sanjay",(name)=>{
//     welcomeguest(name)
// })



// function greeting(){
//       console.log("Thank you....")
// }
// function welcomeguest(name,callback){
//         console.log(`hi ${name} welcome our hotel`)
//       callback(name);

// }
// function orderfromguest(name,callback){
//     console.log(`hi  wyour order fulfilled`)
//   callback(name);

// } 
// function dispatch (name,callback){
//     console.log(`hi ${name} your order are dispatched`)
//   callback(name);

// }  
// function registerinhotel(name,callback){
//     console.log(`hi ${name} your succesfully registered`)
//   callback(name);

// }
// registerinhotel("sanjay",(name)=>{
//     welcomeguest(name,(name)=>{
//         orderfromguest(name,(name)=>{
//            dispatch(name,(name)=>{
//               greeting();
//            })
//         })
//     })
// })


// // ////promises////
// let taskecompleted=80
// let promise=new promise((resolve,reject)=>{
//   setTimeout(()=>{
//     if(taskecompleted>=75){
//       resolve("your placement is guranteed")
//     }
//     else{
//       reject("sorry you haven't completed the course")
//     }
//   },3000)
// })
// // console.log(promise);
// // setTimeout(()=>{
// //   console.log(promise)
// // },4000)

// // promise={} object
// // gives the result of eventual completion of a operation

// //////----- state of promise
//      //pending() -pending na timeout kudukumbootu 2 second wait pannrapoo athu pending nu varum.
    
//     //  fulfilled(resolve)-namba kudutha condition la pass agi resolve agiduchu na athu thaan fulfilled.
//     //  rejected(rejected) -namba kudutha condition la fail agi reject agiduchu na athu thaan rejected.
//   //  resolve reject and pending   


//   //consumer of promise
//   promise.then((resolvedvalue)=>{
//     console.log(resolvedvalue)
//   }).catch((error)=>{
//     console.log(error)
//   })

  // chaining process

//   let newpromise=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(25)
//     },3000);
//   })

//   newpromise.then((value)=>{
//            console.log(value);
//            return value*2;
//   }
//   ).then((value)=>{
//     console.log(value);
//     return value*3;
// }
// ).then((value)=>{
//   console.log(value);
//   return value*4;
// }
// ).then((value)=>{
//   console.log(value);
// }
// )


// let taskecompleted1=80
// let promise1 = new Promise((resolve,reject)=>{
//     if(taskecompleted1>=75){
//       resolve("your placement is guranteed")
//     }
//     else{
//       reject("sorry you haven't completed the course")
//     }

// })

// let taskecompleted2=80
// let promise2 =new Promise((resolve,reject)=>{
//     if(taskecompleted2>=75){
//       resolve("your placement is guranteed")
//     }
//     else{
//       reject("sorry you haven't completed the course")
//     }

// })
// let taskecompleted3=75
// let promise3=new Promise((resolve,reject)=>{
//     if(taskecompleted3>=75){
//       resolve("your placement is guranteed")
//     }
//     else{
//       reject("sorry you haven't completed the course")
//     }

// })
// Promise.all([promise1,promise2,promise3]).then((resolved)=>{
//   console.log(resolved)
// }).catch((error)=>{
//   console.log(error)
// })


         /////  FETCH  ////
      ///////   confirm    ///////
// fetch("https://restcountries.com/v3.1/all")
// .then((response)=>response.json())
// .then((data)=>{
//   console.log(data);
//   data.forEach(element => {
//     createcountry(element.name.common,element.region,element.capital,element.population,element.flags.png)
//   });
// })
// .catch((err)=>console.log(err))

// function createcountry(name,region,capital,population,flags){
//   document.body.innerHTML +=`
//     <div>
//        <h1>Country Name: ${name}  Region:${region} Capital:${capital} Population:${population} Flags:${flags}</h1>   
//     </div>
//   `
// }


// fetch("https://restcountries.com/v3.1/all")
// .then((response)=>response.json())
// .then((data)=>{
//   console.log(data);
//   data.forEach(element => {
//     const countries={
//       ...element ,
//       name: element.name.common,
//       region: element.region,
//       capital: element.capital,
//       population: element.population,
//       flags: element.flags.png,
//     }
//     createcountry(countries)
//   });
// })
// .catch((err)=>console.log(err))

// function createcountry({name,region,capital,population,flags}){
//   document.body.innerHTML +=`
//     <div>
//        <h1>Country Name: ${name}</h1> <br>
//     <span>Region:${region}</span> <br>
//     <span>Capital:${capital}</span> <br>
//     <span>Population:${population}</span> <br>
//     <span>Flags:${flags}</span>
       
//     </div>
//   `
// }

   ////////       async await   /////////

async function main(){
  try{
    const response= await fetch("https://restcountries.com/v3.1/all")
const data=await response.json();
  data.forEach(element => {
    const countries={
      ...element ,
      name: element.name.common,
      region: element.region,
      capital: element.capital,
      population: element.population,
      flags: element.flags.png,
    }
    createcountry(countries)
  });
  function createcountry({name,region,capital,population,flags}){
    document.body.innerHTML +=`
      <div>
         <h1>Country Name: ${name}</h1> <br>
      <span>Region:${region}</span> <br>
      <span>Capital:${capital}</span> <br>
      <span>Population:${population}</span> <br>
      <span>Flags:${flags}</span>
         
      </div>
    `
  }
}
  
catch(err){
    console.log(err)
  }
}

main();
