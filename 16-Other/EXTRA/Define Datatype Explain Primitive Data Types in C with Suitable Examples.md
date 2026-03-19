A data type tells the compiler what kind of value a variable can store and how much memory it needs.

## Primitive Data Types in C

| Data type | Purpose                                          | Example                |
| --------- | ------------------------------------------------ | ---------------------- |
| `int`     | Stores whole numbers                             | `int age = 20;`        |
| `char`    | Stores a single character                        | `char grade = 'A';`    |
| `float`   | Stores decimal values                            | `float price = 12.5;`  |
| `double`  | Stores larger decimal values with more precision | `double pi = 3.14159;` |
| `void`    | Represents no value                              | `void display();`      |


## Example Program

```c
#include <stdio.h>

int main() {
    int age = 18;
    char grade = 'A';
    float marks = 87.5f;
    double pi = 3.14159;

    printf("Age = %d\n", age);
    printf("Grade = %c\n", grade);
    printf("Marks = %.1f\n", marks);
    printf("Pi = %.5lf\n", pi);
    return 0;
}
```

## Conclusion

Primitive data types are the basic building blocks used to declare variables in C.
