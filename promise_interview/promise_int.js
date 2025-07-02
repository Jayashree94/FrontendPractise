const p1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("p1 success")
    }, 3000)
})
const p2 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        reject("p2 fail")
    }, 1000)
})
const p3 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("p3 success")
    }, 2000)
})
//Promise.all([p1,p2,p3])
//.then(res => console.log(res))
//.catch(err=> console.log(err))

//Promise.allSettled([p1,p2,p3])
//.then(res => console.log(res))
//.catch(err => console.log(err))


//Promise.race([p1,p2,p3])
//.then(res => console.log(res))
//.catch(err => console.log(err))

Promise.any([p1,p2,p3])
.then(res => console.log(res))
.catch(err => console.log(err))
