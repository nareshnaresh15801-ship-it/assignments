function task(){
    console.log("Task complete");    
}
function  ar(callback){
    console.log("on Task");
    setTimeout(()=>{
        callback();

    },4000);
    
}
ar(task);
