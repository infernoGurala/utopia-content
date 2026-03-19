The `sqrt()` function from `math.h` is used to find the square root of a number.

## Program

```c
#include <stdio.h>
#include <math.h>

int main() {
    float num, root;

    printf("Enter a number: ");
    scanf("%f", &num);

    root = sqrt(num);

    printf("Square root = %.2f\n", root);
    return 0;
}
```

## Sample Output

```text
Enter a number: 25
Square root = 5.00
```

## Note

To compile this program in many C environments, link the math library.

```bash
gcc file.c -lm
```
