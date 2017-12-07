console.log(`promiski`);
const promise = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve({name:'Kamko'});
    reject({name:'andre',age:26});    
    },1500);
    
});

console.log(`before`);

promise.then((data)=>{
    console.log(`1`,data.name);
},(error)=>{
    console.log(`error: ${error.name }`);
});

 


console.log(`after`);


