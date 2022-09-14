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


//    //   // Wherefore art thou

function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    const souceKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(obj => {
      for (let i = 0; i < souceKeys.length; i++) {
        if (!obj.hasOwnProperty(souceKeys[i]) ||
            obj[souceKeys[i]] !== source[souceKeys[i]]) {
          return false;
        }
      }
      return true;
    });
  }
  
  // test here
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  );


  //    //  //  // Spinal Tap Case
  function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
  }
  
  // test here
  spinalCase("This Is Spinal Tap");


  //    //      // Pig Latin

  function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");

  //    //  // Search and Replace

  function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      // Change the after word to be uncapitalized before we use it.
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
  
    return str;
  }
  
  // test here
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


  //    //  //  // DNA Pairing

  function pairElement(str) {
    // Function to match each character with the base pair
    let matchWithBasePair = function(char, pairedArray) {
      switch (char) {
        case "A":
          pairedArray.push(["A", "T"]);
          break;
        case "T":
          pairedArray.push(["T", "A"]);
          break;
        case "C":
          pairedArray.push(["C", "G"]);
          break;
        case "G":
          pairedArray.push(["G", "C"]);
          break;
      }
    };
  
    // Find pair for every character in the string
    const paired = [];
    for (let i = 0; i < str.length; i++) {
      matchWithBasePair(str[i], paired);
    }
  
    return paired;
  }
  
  // test here
  pairElement("GCG");

  // // // Missing letters

  function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      /* code of current character */
      const charCode = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          then a letter was skipped */
      if (charCode !== str.charCodeAt(0) + i) {
        /* if current character skipped past a character find previous character and return */
        return String.fromCharCode(charCode - 1);
      }
    }
    return undefined;
  }
  
  // test here
  fearNotLetter("abce");


  // // // // // //   Sorted Union


  function uniteUnique(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    const finalArray = [];
  
    // Loop through the arguments object to truly make the program work with two or more arrays
    // instead of 3.
    for (let i = 0; i < arguments.length; i++) {
      const arrayArguments = arguments[i];
  
      // Loops through the array at hand
      for (let j = 0; j < arrayArguments.length; j++) {
        let indexValue = arrayArguments[j];
  
        // Checks if the value is already on the final array.
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
  
    return finalArray;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  //    //      //Convert HTML Entities

  function convertHTML(str) {
    // Split by character to avoid problems.
  
    var temp = str.split("");
  
    // Since we are only checking for a few HTML elements, use a switch
  
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join("");
    return temp;
  }
  
  //test here
  convertHTML("Dolce & Gabbana");

            //      //      //Sum All Odd Fibonacci Numbers
  function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  
  // test here
  sumFibs(4);


    //  //  //  /// Sum All Primes
    function sumPrimes(num) {
        // Helper function to check primality
        function isPrime(num) {
          for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0)
              return false;
          }
          return true;
        }
      
        // Check all numbers for primality
        let sum = 0;
        for (let i = 2; i <= num; i++) {
          if (isPrime(i))
            sum += i;
        }
        return sum;
      }


    //          //              //Smallest Common Multiple
    function smallestCommons(arr) {
        // Setup
        const [min, max] = arr.sort((a, b) => a - b);
        const numberDivisors = max - min + 1;
        // Largest possible value for SCM
        let upperBound = 1;
        for (let i = min; i <= max; i++) {
          upperBound *= i;
        }
        // Test all multiples of 'max'
        for (let multiple = max; multiple <= upperBound; multiple += max) {
          // Check if every value in range divides 'multiple'
          let divisorCount = 0;
          for (let i = min; i <= max; i++) {
            // Count divisors
            if (multiple % i === 0) {
              divisorCount += 1;
            }
          }
          if (divisorCount === numberDivisors) {
            return multiple;
          }
        }
      }
      
      smallestCommons([1, 5]);
      //  //  //Drop it
      function dropElements(arr, func) {
        while (arr.length > 0 && !func(arr[0])) {
          arr.shift();
        }
        return arr;
      }
      
      // test here
      dropElements([1, 2, 3, 4], function(n) {
        return n >= 3;
      });


      /// ///   /// Steamroller

      function steamrollArray(arr) {
        const flattenedArray = [];
        // Loop over array contents
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            // Recursively flatten entries that are arrays
            //  and push into the flattenedArray
            flattenedArray.push(...steamrollArray(arr[i]));
          } else {
            // Copy contents that are not arrays
            flattenedArray.push(arr[i]);
          }
        }
        return flattenedArray;
      };
      
      // test here
      steamrollArray([1, [2], [3, [[4]]]]);


/// /// ////  ////  Binary Agents


      function binaryAgent(str) {
        var biString = str.split(" ");
        var uniString = [];
      
        /*using the radix (or base) parameter in parseInt, we can convert the binary
            number to a decimal number while simultaneously converting to a char*/
      
        for (var i = 0; i < biString.length; i++) {
          uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
        }
      
        // we then simply join the string
        return uniString.join("");
      }
      
      // test here
      binaryAgent(
        "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
      );

      // /// ///Everything Be True


      function truthCheck(collection, pre) {
        // Create a counter to check how many are true.
        let counter = 0;
        // Check for each object
        for (let c in collection) {
          // If it is has property and value is truthy
          if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
          }
        }
        // Outside the loop, check to see if we got true for all of them and return true or false
        return counter == collection.length;
      }
      
      truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");



      /// /// /// /// /// Arguments Optional

      function addTogether() {
        const [first, second] = arguments;
        if (typeof(first) !== "number")
          return undefined;
        if (arguments.length === 1)
          return (second) => addTogether(first, second);
        if (typeof(second) !== "number")
          return undefined;
        return first + second;
      }