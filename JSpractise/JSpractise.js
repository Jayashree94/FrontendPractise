console.log("start");
setTimeout(function cb(){
    console.log("Call back");

},5000);

let startDate = new Date().getTime();
endDate = startDate;
while(endDate<startDate + 10000){
console.log("start date "+ startDate);

endDate = new Date().getTime();
console.log("enddate: " + endDate) 
}
console.log('while goes out"')