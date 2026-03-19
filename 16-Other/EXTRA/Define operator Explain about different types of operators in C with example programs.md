An operator is a symbol that performs an operation on one or more operands.

## Types of Operators in C
write ⭐️, enough for exam

| Type                   | Operators         | what they do?                                       | Example                                             |
| ---------------------- | ----------------- | --------------------------------------------------- | --------------------------------------------------- |
| ⭐️Arithmetic operators | `+ - * / %`       | basic math                                          | `c = a + b;`                                        |
| ⭐️Relational           | `> < >= <= == !=` | compares 2 values,                                  | `a > b`                                             |
| Logical                | `&& !` \| \|      | AND,NOT,OR                                          | a > 0 && b > 0<br>this means both must be true.     |
| ⭐️Assignment           | `= += -= *= /=`   | store value in variable                             | `x += 5;` adds +5 to x                              |
| Increment/Decrement    | `++ --`           | add or sub                                          | `i++;`                                              |
| ⭐️Bitwise              | `& ^ ~ << >>` \|  | operates on bits                                    | `a & b`                                             |
| Conditional            | `?:`              | can replace if and else, the only terinary operator | `max = a > b ? a : b;` if a is > b give `a` to max. |


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
