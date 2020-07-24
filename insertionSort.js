const numbers = [3,6,1,3,97,3,1,0,43];


function insertionSort(numbers)  {
    for (let i = 1; i < numbers.length; i++) {
      let j = i - 1;
      let currentNum = numbers[i];
      while (j >= 0 && numbers[j] > currentNum) {
        numbers[j + 1] = numbers[j];
        j--;
      }
      numbers[j+1] = currentNum
    }
    return numbers
  }

console.log(insertionSort(numbers));


