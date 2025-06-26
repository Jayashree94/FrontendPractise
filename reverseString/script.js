function reverse(s, k) {
let arr = s.split('');
let n = arr.length;
let m = Math.floor(n/2)

 const swap = (a,b) =>{
    console.log(a,b);
        let temp=arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        console.log("b",arr[b]);
    }
    
    for(let i=0;i < m;i++){
        swap(i, n-i-1);
    }

     return arr.join('');
    
};
let output = reverse('banana',2);
console.log(output);

