const p = new Promise((resolve, reject) =>{
resolve("promise returned");
})

async function getdata(){
    //always return a promise
    const val = await p;
    //only used inside async
}

////////////////////////////////////////////

function getdata1(){
    return p;
}

const dataPromise2 = getdata1();
dataPromise2().then(res=>console.log(res));