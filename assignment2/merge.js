
// merge two sorted arrays

export default function merge(arr1, arr2) {
    let mergedArray = []
    let i = 0
    let j = 0
    // while there is something in each array to work with we compare the smallest numbers (the first items of the array) using i and j as the index
    while(i < arr1.length && j < arr2.length){    
        // the smallest number gets pushed to the mergedArray and the index(i or j) of the array that number was in gets incremented
        if(arr2[j] > arr1[i]){
            mergedArray.push(arr1[i])
            i++
        }
        else {
            mergedArray.push(arr2[j])
            j++
        }
    }
    // while there is something in arr1 to work with but nothing in arr2
    while( i < arr1.length){
        // push whatever is left in the sorted array into the mergedArray
        mergedArray.push(arr1[i])
        i++
    }
    // while there is something in arr2 to work with but nothing in arr1
    while( j < arr2.length){
        // push whatever is left in the sorted array into the mergedArray
         mergedArray.push(arr2[j])
        j++
    }
        
    
    return mergedArray
}
