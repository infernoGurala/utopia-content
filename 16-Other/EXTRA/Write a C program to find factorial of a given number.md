The factorial of a positive integer `n` is:

`n! = n x (n - 1) x (n - 2) x ... x 1`

## Program

```c
#include <stdio.h>

int main() {
    int n, i;
    long long fact = 1;

    printf("Enter a number: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        fact = fact * i;
    }

    printf("Factorial = %lld\n", fact);
    return 0;
}
```

## Sample Output

```text
Enter a number: 5
Factorial = 120
```
