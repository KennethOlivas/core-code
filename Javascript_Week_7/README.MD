
## Encrypt this!

```javascript
  export const encryptThis = (str: string): string => {
      if (str === '') {
          return '';
      }
      let string = str.split(' '); 
      let outputString: string[] = []; 
      string.map(str => {
        if (str.length === 1) { 
          let aux = str.charCodeAt(0).toString()
          outputString.push(aux); 
        } 
        else {
          let tempStr = str.split(''); 
          let aux = str.charCodeAt(0).toString()
          tempStr[0] = aux
          tempStr[1] = str[str.length - 1];
          tempStr[str.length - 1] = str[1];
          outputString.push(tempStr.join('')); 
        }
      });
      return outputString.join(' '); 
  }
```

## Make the Deadfish Swim

```javascript
  export function parse(data: string): number[] {
      let result: number[] = [];
      let value: number = 0;
      for (let i: number = 0; i < data.length; i++) {
          let currentChar: string = data[i];
          switch (currentChar) {
              case 'i':
                  value++;
                  break;
              case 'd':
                  value--;
                  break;
              case 's':
                  value *= value;
                  break;
              case 'o':
                  result.push(value);
                  break;
          }
      }
      return result;
  }
```


## Dashatize it

```javascript
  export const dashatize = (num: number) => {
    // get 'em
   return !isNaN(num)
    ? num
      .toString()
      .split('')
      .map((n: string) => Number(n) % 2 === 0 ? n : `-${n}-` )
      .join('')
      .replace(/-{2,}/g, '-')
      .replace(/^-|-$/g, '')
    : 'NaN'
  }
```


## Count the smiley faces!

```javascript
  export function countSmileys(arr: string[]) {
      let result: number = 0;
      arr.map(str => {
          if (str.length === 2) {
              if (str[0] === ':' || str[0] === ';') {
                  if (str[1] === ')' || str[1] === 'D') {
                      result++;
                  }
              }
          }
          else if (str.length === 3) {
              if (str[0] === ':' || str[0] === ';') {
                  if (str[1] === '-' || str[1] === '~') {
                      if (str[2] === ')' || str[2] === 'D') {
                          result++;
                      }
                  }
              }
          }
      });
      return result;
  }
```


## Human Readable Time

```javascript
   export function humanReadable(seconds:number):string {
      let hours: number = Math.floor(seconds / 3600);
      let minutes: number = Math.floor((seconds % 3600) / 60);
      let result: string = '';
      if (hours < 10) {
          result += '0' + hours + ':';
      }
      else {
          result += hours + ':';
      }
      if (minutes < 10) {
          result += '0' + minutes + ':';
      }
      else {
          result += minutes + ':';
      }
      let secondsLeft: number = seconds % 60;
      if (secondsLeft < 10) {
          result += '0' + secondsLeft;
      }
      else {
          result += secondsLeft;
      }
      return result;
  }
```


## Base64 Encoding

```javascript
export function toBase64(str: string): string {
  return new Buffer(str).toString('base64');
}

export function fromBase64(str: string): string {
  return new Buffer(str, 'base64').toString('ascii');
}
```
