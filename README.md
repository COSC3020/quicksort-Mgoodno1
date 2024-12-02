# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Worst case time complexity: O(n^2)
This worst case happens when the pivot choosen leads to unbalanced partitions, such that the problem size is only reduced by 1 element in each recursive call. Which results in (n) recursive calls each taking O(n) time. Thus leading to O(n^2), this can happen when the array is already sorted or the pivot is always the smallest or largest element.
