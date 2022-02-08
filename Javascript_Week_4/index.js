
// weak 4 



const findOdd = (A) => {
    return A.reduce((acc, curr) => {
        return acc ^ curr;
    }, 0);
}

const spinWords = (string) => { 
    return string.split(' ').map(word => {
        return word.length >= 5 ? word.split('').reverse().join('') : word;
    }
    ).join(' ');
}


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
    let binary = rats.reduce((acc, curr) => {
        return acc + Math.pow(2, curr);
    }, 0);
    return binary
}

console.log(findThePoisoned([4, 2, 2, 2, 5, 1, 2, 1]));
