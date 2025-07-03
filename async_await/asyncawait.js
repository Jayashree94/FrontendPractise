const p = new Promise((resolve, reject) =>{
resolve("promise returned");
})

async function getdata(){
    //always return a promise
    return p;
}

const dataPromise = getdata();
getdata().then(res=>console.log(res));