## Square(n) Sum

```javascript
  export function squareSum(numbers: number[]): number {
       return numbers.reduce((acc, num) => acc + num * num, 0);
  }
```
