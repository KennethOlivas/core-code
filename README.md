# core-code
Core code bootcamp

# Week challenges (Tuesday) 💻
## 1. video about compilation and interpretation

### Compilado

| Pros | Contras |
|--|--|
| Rápido | No es multiplataforma |
| Código privado | Requiere más pasos para compilar o demora más tiempo en compilar|


### Interpretado
| Pros | Contras |
|--|--|
| Multiplataforma | Más lento |
| No requiere pasos extras | Código publico |

## 2. Search and answer the question: Java language is compiled or interpreted?

Java es un lenguaje interpretado

## 3. Create an algorithm to calculate the equivalent of your local currencty to USD

	let cordoba = 35.42 

	function convertir(dollar) {
	    let resultado = dollar * cordoba
	    return resultado
	}


## 5. Why is pseudocode helpful?
 - Es importante para comprender lo que haran las funciones 
 - Comprender el problema que vamos a resolver
 - Dividir el problema en pequeñas partes

## 6. Create a pseudocode to calculate the aproximated age of a user base on the year they born, (you can define a variable with the actual year if you need it, like for example i could define Y <-- 2022)

  1. START
  2. Y <-- 2022
  3. X <-- GET
  4. R <-- Y - X
  5. PRINT R
  6. END

## 8. Why are flowcharts important to us as developers?
  
 Es importante por nos ayuda a:
 - demostrar cómo el código está organizado.
 - Visualizar la ejecución de un código dentro de un programa.
 - Mostrar la estructura de un sitio web o aplicación.
 - Comprender cómo los usuarios navegan por un sitio web o programa
 
# Week challenges (Wednesday) 💻
## 1. Learn about binary, decimal and hexadecimal numbers
R: Done

## 2. Translate the year you where born to binary, decimal and hexadecimal
### Year <-- 1999

### Binary

| Result | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 |
|--|--|--|--|--|--|--|--|--|--|--|--|
11110011111| 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |

### Hexadecimal

![image](https://user-images.githubusercontent.com/49175490/149250519-65680c9f-2479-47ec-adac-508d0e4e254a.png)

R: 7CF

### Decimal 

R:1999

## 3. Translate 51966 into hexadecimal and binary

### Hexadecimal

![image](https://user-images.githubusercontent.com/49175490/149250346-869fa1ee-b335-4820-a101-5c3071bdeec1.png)

R: CAFE


### Binary

![image](https://user-images.githubusercontent.com/49175490/149250841-091e48a8-eb88-4bc5-baae-282872051e8a.png)

R:1100101011111110

##  4. Use a Low-level language, for example MIPS aseembler, to do so, you will need to follow this guide. We recomend to check the guide first but also this presentation could be helpful.

R: Done
##  Base on the examples and the guide of the low-level language: 
###  5.1 Create a program to add two numbers given by the user 
R:

    .data

        number1: .asciiz "Print the first number: "
        number2: .asciiz "Print the second number: "
        result: .asciiz "Result = "
    
    .text

        main:

            li $v0, 4
            la $a0, number1
            syscall

            li $v0, 5
            syscall

            move $t0, $v0

            li $v0, 4
            la $a0, number2
            syscall

            li $v0, 5
            syscall

            move $t1, $v0

            add $s0 , $t0 , $t1

            li $v0 , 4
            la $a0 , result 
            syscall

            li $v0 , 1 
            move $a0 , $s0 
            syscall

### 5.2 Create a program that display your name
	.data
             buffer: .space 20
             inptutStr1:  .asciiz "Enter string (max 20 chars): "
             name:  .asciiz ""
	.text
		main:
		 la $a0, inptutStr1 #Load and print string asking for string
		 li $v0, 4
		 syscall

		 li $v0, 8
		 la $a0, buffer 
		 li $a1, 20
		 move $t0, $a0 
		 syscall

		 la $a0, name
		 li $v0, 4
		 syscall

		 la $a0, buffer #reload byte space to primary address
		 move $a0, $t0 # primary address = t0 address (load pointer)
		 li $v0, 4 # print string
		 syscall

		 li $v0, 10 
		 syscall

