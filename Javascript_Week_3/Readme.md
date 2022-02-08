## Who likes it?

    function likes(names) {
        let display
        let totalNames = names.length - 2
        if (names.length === 0) {
            display = 'no one likes this'
        } else if (names.length === 1) {
            display = `${names[0]} likes this`
        } else if (names.length === 2) {
            display = `${names[0]} and ${names[1]} like this`
        }
        else if (names.length === 3) {
            display = `${names[0]}, ${names[1]} and ${names[2]} like this`
        }
        else if (names.length > 3) {
            display = `${names[0]}, ${names[1]} and ${totalNames} others like this`
        }
        return display
    }
 
 ## Bit Counting

     var countBits = function (n) {
        // Program Me
        let binary = n.toString(2);
        let count = 0;
        for (let i = 0; i < binary.length; i++) {
            count += binary[i] === '1' ? 1 : 0;
        }
        return count;
    }
    
 ## Decode the Morse code
 
     decodeMorse = function(morseCode) {
       let words = morseCode.split('   ');
        let result = '';
        for (let word of words) {
            let letters = word.split(' ');

            for (let letter of letters) {
                if (MORSE_CODE[letter] !== undefined) {
                    result += MORSE_CODE[letter];
                }
            }
            result += ' ';
        }
        return result.trim();
    }
    
 ## Your order, please
 
     const order = (words) => {
        let res = words.split(' ').sort((a, b) => {
            return a.match(/\d/) - b.match(/\d/); 
        });
        return res.join(' ');
    }
 
 ## Counting Duplicates
 
     const duplicateCount = (text) => {
        let res = 0;
        let arr = text.toLowerCase().split('');
        for (let i = 0; i < arr.length; i++) {

        }
        return res;
    }

## Simple Pig Latin

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
    
## Valid Parentheses

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

## Convert string to camel case

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
    
 ## Unique In Order
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
    
 ## Fold an array

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
    
 ## Encrypt this!
 
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
    
## Format a string of names like 'Bart, Lisa & Maggie'. (retired)

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
