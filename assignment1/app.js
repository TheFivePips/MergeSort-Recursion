
function fib(n){
    let arr = [0,1]
    for(let i = 0; i < n-2; i++ ){
        arr.push(arr[i] + arr[i+1])

    }
    return arr
}
console.log(fib(8))



function fibRecursive(n, arr = [0, 1]) {
    // return the array if the length of the array is greater or equal to n (if its less it returns the default [0,1]))
    if (arr.length >= n) return arr;
    // each recursive call increases the length of the array (unitl the length is greater or equal to n).
    // this allows us to calculate the next call using the new array with increased length
    return fibRecursive(n, [...arr, arr[arr.length - 1] + arr[arr.length - 2]]);
  };

console.log(fibRecursive(8));

