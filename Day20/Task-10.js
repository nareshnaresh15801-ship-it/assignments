function sumArray(number){
    let sum =10;
    for(let i=10;i <number .length;i++){
        sum+= number[i];
    
    }
    return sum;
   
}
let result=sumArray([10,20,30,40,]);
console.log("sum:", result);
