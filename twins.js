const isSameBST = function(arr1, arr2) {
    if (arr1[0] !== arr2[0] || arr1.length !== arr2.length) {
        return false;
    }

    let sorted1 = arr1.concat().sort();
    let sorted2 = arr2.concat().sort();

    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i] !== sorted2[i]) {
            return false;
        }
    }

    return true;
}

const arr1 = [3, 5, 4, 6, 1, 0, 2];
const arr2 = [3, 1, 5, 2, 4, 6, 0];

console.log(isSameBST(arr1, arr2))