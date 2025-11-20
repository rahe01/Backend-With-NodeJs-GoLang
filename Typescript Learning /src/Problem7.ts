const getUniqueValues = (arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] => {
    const result: (number | string)[] = [];

    // Helper function to check if a value already exists in result
    const exists = (value: number | string): boolean => {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) return true;
        }
        return false;
    }

    // Add values from first array
    for (let i = 0; i < arr1.length; i++) {
        if (!exists(arr1[i])) {
            result[result.length] = arr1[i];
        }
    }

    // Add values from second array
    for (let i = 0; i < arr2.length; i++) {
        if (!exists(arr2[i])) {
            result[result.length] = arr2[i];
        }
    }

    return result;
}

// Test
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(getUniqueValues(array1, array2));
