The `for` loop is used when the number of iterations is known in advance.

## Syntax

```c
for (initialization; condition; update) {
    statements;
}
```

## Flowchart

```mermaid
flowchart TD
    A([Start]) --> B[Initialization]
    B --> C{Condition}
    C -- True --> D[Execute statements]
    D --> E[Update]
    E --> C
    C -- False --> F([Stop])
```

## Example Program

```c
#include <stdio.h>

int main() {
    int i;
    for (i = 1; i <= 5; i++) {
        printf("%d\n", i);
    }
    return 0;
}
```
