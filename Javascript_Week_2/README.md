## Multiply
function multiply(a, b) {
    return a * b
}

## get character from ASCII Value

function getChar(c) {
    return String.fromCharCode(c);
}

## Binary Addition

function addBinary(a, b) {
    return ((a + b).toString(2))
}

## ASCII Total
function uniTotal(string) {
    let sum = 0;
    for (let str of string) {
        sum += str.charCodeAt();
    }
    return sum;
}

##Student's Final Grade

function finalGrade(exam, projects) {
    return (
        exam > 90 || projects > 10 ? 100 :
            exam > 75 && projects >= 5 ? 90 :
                exam > 50 && projects >= 2 ? 75 : 0
    )
}

## Holiday VIII - Duty Free

function dutyFree(normPrice, discount, hol) {
    if (discount === 0) {
        return "Infinity"
    }
    let discountPrice = normPrice * discount / 100;
    let holPrice = parseInt(hol / discountPrice);
    return holPrice;
}

## Valid Spacing

function validSpacing(s) {
    return s.trim() === s && !s.includes("  ");
}

## Twice as old

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let twiceAgeSon = sonYearsOld * 2;
    let diff = twiceAgeSon - dadYearsOld;
    if (twiceAgeSon > dadYearsOld) {
        return diff;
    } else {
        return diff * -1
    }
}

##Fake Binary

function fakeBin(x) {
    let res = '';
    for (let i = 0, length = x.length; i < length; i++) {
        if (x[i] < 5) {
            res += '0';
        } else {
            res += '1';
        }
    }
    return res;
}

## Exclamation marks series #2: Remove all exclamation marks from the end of sentence

const remove = (str) => {
    return str.replace(/!+$/, '');
}

## Vowel remover

const shortcut = (string) => {
    let shortcuts = ['a', 'e', 'i', 'o', 'u'];
    let res = '';
    for (let i = 0; i < string.length; i++) {
        if (!shortcuts.includes(string[i])) {
            res += string[i];
        }
    }
    return res;
}

## Rock Paper Scissors!

const rps = (p1, p2) => {
    let winner = '';
    if (p1 === p2) {
        return 'Draw!';
    } else if (p1 === 'rock') {
        winner = p2 === 'scissors' ? '1' : '2';
    } else if (p1 === 'scissors') {
        winner = p2 === 'paper' ? '1' : '2';
    } else if (p1 === 'paper') {
        winner = p2 === 'rock' ? '1' : '2';
    }
    return `Player ${winner} won!`;
}

##Persistent Bugger

const persistence = (num) => {
    let count = 0;
    let numString = num.toString(); // 39 -> '39' = ['3', '9'] 
    while (numString.length > 1) {
        let sum = 1;
        for (let i = 0, length = numString.length; i < length; i++) {
            sum *= parseInt(numString[i]);
        }
        count++;
        numString = sum.toString();
    }
    return count;
}
