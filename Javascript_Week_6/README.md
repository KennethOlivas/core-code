## Build Tower

```typescript
  export const towerBuilder = (nFloors: number): string[] => {
     // build here
      let tower = [];
      for (let i = 0; i < nFloors; i++) {
          tower.push(" ".repeat(nFloors - i - 1)
              + "*".repeat((i * 2) + 1)
              + " ".repeat(nFloors - i - 1))
      }
      return tower;
  }
```

## Highest Scoring Word

```typescript
  export const high = (str: string): string => {
      let result: string = '';
      let max: number = 0;
      let words: string[] = str.split(' ');
      for (let i = 0; i < words.length; i++) {
          let word: string = words[i];
          let score: number = 0;
          for (let j = 0; j < word.length; j++) {
              score += word.charCodeAt(j) - 96;
          }
          if (score > max) {
              max = score;
              result = word;
          } else if (score === max) {
              if (word < result) {
                  result = word;
              }
          }
      }
      return result;
  }
```

## Equal Sides Of An Array

```typescript
  export function findEvenIndex(arr: number[]): number
  {
    //Code goes here!
      let result: number = -1;
      let sumLeft: number = 0;
      let sumRight: number = 0;
      for (let i = 0; i < arr.length; i++) {
          sumRight = 0;
          for (let j = i + 1; j < arr.length; j++) {
              sumRight += arr[j];
          }
          sumLeft = 0;
          for (let k = 0; k < i; k++) {
              sumLeft += arr[k];
          }
          if (sumLeft === sumRight) {
              result = i;
          }
      }
      return result;
  }
```

## Meeting

```typescript
  export function meeting(s: string): string {
      let result: string = '';
      let temp: string[] = s.split(';');
      let temp2: string[] = [];
      let temp3: string[] = [];
      for (let i: number = 0; i < temp.length; i++) {
          temp2 = temp[i].split(':');
          temp3.push(temp2[1] + ',' + temp2[0]);
      }
      temp3.sort();
      for (let i: number = 0; i < temp3.length; i++) {
          temp2 = temp3[i].split(',');
          result += "(" + temp2[0].toUpperCase() + ", " + temp2[1].toUpperCase() + ")";
      }
      return result;
  }
```

## Street Fighter 2 - Character Selection

```typescript
 export function streetFighterSelection(fighters: Array<string[]>, position: number[], moves: string[]) {
   let characters = new Array<string>();
  
  for( let move of moves ){
    switch( move ){
    case 'left':   position[0] = ((position[0]===0)? 5: position[0]-1); break;
    case 'right':  position[0] = ((position[0]===5)? 0: position[0]+1); break;
    case 'up':     position[1] = 0; break;
    case 'down':   position[1] = 1; break;
    }
    
    characters.push( fighters[position[1]][position[0]] );
  }   
  
  return characters;
}
```


