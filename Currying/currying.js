//let multiply = function (x,y){
//    console.log(x*y);
//}

//let multiplybytwo = multiply.bind(this,2);
//multiplybytwo(4);

let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

const curriedmultiply = multiply(2);
curriedmultiply(7);