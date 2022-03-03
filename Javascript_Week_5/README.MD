## Square(n) Sum

```javascript
  export function squareSum(numbers: number[]): number {
       return numbers.reduce((acc, num) => acc + num * num, 0);
  }
```

## Growth of a Population

```javascript
  export class G964 {

      public static nbYear = (p0, percent, aug, p) => {
          // your code
          let years = 0;
          let population = p0;
          while (population < p) {
              population = population + population * percent / 100 + aug;
              years++;
          }
          return years;
      }
  }
```

## Mumbling

```javascript
  export function accum(s: string): string {
    return s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
  }
```

## A wolf in sheep's clothing

```javascript
  export function warnTheSheep(queue: string[]): string {
      let wolf = queue.indexOf('wolf');
      return wolf === queue.length - 1 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${queue.length - wolf -1}! You are about to be eaten by a wolf!`;
  }
```

## A wolf in sheep's clothing

```javascript
  export function thirt(n: number): number {
      let digits = n.toString().split('').map(Number);
      let sum = 0;
      for (let i = 0; i < digits.length; i++) {
          sum += digits[i];
          digits[i] = sum % 10;
      }
      return digits.length === 1 ? digits[0] : thirt(sum);
  }
```

## Playing with digits

```javascript
  export class G964 {

      public static digPow = (n: number, p: number) => {
          // your code
            let digits = n.toString().split('').map(Number);
            let sum = 0;
            for (let i = 0; i < digits.length; i++) {
                sum += digits[i] ** (p + i);
            }
            return sum % n === 0 ? sum / n : -1;
      }
  }
```
## Valid Braces

```javascript
  export function validBraces(braces: string): boolean {
      let tracker = []
      for(let i=0;i < braces.length; i++){
        if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
          tracker.push(braces[i])
        } else{
          if(tracker.length === 0) return false
          let lastValue = tracker[tracker.length-1]
          if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
          {
              tracker.pop()
          } else {
            break;
          }
        }
      }
      return tracker.length === 0
  }
```

## Tic-Tac-Toe

```javascript

  function solveTTT(board) {
    var winningOutcomes = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(var i = 0, l = winningOutcomes.length; i<l; i++)
      if(winningOutcomes[i].map(function(x) { return board[x]; }).join('') == 'XX')
        return winningOutcomes[i].reduce(function(y,x) { return y + (board[x] == '' ? x : 0); }, 0);

    return board.indexOf('');
  }

```

## Tic-Tac-Toe-like table Generator

```javascript
  function displayBoard(board, width){
    var arr=[];
    var k=0
    for (var i=0; i<2*board.length/width-1; i++)
    {
      if (i%2==0)
      {
        var s=[];
        while (s.length<width)
          s.push(" "+board[k++]+" ");
        arr.push(s.join("|"));
      }
      else
      {
        var s="---";
        for (var r=1; r<width; ++r)
          s+="----"
        arr.push(s)
      }
    }
    return arr.join("\n");
  }
```

## Duplicate Encoder

```typescript
  export function duplicateEncode(word: string){
      // ...
      let wordArray = word.toLowerCase().split('');
      let result = ''; 
      for (let i = 0; i < wordArray.length; i++) {
          let count = 0;
          for (let j = 0; j < wordArray.length; j++) {
          if (wordArray[i] === wordArray[j]) {
              count++;
          }
          }
          if (count > 1) { 
          result += ')';
          } else {
          result += '(';
          }
      }
      return result;
  }
```
## Find the odd int

```typescript
  export const findOdd = (xs: number[]): number => {
      let result: number = 0;
      for (let i = 0; i < xs.length; i++) {
          let count: number = 0;
          for (let j = 0; j < xs.length; j++) {
              if (xs[i] === xs[j]) {
                  count++;
              }
          }
          if (count % 2 !== 0) {
              result = xs[i];
          }
      }
      return result;
  };
```

## Which are in?

```typescript
  export class G964 {
    public static inArray(a1: string[], a2: string[]): string[] {
      // your code
      let arr = a2.join(" ")
      return a1.filter(item => arr.search(item) !== -1 && item !== undefined ).sort()

    }
  }
```

## Sums of Parts

```typescript
  export function partsSums(ls: number[]): number[] {
      let sum = ls.reduce((sum, n) => sum + n, 0)
      let res  = [sum]
      for (let i = 0; i < ls.length; i++){
          sum -= ls[i]
          res.push(sum)
      }
      return res
  }
```

## Consecutive strings

```typescript
  export function longestConsec(strarr: string[], k: number): string {
      let longest = '';
      let longestLength = 0;
      for (let i = 0; i < strarr.length - k + 1; i++) {
          let temp = '';
          for (let j = 0; j < k; j++) {
              temp += strarr[i + j];
          }
          if (temp.length > longestLength) {
              longest = temp;
              longestLength = temp.length;
          }
      }
      return longest;
  }
```
