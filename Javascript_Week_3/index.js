

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

var countBits = function (n) {
    // Program Me
    let binary = n.toString(2);
    let count = 0;
    for (let i = 0; i < binary.length; i++) {
        count += binary[i] === '1' ? 1 : 0;
    }
    return count;
}

const order = (words) => {
    let res = words.split(' ').sort((a, b) => {
        return a.match(/\d/) - b.match(/\d/); 
    });
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



const solution = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
    }
    return sum;
}

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

/*
Implement a Tic-Tac-Toe (AKA: Noughts and crosses, Xs and Os) solver. The input to the solver function will be an array of length 9 representing the board. Output of the function will be the index of the desired move (0-8). You will always be X. You must make a valid move, and a winning move if available
*/

function solveTTT(board) {
    let moves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let boardArr = board.slice();
    let win = false;
    let res = 0;
    while (!win) {
        let index = moves.shift();
        if (boardArr[index] === 0) {
            boardArr[index] = 1;
            if (checkWin(boardArr)) {
                win = true;
                res = index;
            }
        }
    }
    return res;
}
