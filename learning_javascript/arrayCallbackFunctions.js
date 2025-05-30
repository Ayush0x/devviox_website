const arr=[1,2,-5,6,3,-7,-9,4,8];

const firstNegative = (num) => {
    return num<0;
}

const res=arr.find(firstNegative); 

console.log(res); // -5