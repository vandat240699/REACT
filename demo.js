var array = ['a', 'b', 'c', 'd'];
function logger(...rest){
    for(var i=0; i<rest.length; i++){
        console.log(rest[i]);
    }
}
logger(...array);

function logger(...params){
    console.log(params);
}

console.log(logger(1,2,3,4,5,6,7,8));