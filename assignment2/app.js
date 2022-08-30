import merge from './merge.js'

// if anyone is looking at this I highly recommend walking through this  line by line in the dev tools
// so you can see the values for each variable and where you are in the call stack.
// it helped me a lot

const arr = [1,0,2,6,9,4,5]

function mergeSort(arr) {
    // base case for the arrays being split
    if(arr.length <= 1) return arr
    // split the array into halves by recursive calling mergesort on the left and right halves
    // until we have single element arrays or empty arrays

    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    // use our merge function to merge the two halves back, in sorted order
    return merge(left, right)


}
console.log(mergeSort(arr)) 


