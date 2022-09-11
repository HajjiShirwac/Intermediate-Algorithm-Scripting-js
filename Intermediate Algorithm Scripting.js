// // Sum All Numbers in a Range

function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);

  // // // Diff Two Arrays
  function diffArray(arr1, arr2) {
    const newArr = [];
  
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


  ///   Seek and Destroy

  function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }  