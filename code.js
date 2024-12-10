function quicksort(array) {
    let stack = [];
    stack.push(0);
    stack.push(array.length - 1);

    while (stack.length > 0) {
        let right = stack.pop();
        let left = stack.pop();

        if (left < right) {
            let pivotIndex = partition(array, left, right);
            stack.push(pivotIndex + 1);
            stack.push(right);
            stack.push(left);
            stack.push(pivotIndex - 1);
        }
    }
    return array
}

function partition(array, left, right) { 
    let pivot = array[right];
    let i = left - 1;
    
    for (let j = left; j < right; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [array[i + 1], array[right]] = [array[right], array[i + 1]];
    return i + 1;
}
