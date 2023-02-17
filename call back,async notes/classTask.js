function deliverymade(){
    console.log("Thank your delivery was maded....")
}
function  pickupaproduct(name,callback){
      console.log(`hi ${name} your are pickuped 7 product`)
    callback(name);

}
function numberofproducts(name,callback){
  console.log(`hi  wyour order fulfilled`)
callback(name);

} 
function dispatchdone (name,callback){
  console.log(`hi ${name} your order are dispatched`)
callback(name);

}  
function personhastoregister(name,callback){
  console.log(`hi ${name} your succesfully registered`)
callback(name);

}
personhastoregister("sanjay",(name)=>{
  pickupaproduct(name,(name)=>{
      numberofproducts(name,(name)=>{
         dispatchdone(name,(name)=>{
            deliverymade();
         })
      })
  })
})