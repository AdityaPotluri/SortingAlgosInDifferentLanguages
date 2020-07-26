let numbers:number[] = [0,2,1,43,-1,3,4,5,9,1];

function mergeSort(numbers:number[]):number[] {
    if(numbers.length <= 1) {
        return numbers;
    }
    
    const middleInd:number = Math.floor(numbers.length / 2);
    const leftArr:number[] = numbers.slice(0,middleInd);
    const rightArr:number[] = numbers.slice(middleInd);
    return merge(mergeSort(leftArr),mergeSort(rightArr));
    
}

function merge(left:number[], right:number[]):number[] {
    let resultArr:number[] = [];
    let leftIndex:number = 0;
    let rightIndex:number = 0;

    while(leftIndex < left.length && rightIndex<right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            resultArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArr.push(right[rightIndex]);
            rightIndex++;
        }

    }


    return resultArr
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

console.log(mergeSort(numbers));