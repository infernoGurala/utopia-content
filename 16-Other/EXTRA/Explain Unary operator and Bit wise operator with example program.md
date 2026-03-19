## Unary Operators

Unary operators work on a single operand.

Examples:

- `++` increment
- `--` decrement
- `-` unary minus
- `!` logical NOT

### Unary Example

```c
#include <stdio.h>

int main() {
    int a = 5;
    printf("a = %d\n", a);
    printf("++a = %d\n", ++a);
    printf("--a = %d\n", --a);
    return 0;
}
```

## Bitwise Operators

Bitwise operators work on individual bits of integer values.

| Operator | Meaning |
| --- | --- |
| `&` | Bitwise AND |
| `|` | Bitwise OR |
| `^` | Bitwise XOR |
| `~` | Bitwise NOT |
| `<<` | Left shift |
| `>>` | Right shift |

### Bitwise Example

```c
#include <stdio.h>

int main() {
    int a = 5, b = 3;
    printf("a & b = %d\n", a & b);
    printf("a | b = %d\n", a | b);
    printf("a ^ b = %d\n", a ^ b);
    return 0;
}
```

## Note

Unary operators are used for single-value operations, while bitwise operators are mainly used in low-level and efficient integer processing.
