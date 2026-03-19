Loop control statements change the normal execution of loops.

## Types

### 1. `break`

Terminates the loop immediately.

```c
for (int i = 1; i <= 5; i++) {
    if (i == 3)
        break;
    printf("%d ", i);
}
```

Output: `1 2`

### 2. `continue`

Skips the current iteration and moves to the next iteration.

```c
for (int i = 1; i <= 5; i++) {
    if (i == 3)
        continue;
    printf("%d ", i);
}
```

Output: `1 2 4 5`

`break` exits the loop, `continue` skips one iteration.
