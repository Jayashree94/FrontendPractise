const radius = [2,3,4,5];


function calculate(radius, logic){
    const output =[];
for(i=0;i<radius.length;i++){

    output.push(logic(radius[i]))
}
return output;
}
function area(radius){
    return Math.PI * radius * radius;
}

console.log(calculate(radius,area))