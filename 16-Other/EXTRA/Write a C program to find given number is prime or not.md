A prime number has exactly two factors: `1` and itself.
- assume n is the number
- if n<2, n is not a prime number
- and every number from 2 to n-1 has a remainder non zero.
## Program

```c
#include <stdio.h>

int main()
{
    int n, primeYN, i;
    scanf("%d", &n);
    primeYN = 1;

    if (n < 2) {
        primeYN = 0;
    }
    else {
        for (i = 2; i < n; i++) {
            if (n % i == 0) {
                primeYN = 0;
                break;
            }
        }
    }

    if (primeYN == 1) {
        printf("Prime\n");
    }
    else {
        printf("Not a Prime\n");
    }

    return 0;
}
```

---

## Example Run
```
Enter a number: 7
7 is Prime

Enter a number: 9
9 is Not Prime       ← because 9 % 3 == 0
```
