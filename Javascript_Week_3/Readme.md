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


