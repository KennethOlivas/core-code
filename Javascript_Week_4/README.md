## Find the odd int

    const findOdd = (A) => {
        return A.reduce((acc, curr) => {
            return acc ^ curr;
        }, 0);
    }
    
## Stop gninnipS My sdroW!
 
     const spinWords = (string) => { 
        return string.split(' ').map(word => {
            return word.length >= 5 ? word.split('').reverse().join('') : word;
        }
        ).join(' ');
    }
    
## Array.diff
 
     const array_diff = (a, b) => {
        return a.filter(element => !b.includes(element));
     }

## Create Phone Number

    const createPhoneNumber = (numbers) => {
        return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'); 
    }
    
## Detect Pangram

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
    
## Find the missing letter

    const findMissingLetter = (array) => {
        let first = array[0].charCodeAt(0) // get the char code of the first element
        for (let i = 1; i < array.length; i++) { // loop through the array
          if (first + i !== array[i].charCodeAt(0)) { // if the char code of the element is not equal to the char code of the first element + the index of the element
            return String.fromCharCode(first + i) // return the char code of the first element + the index of the element
          }
        }
    }
    
## Find the unique number

    const findUniqValue = (arr) => { 
        return arr.filter((value) => {
            return arr.indexOf(value) === arr.lastIndexOf(value);
          })[0] 
    }
    
 ## Reverse or rotate?
 
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
    
    
 ## What's Your Poison?

     const findThePoisoned = (rats) => {
        let binary = rats.reduce((acc, curr) => {
            return acc + Math.pow(2, curr);
        }, 0);
        return binary
    }
