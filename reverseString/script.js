function reverse(s, k) {
let arr = s.split('');
let n = arr.length;
let m = Math.floor(n/2)

 const swap = (a,b) =>{
    console.log(a,b);
        let temp=a;
        a = b;
        b = temp;
        
    }
    
    for(let i=0;i < m;i++){
        swap(arr[i], arr[n-i-1]);
    }

     return arr.join('');
    
};
let output = reverse('banana',2);
console.log(output);

