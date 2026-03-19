Input and output functions are used to read data from the user and display results on the screen.

these are included in the library stdio.h
## Common Input/Output Functions

| Function    | Purpose                        |
| ----------- | ------------------------------ |
| `printf()`  | Displays output                |
| `scanf()`   | Reads formatted input          |

## Example Program

```c
#include <stdio.h>

int main() {
    int age;
    char grade;

    printf("Enter age: ");
    scanf("%d", &age);

    printf("Enter grade: ");
    scanf(" %c", &grade);

    printf("Age = %d\n", age);
    printf("Grade = %c\n", grade);
    return 0;
}
```

## Important Point

`scanf()` requires the address of the variable, so `&` is generally used before variable names.
