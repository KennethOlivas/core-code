
const order = (words) => {
    let i = 0;
    let res = words.split(' ').sort((a, b) => {
        i++
        console.log(i, " a: ", a, "b: ", b);
        //Busca cualquier caracter que no sea un dígito y lo ordena de mayor a menor
        console.log(a.match(/\D/g));
        console.log(b.match(/\D/g));
        return a.match(/\d/) - b.match(/\d/);
    });
    console.log("res ", res);
    return res.join(' ');
}

//console.log(order("is2 Thi1s T4est 3a"));


const duplicateCount = (text) => {
    let res = 0;
    let arr = text.toLowerCase().split('');
    for (let i = 0; i < arr.length; i++) {

    }
    return res;


}

//console.log(duplicateCount("Indivisibility"));




const pigIt = (str) => {
    let res = '';
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(/[a-zA-Z]/g)) {
            res += arr[i].slice(1) + arr[i][0] + 'ay ';
        } else {
            res += arr[i] + ' ';
        }
    }
    return res.trim();
}


const validParentheses = (parens) => {
    let arr = parens.split('');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            count++;
        } else if (arr[i] === ')') {
            count--;
        }
        if (count < 0) // case:  )(
            return false;
    }
    return count === 0;
}



const toCamelCase = (str) => {
    str = str.split('');
    return str.map((element, index) => {
        console.log(element, index);
        if (element == '-' || element == '_') {
            element = str[index + 1].toUpperCase();
            str.splice(index + 1, 1);
        }
        return element;
    }).join('');
}

//console.log(toCamelCase("the_stealth_warrior"));


/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items 
without any elements with the same value next to each other and preserving the original order of elements number or string.

*/

const uniqueInOrder = (iterable) => {
    let res = [];
    let arr
    if (typeof iterable === 'string') {
        arr = iterable.split('');
    } else if (typeof iterable === 'number') {
        arr = iterable.toString().split('');
    } else {
        arr = iterable;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            res.push(arr[i]);
        }
    }
    return res;
}

//console.log(uniqueInOrder([1, 2, 2, 3, 3]));

/* Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names,
 which should be separated by an ampersand.
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
returns 'Bart, Lisa & Maggie'
*/

const list = (names) => {
    let res = '';
    for (let i = 0; i < names.length; i++) {
        if (i === names.length - 2) {
            res += names[i].name + ' & ';
        } else if (i === names.length - 1) {
            res += names[i].name;
        } else {
            res += names[i].name + ', ';
        }
    }
    return res;
}
//console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));


/*

Encrypt this! 

*/

const encryptThis = (text) => {
    // text = "A wise old owl lived in an oak"
    let string = text.split(' '); // ["A", "wise", "old", "owl", "lived", "in", "an", "oak"]
    let outputString = []; // array of strings to be returned
    string.map((str) => {
        if (str.length === 1) { // if the string is 1 character long
            outputString.push(str.charCodeAt(0)); // "A" => 65, "w" => 119, "i" => 105, "s" => 115, "e" => 101, "o" => 111, "l" => 108, "d" => 100, " " => 32, "o" => 111, "k" => 107, "a" => 97
        }
        else {
            let tempStr = str.split(''); //split the string into an array => "wise" => ["w", "i", "s", "e"]
            tempStr[0] = str.charCodeAt(0); //get the char code of the first char  => "w" => 119 = "119ise"
            tempStr[1] = str[str.length - 1]; //get the char code of the last char => "119ese
            tempStr[str.length - 1] = str[1]; //get the char code of the second to last char  => "119esi"
            outputString.push(tempStr.join('')); //join the array into a string => "119esi"
        }
    });
    return outputString.join(' '); //join the array into a string 
}

//console.log(encryptThis("A wise old owl lived in an oak"));


function foldArray(array, runs) {
    const folded = [...array]
    for (let i = 0; i < runs; i++) {
        folded.map((element, index, arr) => {
            index + 1 === arr.length
                ? element
                : arr[index] = element + arr.pop()
        });
    }
    return folded;
}



// add the even positions the result muptiply by 3 sum the odd positions 
// and return last digit of the sum
// 39847 => 7



/* encode example aaabbb to 3a3b
aabaa to 2a1b2a
*/

const encode = (str) => {
    let res = '';
    let arr = str.split('');
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
        } else {
            res += count + arr[i];
            count = 1;
        }
    }
    return res;
}

// array is an array of integers. The n1 and n2 parameters are integers defined by 
//the relation 0 ≤= n1 <= n2 ≤ array.length.




// return the sum of all the positive multiples of 3 or 5 or 7 stricly bellow n
// ex: n = 11 we get 3,5,6,9,10 as mupltiples and the sum of these is 40

const solution = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
    }
    return sum;
}


///console.log(solution(15));

// numeber = 39847
// sum the digits in the even-numbered positions: 3 + 8 + 7 = 18
// multiply the sum by 3: 18 * 3 = 54
// sum the digits in the odd-numbered positions: 54 + (9 + 4)= 67
// last digit of the sum: 7
// subtract 7 from 10: 10 - 7 = 3

const lastDigit = (number) => {
    let sum = 0;
    let arr = number.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum += parseInt(arr[i]);
        }
    }
    sum *= 3;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            sum += parseInt(arr[i]);
        }
    }
    sum = sum.toString().split('');
    sum = parseInt(sum[sum.length - 1]);
    return sum > 0 ? (10 - sum) : 0;
}

console.log(lastDigit(39847));


// weak 4 

const array_diff = (a, b) => {
    return a.filter(element => !b.includes(element));
}


const createPhoneNumber = (numbers) => {
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'); 
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

const isPanagram = (str) => {
    str = str.toLowerCase().split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length; i++) {
        if (!str.includes(alphabet[i])) {
            return false;
        }
    }
    return true;
}

const findMissingLetter = (array) => {
    let first = array[0].charCodeAt(0) // get the char code of the first element
    for (let i = 1; i < array.length; i++) { // loop through the array
      if (first + i !== array[i].charCodeAt(0)) { // if the char code of the element is not equal to the char code of the first element + the index of the element
        return String.fromCharCode(first + i) // return the char code of the first element + the index of the element
      }
    }
}


const findUniqValue = (arr) => { 
    return arr.filter((value) => {
        return arr.indexOf(value) === arr.lastIndexOf(value);
      })[0] 
}

console.log(findUniqValue([ 0, 1, 0 ]));



//revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"

const revrot = (str, sz) => {
    if (sz <= 0) {
        return '';
    }
    let arr = str.split('');
    let output = [];
    for (let i = 0; i < arr.length; i += sz) {
        let temp = arr.slice(i, i + sz);
        if (temp.length === sz) {
            let sum = 0;
            for (let j = 0; j < temp.length; j++) {
                sum += parseInt(temp[j]);
            }
            if (sum % 2 === 0) {
                output.push(temp.reverse().join(''));
            } else {
                output.push(temp.slice(1).concat(temp[0]).join(''));
            }
        }
    }
    return output.join('');
}

console.log(revrot("123456987654", 6));





const findThePoisoned = (rats) => {
    // covert array to binary and the result to int
    let binary = rats.reduce((acc, curr) => {
        return acc + Math.pow(2, curr);
    }, 0);
    return binary
}

console.log(findThePoisoned([4, 2, 2, 2, 5, 1, 2, 1]));