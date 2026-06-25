# Q1. Explain all Operators in C (including unary and bitwise) with examples. 🌟

An operator is a symbol that performs an operation on one or more operands.

## Types of Operators in C

| Operator name       | Operators         | what they do?                                       | Example                                                    |
| ------------------- | ----------------- | --------------------------------------------------- | ---------------------------------------------------------- |
| Arithmetic          | `+ - * / %`       | basic math `%` = remainder                          | `a+b`                                                      |
| Relational          | `> < >= <= == !=` | compares two values, and gives true or false        | `a > b`                                                    |
| Logical             | && ! \| \|        | AND, NOT, OR                                        | a > 0 && b > 0<br>this means both conditions must be true. |
| Assignment          | `= += -= *= /=`   | stores or updates a variables                       | `x += 5;` adds +5 to x                                     |
| unary               | `++ --`           | acts on single variables                            | `i++;`                                                     |
| Bitwise             | & \| ^ ~ << >>    | operates on bits                                    | `a & b`                                                    |
| Conditional/Ternary | `?:`              | can replace if and else, the only terinary operator | `max = a > b ? a : b;` if a is > b give `a` to max.        |

## Example Program

```c
#include <stdio.h>

int main() {
    int a = 10, b = 3;

    printf("Addition = %d\n", a + b);
    printf("Greater = %d\n", a > b);
    printf("Logical AND = %d\n", (a > 0 && b > 0));
    printf("Remainder = %d\n", a % b);
    return 0;
}
```

Operators are essential in C for calculations, comparisons, decision making, and memory-related tasks.

---
# Q2. Explain type conversion and type casting with an example program. 🌟
> Converting one datatype value into another datatype value is called **type conversion or type casting**.

There are **two categories**:

### **1. Implicit Type Conversion**

> Implicit type conversion is also called **Automatic Type Conversion** or **Type Promotion**.

- It is performed by the **compiler**
    
- Programmer intervention is **not required**
    
- Compiler converts **lower datatype to higher datatype**
    

##### **Example Program (Implicit Conversion)**

```
#include <stdio.h>  
  
int main()  
{  
    int n = 100;  
    char c = 'a';  
    float sum;  
  
    sum = n + c;  
  
    printf("The sum = %f", sum);  
  
    return 0;  
}
```
##### **Explanation**

- `n` is integer (100)
    
- `c` is character ('a')
    
- ASCII value of `'a'` = **97**
    
- So internally:
    

sum = 100 + 97 = 197

- Result is stored in `float`
    

### Output:

197.000000

### **2. Explicit Type Conversion (Type Casting)**

> Explicit conversion is performed by the **programmer**.

**Syntax**
(datatype) expression;

#### Example:

int x;  
x = (int)3.142;
#### Explanation:

- `3.142` is float
    
- `(int)` converts float → int
    
- So result becomes:
    

x = 3

Decimal part is removed.

#### **Example Program (Explicit Conversion)**

```
#include <stdio.h>  
  
int main()  
{  
    float a;  
  
    a = (float)20/6;  
  
    printf("%f", a);  
  
    return 0;  
}
```
### Output:

3.333333

### **Conclusion**

Type conversion changes datatype automatically by compiler.  
Type casting changes datatype manually by programmer.  
Both are used to maintain compatibility between different data types.

---
# Q3. Write a C program to find the biggest of 3 numbers using ternary operator.

```
#include <stdio.h>
int main() {
    int a, b, c, big;
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    big = (a > b) ? (a > c ? a : c) : (b > c ? b : c);

    printf("Biggest number = %d\n", big);
    return 0;
}
```