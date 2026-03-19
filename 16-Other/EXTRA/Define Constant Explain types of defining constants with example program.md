A constant is a fixed value that does not change during the execution of a program.

## Types of Constants in C

### 1. Integer Constants

Examples: `10`, `-25`, `1000`

### 2. Floating Constants

Examples: `3.14`, `25.5`, `-7.2`

### 3. Character Constants

Examples: `'A'`, `'9'`, `'#'`

### 4. String Constants

Examples: `"Hello"`, `"C Programming"`

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
