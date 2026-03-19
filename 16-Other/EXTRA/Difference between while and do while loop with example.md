Both `while` and `do-while` are looping statements in C. They are used to repeat a set of statements.

## Main Difference

| `while` | `do-while` |
| --- | --- |
| Condition is checked first | Condition is checked after loop body |
| May execute zero times | Executes at least once |
| Entry-controlled loop | Exit-controlled loop |

## Syntax of `while`

```c
while (condition) {
    statements;
}
```

## Syntax of `do-while`

```c
do {
    statements;
} while (condition);
```

## Example Program

```c
#include <stdio.h>

int main() {
    int i = 1;

    while (i <= 3) {
        printf("while: %d\n", i);
        i++;
    }

    i = 1;
    do {
        printf("do-while: %d\n", i);
        i++;
    } while (i <= 3);

    return 0;
}
```
