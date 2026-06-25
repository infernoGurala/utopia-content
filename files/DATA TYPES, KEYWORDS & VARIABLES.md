# Q1.What are the `Basic` or `Primitive data` types in C? Write the significance of each. 🌟

A data type tells the compiler what kind of value a variable can store and how much memory it needs.

## Primitive Data Types in C

| Data type | Purpose                                          | Example                |
| --------- | ------------------------------------------------ | ---------------------- |
| `int`     | Stores whole numbers                             | `int age = 20;`        |
| `char`    | Stores a single character                        | `char grade = 'A';`    |
| `float`   | Stores decimal values                            | `float price = 12.5;`  |
| `double`  | Stores larger decimal values with more precision | `double pi = 3.14159;` |
| `void`    | Represents no value                              | `void display();`      |


## Example Program

```c
#include <stdio.h>

int main() {
    int age = 18;
    char grade = 'A';
    float marks = 87.5f;
    double pi = 3.14159;

    printf("Age = %d\n", age);
    printf("Grade = %c\n", grade);
    printf("Marks = %.1f\n", marks);
    printf("Pi = %.5lf\n", pi);
    return 0;
}
```

## Conclusion

Primitive data types are the basic building blocks used to declare variables in C.

---
# Q2. Write short notes on identifiers, keywords,variables and constants.
## Identifiers

Identifiers are names given to variables, functions, arrays, and other user-defined items.

Examples: `total`, `marks`, `display`.

Rules:

- They can contain letters, digits, and underscore.
- They cannot start with a digit.
- Keywords cannot be used as identifiers.

## Keywords

Keywords are reserved words with predefined meanings in C.

Examples: `int`, `float`, `if`, `else`, `return`, `while`.

## Variables

Variables are named memory locations used to store values that may change during program execution.

Example:

```c
int age = 18;
```

## Constants

Constants are fixed values that do not change during program execution.

Examples:

```c
const float PI = 3.14;
#define MAX 100
```

#### for yoyr understandinggg

- Identifier: names given to a variable `like "total_mark=50" total_mark is identifier`
- Keyword: reserved word `like int,float`
- Variable: value can change `total_mark=50, then the memroy loaction of 50 is the variable`
- Constant: value remains fixed

---

# Q3. Define Constant.Explain types of defining constants with example program.
A constant is a fixed value that does not change during the execution of a program.

## Types of Constants in C

### 1. Integer Constants

Examples: `10`, `-25`, `1000`
```
const int myint = 10;
```

### 2. Floating Constants

Examples: `3.14`, `25.5`, `-7.2`
```
const float mydecimal = 3.14;
```

### 3. Character Constants

Examples: `'A'`, `'9'`, `'#'`
```
const char mychar = 'A';
```
### 4. String Constants

Examples: `"Hello"`, `"C Programming"`
```
const char myword[99] = Hello;
```

### 5. Symbolic Constants

Defined using `#define`.

```c
#define PI 3.14
```

### 6. Constant Variables

Defined using `const`.

```c
const int MAX = 100;
```

## Example Program

```c
#include <stdio.h>
#define PI 3.14

int main() {
    const int MAX = 100;
    printf("PI = %.2f\n", PI);
    printf("MAX = %d\n", MAX);
    return 0;
}
```

---
