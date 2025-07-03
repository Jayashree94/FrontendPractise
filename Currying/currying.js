let multiply = function (x,y){
    console.log(x*y);
}

let multiplybytwo = multiply.bind(this,2);
multiplybytwo(4);