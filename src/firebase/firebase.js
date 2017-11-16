import * as firebase from 'firebase';



  const config = {
    apiKey: "AIzaSyAAAlXw25_NHeCpw7gnG7e0GUq2m23Q7Zo",
    authDomain: "expensify-52842.firebaseapp.com",
    databaseURL: "https://expensify-52842.firebaseio.com",
    projectId: "expensify-52842",
    storageBucket: "expensify-52842.appspot.com",
    messagingSenderId: "258391667451"
  };

  firebase.initializeApp(config);
const database = firebase.database();



export {firebase,database as default};
        
        
        
        

//
//database.ref(`expenses`).push({description: `Rent` ,amount: 1000 ,createdAt:1468 ,note:`none`});
//database.ref(`expenses`).push({description: `water bill` ,amount:300 ,createdAt: 567,note:``});
//database.ref(`expenses`).push({description:`gas bill` ,amount: 400 ,createdAt:1200 ,note:``});
//
//
//
//
//
//database.ref(`expenses`)
//    .once(`value`)
//    .then((snapshot)=>{
//    const expenses = [];
//    
//    snapshot.forEach((childSnapshot)=>{
//        expenses.push({
//            id:childSnapshot.key,
//            ...childSnapshot.val()
//        });
//    });
//    
//    console.log(expenses);
//});
//
//database.ref(`expenses`).on(`child_removed`,(snapshot)=>{
//    
//   console.log(`DELETED`,snapshot.key,snapshot.val()); 
//});
//
//database.ref(`expenses`).on(`child_changed`,(snapshot)=>{
//    
//   console.log(`UPDATED`,snapshot.key,snapshot.val()); 
//});
//
//database.ref(`expenses`).on(`child_added`,(snapshot)=>{
//    
//   console.log(`ADDED`,snapshot.key,snapshot.val()); 
//});
//
//setTimeout(()=>{
//    database.ref(`expenses`).push({description:`xgas bill` ,amount: 4200 ,createdAt:11200 ,note:`1`})
//},5000);
//



//
//database.ref(`notes`).push({
//    title:`Todo `,
//    body:`to add body `
//});


//const firebaseNotes = {
//notes: {
//    adasdad:{
//         title:`this is my node`,
//    body:`body node`
//    },
//    asdfasf:{
//          title:`Another Node`,
//    body:`body node2`
//    }
//}    
//};
//
//
//
//database.ref(`notes`).set(notes);

//database.ref().on(`value`,(snapshot)=>{
//    const val = snapshot.val();
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//});
//
//setTimeout(()=>{
//    database.ref().set({
//       name:`Mike`,
//        job:{
//            title:`Project Architect`,
//            company:`Microsoft`
//        }
//    });
//},3000);

//database.ref()
//    .once('value')
//    .then((snapshot)=>{
//    const val = snapshot.val();
//    console.log(val);
//    }).catch((e)=>{
//    console.log(`error fetching data `,e);
//    });


// ref > referencja
// set > przypisuje(nadpisuje)
// .ref('age') przypisuje wartosc do wlasciwosci 'age'

//database.ref().set({
//   name:'Andrew Mead',
//    age:26,
//    isSingle:true,
//    job:{
//        title:`software developer`,
//        company:`Google`
//    },
//    stressLevel:6,
//    location:{
//        city:'Philadelphia',
//        country:'United States'
//    }
//}).then(()=>{
//    console.log(`data is saved`);
//}).catch((e)=>{
//    console.log(`something is wrong`,e);
//});
//
//database.ref().update({
//    stressLevel:9,
//    'job/company':`Amazon`,
//    'location/city':`Seattle`
//});



//
//database.ref(`attributes`).set({
//    height:180,
//    weight:80
//}).then(()=>{
//    console.log(`second set call works`);
//}).catch((e)=>{
//    console.log(`Things didnt for the second error`,e);
//});

//
//database.ref().update({
//    job:`mida dev`,
//   'location/city':`NY`
//}).then(()=>{
//    console.log(`updates works`);
//}).catch((e)=>{
//    console.log(`Things didnt for the third error`,e);
//})


//
//database.ref(`isSingle`)
//    .remove()
//    .then(()=>{
//     console.log(`usunieto isSingle`);
//}).catch((e)=>{
//    console.log(`Something is wrong: ${e}`);
//});
//database.ref(`isSingle`).set(null);


//console.log(`I made a request to change data`);