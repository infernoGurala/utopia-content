This program reads marks of five subjects, finds the total, and then calculates the average.

## Program

```c
#include <stdio.h>

int main() {
    float s1, s2, s3, s4, s5, total, avg;

    printf("Enter marks of 5 subjects: ");
    scanf("%f %f %f %f %f", &s1, &s2, &s3, &s4, &s5);

    total = s1 + s2 + s3 + s4 + s5;
    avg = total / 5;

    printf("Total = %.2f\n", total);
    printf("Average = %.2f\n", avg);
    return 0;
}
```

## Sample Output

```text
Enter marks of 5 subjects: 70 80 65 75 90
Total = 380.00
Average = 76.00
```
