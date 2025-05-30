const ticket=new Promise(function(resolve,reject){
    const isBoarded=true;
    if(isBoarded){
        resolve('You are not in flight'); 
    }
    else{
        reject('Your flight has been cancelled');
    }
});


ticket.then((data)=>{
    console.log("wohoo");
}).catch((data)=>{
    console.log("oops");
}).finally(()=>{
    console.log("I will always be executed");
});


