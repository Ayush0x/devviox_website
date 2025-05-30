function getCheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const cheese='🧀';
            // console.log('your cheese is ready to be used',cheese);
            resolve(cheese);
        }, 2000);
    });
}

function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dough=cheese+'🍞';
            // console.log('your dough is ready',dough);
            resolve(dough);
        }, 2000);
    });
}

function bakePizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const pizza=dough+'🍕';
            // console.log('your pizza is ready',pizza);
            resolve(pizza);
        }, 2000);
    });
}

// getCheese().then((cheese)=>{
//     console.log('cheese is ready',cheese);
//     return makeDough(cheese);
// }).then((dough)=>{
//     console.log('dough is ready',dough);
//     return bakePizza(dough);
// }).then((pizza)=>{
//     console.log('pizza is ready',pizza);
// }).catch((data)=>{
//     console.log('error',data);
// }).finally(()=>{
//     console.log('Process is ended');
// });

async function makePizza(){
    try{
    const cheese=await getCheese();
    console.log('your cheese is ready',cheese);
    const dough=await makeDough(cheese);
    console.log('your dough is ready',dough);
    const pizza=await bakePizza(dough);
    console.log('your pizza is ready',pizza);
    }
    catch(err){
        console.log('error',err);
    }
    finally{
        console.log('Process is ended');
    }
} 