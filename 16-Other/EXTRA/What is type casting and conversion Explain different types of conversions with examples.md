Type conversion means changing a value from one data type to another. In C, this can happen automatically or manually.

## Types of Conversion

### 1. Implicit Conversion

This is done automatically by the compiler.

Example:

```c
int a = 10;
float b;
b = a;
```

Here `a` is automatically converted from `int` to `float`.

### 2. Explicit Conversion or Type Casting

This is done by the programmer using a cast operator.

Example:

```c
int a = 10, b = 3;
float result = (float)a / b;
```

Without type casting, integer division would give `3`. After casting, the answer becomes `3.333333`.

## Why It Is Used

- To avoid data loss in expressions
- To get accurate results
- To convert one data type into another when needed

## Example Program

```c
#include <stdio.h>

int main() {
    int a = 10, b = 3;
    float x = a;
    float y = (float)a / b;

    printf("Implicit conversion = %.1f\n", x);
    printf("Explicit conversion = %.2f\n", y);
    return 0;
}
```
