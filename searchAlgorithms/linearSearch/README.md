## Linear Search

The **Linear search algorithm** is a very basic one. It starts at the beginning of an array and loops through the whole array simply checking each value if it equals the searched one. 
There are several methods in JavaScript which perform the linear search:

* find()
* findIndex()
* includes()
* indexOf()

### BigO of linear search

Since the algorithm loop through the whole array in worst case scenario time complexity is O(n), same for average case scenario **O(n)**, the best case is O(1).

### Implementation of Linear Search

Write a function which accepts an array and a value, and return the index of found value otherwise -1.

```javascript
Input/Output:

linearSearch([9, 8, 4, 17, 39], 17); // 3
```

```javascript
Solution:

function linearSearch(arr, val){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }

    return -1;
}
```