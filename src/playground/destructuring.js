//const person = {
//    name:'Jane',
//    age:23,
//    location:{
//        city:'zamosc',
//        zipcode:'22-440',
//        street: 'Nowa',
//        number: 9
//    },
//    number:22
//};
//
//let {city:Miasto = 'default'} = person.location;
//
//
//console.log(Miasto);
//

//const dane = ['Kamil','Gebala',23,'Szkolna',9];
//
//let [f,s,t,fth,fif,six='default'] = dane;
//
//console.log(six);


var func = ()=>(
    ()=>(
    ()=>(
    ()=>(
    {name:'tajne'}
    )
    )
    )
);

console.log(func()()()());