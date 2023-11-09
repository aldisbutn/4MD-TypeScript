/* eslint-disable no-prototype-builtins */
/* eslint-disable no-constant-condition */
/*
Task 1
Write a function that takes two numbers (a and b) as argument
Sum a and b
Return the result
*/

const sum = (a:number, b:number) => a + b;

console.log(sum(1,2));
console.log(sum(1,10));
console.log(sum(99,1));

/*
Task 2
Write a function that takes a value as argument
Return the type of the value
*/

const typeOf = (a:unknown) => typeof a;

console.log(typeOf(1));
console.log(typeOf(false));
console.log(typeOf({}));
console.log(typeOf(null));
console.log(typeOf('string'));
console.log(typeOf(['array']));

/*
Task 3
Write a function that takes two values, say a and b, as arguments
Return true if the two values are equal and of the same type
*/

const equalValue = (a:string | number, b:string | number) => a === b;

console.log(equalValue(2,3));
console.log(equalValue(3,3));
console.log(equalValue(1,'1'));
console.log(equalValue('10','10'));

/*
Task 4
Write a function that takes a string (a) and a number (n) as arguments
Return the nth character of 'a'
*/

const nthChar = (a: string, b:number) => a[b-1];

console.log(nthChar('abcd',1));
console.log(nthChar('zyxbwpl',5));
console.log(nthChar('gfedcba',3));

/*
Task 5
Write a function that takes a string (a) as argument
Remove the first 3 characters of a
Return the result
*/

const removeFirstThree = (a:string) => a.slice(3);

console.log(removeFirstThree('abcdefg'));
console.log(removeFirstThree('1234'));
console.log(removeFirstThree('fgedcba'));

/*
Task 6
Write a function that takes a string as argument
Extract the last 3 characters from the string
Return the result
*/

const extractLastThree = (a:string) => a.slice(-3);

console.log(extractLastThree('abcdefg'));
console.log(extractLastThree('1234'));
console.log(extractLastThree('fgedcba'));

/*
Task 7
Write a function that takes a string (a) as argument
Get the first 3 characters of a
Return the result
*/

const getFirstThree = (a:string) => a.slice(0,3);

console.log(getFirstThree('abcdefg'));
console.log(getFirstThree('1234'));
console.log(getFirstThree('fgedcba'));

/*
Task 8
Write a function that takes a string (a) as argument
Extract the first half a
Return the result
*/

const extractHalf = (a:string) => a.slice(0, (a.length/2));

console.log(extractHalf('abcdefgh'));
console.log(extractHalf('1234'));
console.log(extractHalf('gedcba'));

/*
Task 9
Write a function that takes a string (a) as argument
Remove the last 3 characters of a
Return the result
*/

const removeLastThree = (a:string) => a.slice(0, (a.length - 3))

console.log(removeLastThree('abcdefg'));
console.log(removeLastThree('1234'));
console.log(removeLastThree('fgedcba'));

/*
Task 10
Write a function that takes two numbers (a and b) as argument
Return b percent of a
*/

const percentOfNumber = (a:number, b:number) => (a/100)*b;

console.log(percentOfNumber(100,50));
console.log(percentOfNumber(10,1));
console.log(percentOfNumber(500,25));

/*
Task 11
Write a function that takes 6 values (a,b,c,d,e,f) as arguments
Sum a and b
Then substract by c
Then multiply by d and divide by e
Finally raise to the power of f and return the result
Tip: mind the order
*/

const sumSubtractMultiplyRaise = (a:number, b:number, c:number, d:number, e:number, f:number) => Math.pow(((((a+b)-c)*d)/e), f);

console.log(sumSubtractMultiplyRaise(6,5,4,3,2,1));
console.log(sumSubtractMultiplyRaise(6,2,1,4,2,3));
console.log(sumSubtractMultiplyRaise(2,3,6,4,2,3));

/*
Task 12
Write a function that takes a number as argument
If the number is even, return true
Otherwise, return false
*/

const isEven = (a:number) => a % 2 === 0;

console.log(isEven(10));
console.log(isEven(-4));
console.log(isEven(5));
console.log(isEven(-111));

/*
Task 13
Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b
*/

const charOccur = (a:string, b:string) => b.split(a).length-1;

console.log(charOccur('m', 'how many times does the character occur in this sentence?'));
console.log(charOccur('h', 'how many times does the character occur in this sentence?'));
console.log(charOccur('?', 'how many times does the character occur in this sentence?'));
console.log(charOccur('z', 'how many times does the character occur in this sentence?'));

/*
Task 14
Write a function that takes a number (a) as argument
If a is a whole number (has no decimal place), return true
Otherwise, return false
*/

const wholeNumber = (a:number) =>  (a - Math.floor(a)) === 0;

console.log(wholeNumber(4));
console.log(wholeNumber(1.123));
console.log(wholeNumber(1048));
console.log(wholeNumber(10.48));

/*
Task 15
Write a function that takes two numbers (a and b) as arguments
If a is smaller than b, divide a by b
Otherwise, multiply both numbers
Return the resulting value
*/

const divideOrMultiply = (a:number, b:number) => {
    if (a < b) {
       return a / b
    } else {
       return a * b
    }
};

console.log(divideOrMultiply(10,100));
console.log(divideOrMultiply(90,45));
console.log(divideOrMultiply(8,20));
console.log(divideOrMultiply(2,0.5));

/*
Task 16
Write a function that takes two strings (a and b) as arguments
If a contains b, append b to the beginning of a
If not, append it to the end
Return the concatenation
*/

const appendString = (a:string, b:string) => {
    if (a.includes(b)) {
        return b + a
    } else {
        return a +b
    }
};

console.log(appendString('cheese', 'cake'));
console.log(appendString('lips', 's'));
console.log(appendString('Java', 'script'));
console.log(appendString(' think, therefore I am', 'I'));

/*
Task 17
Write a function that takes a number (a) as argument
Round a to the 2nd digit after the comma
Return the rounded number
*/

const roundNumber = (a:number) => a.toFixed(2);

console.log(roundNumber(2.12397));
console.log(roundNumber(3.136));
console.log(roundNumber(1.12397));
console.log(roundNumber(26.1379));

/*
Task 18
Write a function that takes a number (a) as argument
Split a into its individual digits and return them in an array
Tip: you might want to change the type of the number for the splitting
*/

const numberSplitToArray = (a:number) => String(a).split('');

console.log(numberSplitToArray(10));
console.log(numberSplitToArray(931));
console.log(numberSplitToArray(193278));

/*
Task 19
It seems like something happened to these strings
Can you figure out how to clear up the chaos?
Write a function that joins these strings together such that they form the following words:
'Javascript', 'Countryside', and 'Downtown'
You might want to apply basic JS string methods such as replace(), split(), slice() etc.
*/

const chaosClean = (a:string, b:string) => {
    const removedSymbolA = a.replace('%','');
    const removedSymbolB = b.replace('%','');
    const firstUpperCaseA = removedSymbolA.charAt(0).toUpperCase() + removedSymbolA.slice(1);
    const reverseB = removedSymbolB.split('').reverse().join('');
    return firstUpperCaseA + reverseB;
};

console.log(chaosClean('java', 'tpi%rcs'));
console.log(chaosClean('c%ountry', 'edis'));
console.log(chaosClean('down', 'nw%ot'));

/*
Task 20
This challenge is a little bit more complex
Write a function that takes a number (a) as argument
If a is prime, return a
If not, return the next higher prime number
*/

const isPrimeOrNextPrime = (a:number) => {
    //funckija kas parbauda vai cipars ir prime
    function isPrime(a:number) {
        if (a <= 1) {
            return false;
        } else if (a <= 3) {
            return true;
        } else if (a % 2 === 0 || a % 3 === 0) {
            return false;
        }
        
        for (let i = 5; i * i <= a; i += 6) {
            if (a % i === 0 || a % (i + 2) === 0) {
                return false;
            }
        }
        
        return true;
    }
    //ja ir funkcija ir true tad atgriez ciparu
    if (isPrime(a)) {
        return a;
    }
    //ja cipars nav prime tad pieskaita 1
    let nextPrime = a + 1;

    //jaunais cipars tiek ielikts while loopa ar funkciju kamer tiek atrasts nakamais prime
    while (true) {
        if (isPrime(nextPrime)) {
            return nextPrime;
        }
        nextPrime++;
    }
};

console.log(isPrimeOrNextPrime(38));
console.log(isPrimeOrNextPrime(7));
console.log(isPrimeOrNextPrime(115));
console.log(isPrimeOrNextPrime(2000));

/*
Task 21
Write a function that takes two numbers, say x and y, as arguments
Check if x is divisible by y
If yes, return x
If not, return the next higher natural number that is divisible by y
*/

const isDivisible = (a:number, b:number) => {
    if (a % b === 0) {
        return a;
      } else {
        return Math.floor(a / b) * b + b;
      }
};

console.log(isDivisible(1,23));
console.log(isDivisible(23,23));
console.log(isDivisible(7,3));
console.log(isDivisible(-5,7));

/*
Task 22
Write a function that takes two strings (a and b) as arguments
Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
Return the resulting string
*/

const insertEveryThird = (a:string, b:string) => {
    const result = [];
    let count = 0;

    for (let i = a.length - 1; i >= 0; i--) {
        result.unshift(a[i]);
        count++;
    
        if (count === 3) {
          result.unshift(b);
          count = 0;
        }
      }
    
      return result.join(''); 
};

console.log(insertEveryThird('1234567','.'));
console.log(insertEveryThird('abcde','$'));
console.log(insertEveryThird('zxyzxyzxyzxyzxyz','w'));

/*
Task 23
Write a function that takes a string as argument
As it is, the string has no meaning
Increment each letter to the next letter in the alphabet
Return the correct word
*/

const nextAlphabetLetter = (a:string) => {
    let newString = '';

    for (let i = 0; i < a.length; i++) {
        newString += String.fromCharCode(a[i].charCodeAt(0) + 1);
    }

    return newString;
};

console.log(nextAlphabetLetter('bnchmf'));
console.log(nextAlphabetLetter('bgddrd'));
console.log(nextAlphabetLetter('sdrshmf'));

/*
Task 24
Write a function that takes an array (a) and a value (n) as argument
Return the nth element of 'a'
*/

const arrayNthElement = (a: number[], b:number) => a[b-1];

console.log(arrayNthElement([1,2,3,4,5],3));
console.log(arrayNthElement([10,9,8,7,6],5));
console.log(arrayNthElement([7,2,1,6,3],1));

/*
Task 25
Write a function that takes an array (a) as argument
Remove the first 3 elements of 'a'
Return the result
*/

const removeArrayFirstThree = (a: unknown[]) => a.slice(3)

console.log(removeArrayFirstThree([1,2,3,4]));
console.log(removeArrayFirstThree([5,4,3,2,1,0]));
console.log(removeArrayFirstThree([99,1,1]));

/*
Task 26
Write a function that takes an array (a) as argument
Extract the last 3 elements of a
Return the resulting array
*/

const removeArrayLastThree = (a: number[]) => a.slice(a.length - 3);

console.log(removeArrayLastThree([1,2,3,4]));
console.log(removeArrayLastThree([5,4,3,2,1,0]));
console.log(removeArrayLastThree([99,1,1]));

/*
Task 27
Write a function that takes an array (a) as argument
Extract the first 3 elements of a
Return the resulting array
*/

const extractArrayFirstThree = (a: number[]) => a.slice(0,3);

console.log(extractArrayFirstThree([1,2,3,4]));
console.log(extractArrayFirstThree([5,4,3,2,1,0]));
console.log(extractArrayFirstThree([99,1,1]));

/*
Task 28
Write a function that takes an array (a) and a number (n) as arguments
It should return the last n elements of a
*/

const returnArrayLastN = (a: number[], b:number) => a.slice(a.length - b);

console.log(returnArrayLastN([1, 2, 3, 4, 5], 2));
console.log(returnArrayLastN([1, 2, 3], 6));
console.log(returnArrayLastN([1, 2, 3, 4, 5, 6, 7, 8], 3));

/*
Task 29
Write a function that takes an array (a) and a value (b) as argument
The function should clean a from all occurrences of b
Return the filtered array
*/

const filterArrayValue = (a: unknown[], b: string | number | boolean) => a.filter(item => item !== b)

console.log(filterArrayValue([1,2,3], 2));
console.log(filterArrayValue([1,2,'2'], '2'));
console.log(filterArrayValue([false,'2',1], false));
console.log(filterArrayValue([1,2,'2',1], 1));

/*
Task 30
Write a function that takes an array (a) as argument
Return the number of elements in a
*/

const numOfElementsInArray = (a: number[]) => a.length;

console.log(numOfElementsInArray([1,2,2,4]));
console.log(numOfElementsInArray([9,9,9]));
console.log(numOfElementsInArray([4,3,2,1,0]));

/*
Task 31
Write a function that takes an array of numbers as argument
Return the number of negative values in the array
*/

const returnNegativeInArray = (a: number[]) => {
    let count = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
        count++;
        }
    }

    return count;
};

console.log(returnNegativeInArray([1,-2,2,-4]));
console.log(returnNegativeInArray([0,9,1]));
console.log(returnNegativeInArray([4,-3,2,1,0]));

/*
Task 32
Write a function that takes an array of numbers as argument
It should return an array with the numbers sorted in descending order
*/

const sortArrayDescending = (a: unknown[]) => a.sort().reverse();

console.log(sortArrayDescending([1,3,2]));
console.log(sortArrayDescending([4,2,3,1]));

/*
Task 33
Write a function that takes an array of strings as argument
Sort the array elements alphabetically
Return the result
*/

const sortArrayAlphabetically = (a: unknown[]) => a.sort();

console.log(sortArrayAlphabetically(['b', 'c', 'd', 'a']));
console.log(sortArrayAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

/*
Task 34
Write a function that takes an array of numbers as argument
It should return the average of the numbers
*/

const returnAverageArrayNumber = (a: number[]) => {
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }

    return sum / a.length;
}

console.log(returnAverageArrayNumber([10,100,40]));
console.log(returnAverageArrayNumber([10,100,1000]));
console.log(returnAverageArrayNumber([-50,0,50,200]));

/*
Task 35
Write a function that takes an array of strings as argument
Return the longest string
*/

const returnLongestStringFromArray = (a: string[]) => {
    let longestString = a[0];

    for (let i = 0; i < a.length; i++) {
        if (a[i].length > longestString.length) {
            longestString = a[i];
        }
    }

    return longestString;
};

console.log(returnLongestStringFromArray(['help', 'me']));
console.log(returnLongestStringFromArray(['I', 'need', 'candy']));

/*
Task 36
Write a function that takes an array as argument
It should return true if all elements in the array are equal
It should return false otherwise
*/

const checkIfArrayElementsEqual = (a: (string | number)[] | boolean[]) => {
    const firstElement = a[0];

    for (let i = 1; i < a.length; i++) {
        if (a[i] !== firstElement) {
            return false;
        }
    }

    return true;
}

console.log(checkIfArrayElementsEqual([true, true, true, true]));
console.log(checkIfArrayElementsEqual(['test', 'test', 'test']));
console.log(checkIfArrayElementsEqual([1,1,1,2]));
console.log(checkIfArrayElementsEqual(['10',10,10,10]));

/*
Task 37
Write a function that takes arguments an arbitrary number of arrays
It should return an array containing the values of all arrays
*/

const combineArray = (...a: (number[] | string[] | boolean[])[]) => {
    let combinedArray: (number[] | string[] | boolean[])[] = [];

    for (let i = 0; i < a.length; i++) {
        combinedArray = combinedArray.concat(a[i]);
    }

    return combinedArray;
}

console.log(combineArray([1, 2, 3], [4, 5, 6]));
console.log(combineArray(['a', 'b', 'c'], [4, 5, 6]));
console.log(combineArray([true, true], [1, 2], ['a', 'b']));

/*
Task 38
Write a function that takes an array of objects as argument
Sort the array by property b in ascending order
Return the sorted array
*/

const sortArrayByB = (a: object[]) => a.sort((a: { b: number; },b: { b: number; }) => a.b - b.b);

console.log(sortArrayByB([{a:1,b:2},{a:5,b:4}]));
console.log(sortArrayByB([{a:2,b:10},{a:5,b:4}]));
console.log(sortArrayByB([{a:1,b:7},{a:2,b:1}]));

/*
Task 39
Write a function that takes two arrays as arguments
Merge both arrays and remove duplicate values
Sort the merge result in ascending order
Return the resulting array
*/

const mergeArrayWithoutDuplicate = (a: number[], b: number[]) => {
    const mergedArray = a.concat(b);
    const filteredArray = [...new Set(mergedArray)];
    return filteredArray.sort((a, b) => a - b);

}

console.log(mergeArrayWithoutDuplicate([1, 2, 3], [3, 4, 5]));
console.log(mergeArrayWithoutDuplicate([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

/*
Task 40
Write a function that takes an array (a) and a number (b) as arguments
Sum up all array elements with a value greater than b
Return the sum
*/

const sumArrayElementsGreaterThanB = (a: number[], b: number) => {
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b) {
            sum += a[i];
        }
    }

    return sum;
}

console.log(sumArrayElementsGreaterThanB([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumArrayElementsGreaterThanB([-10, -11, -3, 1, -4], -3));
console.log(sumArrayElementsGreaterThanB([78, 99, 100, 101, 401], 99));

/*
Task 41
Write a function that takes two numbers (min and max) as arguments
Return an array of numbers in the range min to max
*/

const fromMinToMaxArray = (a: number, b:number) => {
    const arrayMinMax: number[] = [];
    for (let i = a; i <= b; i++) {
        arrayMinMax.push(i);
    }
    return arrayMinMax;
}

console.log(fromMinToMaxArray(2, 10));
console.log(fromMinToMaxArray(1, 3));
console.log(fromMinToMaxArray(-5, 5));
console.log(fromMinToMaxArray(2, 7));

/*
Task 42
Write a function that takes an array of strings as argument
Group those strings by their first letter
Return an object that contains properties with keys representing first letters
The values should be arrays of strings containing only the corresponding strings
For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
{ a: ['Alf', 'Alice'], b: ['Ben']}
*/

interface GroupedStrings {
    [key: string]: string[];
  }

const groupStringToObjectByFirstLetter = (a: string[]): GroupedStrings => {
    const groupedStrings: GroupedStrings = {};

    for (let i = 0; i < a.length; i++) {
      const string = a[i];
      const firstLetter = string[0].toLowerCase();
  
      if (!groupedStrings[firstLetter]) {
        groupedStrings[firstLetter] = [string];
      } else {
        groupedStrings[firstLetter].push(string);
      }
    }
  
    return groupedStrings;
}

console.log(groupStringToObjectByFirstLetter(['Alf', 'Alice', 'Ben']));
console.log(groupStringToObjectByFirstLetter(['Ant', 'Bear', 'Bird']));
console.log(groupStringToObjectByFirstLetter(['Berlin', 'Paris', 'Prague']));

/*
Task 43
Write a function that takes an array with arbitrary elements and a number as arguments
Return a new array, the first element should be either the given number itself
or zero if the number is smaller than 6
The other elements should be the elements of the original array
Try not to mutate the original array
*/

const returnNewArrayBor0 = (a: number[] | string[] | boolean[], b:number) => {
    const arrayCopy = [...a];

    if (b >= 6) {
        arrayCopy.unshift(b)
    } else {
        arrayCopy.unshift(0)
    }

    return arrayCopy;
}

console.log(returnNewArrayBor0([1,2,3], 6));
console.log(returnNewArrayBor0(['a','b'], 2));
console.log(returnNewArrayBor0([null,false], 11));

/*
Task 44
Write a function that takes an array (a) and a value (n) as arguments
Save every nth element in a new array
Return the new array
*/

const saveEveryNthArrayElement = (a: number[], b:number) => {
    const newArray = [];

    for (let i = b - 1; i < a.length; i+=b) {
        newArray.push(a[i])
    }

    return newArray;
}

console.log(saveEveryNthArrayElement([1,2,3,4,5,6,7,8,9,10],3));
console.log(saveEveryNthArrayElement([10,9,8,7,6,5,4,3,2,1],5));
console.log(saveEveryNthArrayElement([7,2,1,6,3,4,5,8,9,10],2));

/*
Task 45
Write a function that takes an object with two properties as argument
It should return the value of the property with key country
*/

const returnCountryFromObject = (a: { continent?: string; country: string; }) => a.country;

console.log(returnCountryFromObject({  continent: 'Asia',  country: 'Japan'}));
console.log(returnCountryFromObject({  country: 'Sweden',  continent: 'Europe'}));

/*
Task 46
Write a function that takes an object with two properties as argument
It should return the value of the property with key 'prop-2'
Tip: you might want to use the square brackets property accessor
*/

const returnProp2FromObject = (a: { one?: number; "prop-2"?: string | number; prop?: string; ""?: string; }) => a['prop-2'];

console.log(returnProp2FromObject({  one: 1,  'prop-2': 2}));
console.log(returnProp2FromObject({  'prop-2': 'two',  prop: 'test'}));

/*
Task 47
Write a function that takes an object with two properties and a string as arguments
It should return the value of the property with key equal to the value of the string
*/

const returnBFromObjectA = (a: { [x: string]: string; continent?: string; country?: string; },b: string) => a[b];

console.log(returnBFromObjectA({  continent: 'Asia',  country: 'Japan'}, 'continent'));
console.log(returnBFromObjectA({  country: 'Sweden',  continent: 'Europe'}, 'country'));

/*
Task 48
Write a function that takes an object (a) and a string (b) as argument
Return true if a has a property with key b
Return false otherwise
*/

const returnTrueIfPropertyHasB = (a: { a?: number; b?: number; c?: number; x?: string; y?: string; z?: string; },b: string) => a.hasOwnProperty(b);

console.log(returnTrueIfPropertyHasB({a:1,b:2,c:3},'b'));
console.log(returnTrueIfPropertyHasB({x:'a',y:'b',z:'c'},'a'));
console.log(returnTrueIfPropertyHasB({x:'a',y:'b',z:'c'},'z'));

/*
Task 49
Write a function that a string (a) as argument
Create an object that has a property with key 'key' and a value of a
Return the object
*/

const createObjectKeyA = (a:string) => ({key: a});

console.log(createObjectKeyA('a'));
console.log(createObjectKeyA('z'));
console.log(createObjectKeyA('b'));

/*
Task 50
Write a function that takes two strings (a and b) as arguments
Create an object that has a property with key 'a' and a value of 'b'
Return the object
*/

const createObjectKeyAValueB = (a:string, b:string) => ({a: b});

console.log(createObjectKeyAValueB('a','b'));
console.log(createObjectKeyAValueB('z','x'));
console.log(createObjectKeyAValueB('b','w'));

/*
Task 51
Write a function that takes two arrays (a and b) as arguments
Create an object that has properties with keys 'a' and corresponding values 'b'
Return the object

const createObjectKeysAValuesB = (a: unknown[],b: unknown[]) => {
    const result = {};

    for (let i = 0; i < a.length; i++) {
        result[a[i]] = b[i];
    }

    return result;
}
*/

const createObjectKeysAValuesB = <T, U>(a: T[], b: U[]): Record<string, U> => {
    const result: Record<string, U> = {};
  
    for (let i = 0; i < a.length; i++) {
      result[String(a[i])] = b[i];
    }
  
    return result;
  }

console.log(createObjectKeysAValuesB(['a','b','c'],[1,2,3]));
console.log(createObjectKeysAValuesB(['w','x','y','z'],[10,9,5,2]));
console.log(createObjectKeysAValuesB([1,'b'],['a',2]));

/*
Task 52
Write a function that takes an object (a) as argument
Return an array with all object keys
*/

const returnObjectKeys = (a: Record<string, number>) => Object.keys(a);

console.log(returnObjectKeys({a:1,b:2,c:3}));
console.log(returnObjectKeys({j:9,i:2,x:3,z:4}));
console.log(returnObjectKeys({w:15,x:22,y:13}));

/*
Task 53
Write a function that takes an object (a) as argument
Return the sum of all object values
*/

const sumObjectValues = (a: Record<string, number>) => {
    const values = Object.values(a);
    const sum = values.reduce((prev, current) => prev + current);
    return sum;
}

console.log(sumObjectValues({a:1,b:2,c:3}));
console.log(sumObjectValues({j:9,i:2,x:3,z:4}));
console.log(sumObjectValues({w:15,x:22,y:13}));

/*
Task 54
Write a function that takes an object as argument
It should return an object with all original object properties
except for the property with key 'b'
*/

const returnObjectWithoutB = (a: Record<string, number>) => {
    delete a['b'];
    return a;
};

console.log(returnObjectWithoutB({ a: 1, b: 7, c: 3 }));
console.log(returnObjectWithoutB({ b: 0, a: 7, d: 8 }));
console.log(returnObjectWithoutB({ e: 6, f: 4, b: 5, a: 3 }));

/*
Task 55
Write a function that takes two objects as arguments
Unfortunately, the property 'b' in the second object has the wrong key
should be named 'd' instead
Merge both objects and correct the wrong property name
Return the resulting object
It should have the properties 'a', 'b', 'c', 'd', and 'e'
*/

const correctObjectProperties = (a: Record<string, number>,b: Record<string, number>) => {
    Object.assign(b, {d: b['b']});
    delete b['b'];

    const combinedArray = {
        ...a,
        ...b
    };
    
    return combinedArray;
}

console.log(correctObjectProperties({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(correctObjectProperties({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

/*
Task 56
Write a function that takes an object (a) and a number (b) as arguments
Multiply all values of 'a' by 'b'
Return the resulting object
*/

const multiplyObjectValuesByB = (a: Record<string, number>,b: number) => {
    const result: Record<string, number> = {};

    for (const key in a) {
        if (a.hasOwnProperty(key)) {
        result[key] = a[key] * b;
        }
    }

  return result;
}

console.log(multiplyObjectValuesByB({a:1,b:2,c:3},3));
console.log(multiplyObjectValuesByB({j:9,i:2,x:3,z:4},10));
console.log(multiplyObjectValuesByB({w:15,x:22,y:13},6));

/*
Task 57
Write a function that takes an object as argument
Somehow, the properties and keys of the object got mixed up
Swap the Javascript object's key with its values and return the resulting object
*/

const swapObjectKeysWithValues = (a: Record< string | number, string | number>) => {
    const newObject: Record<string | number, string | number> = {};

    for (const key in a) {
        if (a.hasOwnProperty(key)) {
            newObject[a[key]] = key;
        }
    }

    return newObject;
}

console.log(swapObjectKeysWithValues({z:'a',y:'b',x:'c',w:'d'}));
console.log(swapObjectKeysWithValues({2:'a',4:'b',6:'c',8:'d'}));
console.log(swapObjectKeysWithValues({a:1,z:24}));


/*
Task 58
Write a function that takes an object as argument
Some of the property values contain empty strings
Replace empty strings and strings that contain only whitespace with null values
Return the resulting object
*/

const replaceObjectEmptyStringsWithNull = (a: Record<string, string>) => {
    for (const key in a) {
        if (a.hasOwnProperty(key) && typeof a[key] === 'string') {
            if (a[key].trim() === '') {
                a[key] = null;
            }
        }
    }
    return a;
}

console.log(replaceObjectEmptyStringsWithNull({ a: 'a', b: 'b', c: '' }));
console.log(replaceObjectEmptyStringsWithNull({ a: '', b: 'b', c: ' ', d: 'd' }));
console.log(replaceObjectEmptyStringsWithNull({ a: 'a', b: 'b ', c: ' ', d: '' }));

/*
Task 59
Write a function that takes an object as argument containing properties with personal information
Extract firstName, lastName, size, and weight if available
If size or weight is given transform the value to a string
Attach the unit cm to the size
Attach the unit kg to the weight
Return a new object with all available properties that we are interested in
*/

const extractObjectNameSizeWeight = (a: Record<string, unknown>): Record<string, unknown> => {
    const newObject: Record<string, unknown> = {};
  
    if (a.hasOwnProperty('fn')) {
      newObject.fn = a.fn;
    }
    if (a.hasOwnProperty('ln')) {
      newObject.ln = a.ln;
    }
    if (a.hasOwnProperty('size')) {
      newObject.size = `${a.size}cm`;
    }
    if (a.hasOwnProperty('weight')) {
      newObject.weight = `${a.weight}kg`;
    }
  
    return newObject;
  };

console.log(extractObjectNameSizeWeight({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));
console.log(extractObjectNameSizeWeight({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}));
console.log(extractObjectNameSizeWeight({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));
console.log(extractObjectNameSizeWeight({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));