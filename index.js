let myEach = (collection, callback) => {
    for (const key in collection) {
        callback(collection[key]);
    }
    return collection
}

function myMap(collection, callback) {
    let newArr = []
    for (const el in collection) {
        newArr.push(callback(collection[el]));
    }
    return newArr
}

function myReduce(collection, callback, acc = -2) {
    let total = 0;
    for (const el in collection) {
        total = callback(total, collection[el]);
    }
    return total + acc;

}

function myFind(collection, predicate) {
    for (const el in collection) {
        if (predicate(collection[el])) {
            return collection[el];
        }
    }
}

function myFilter(collection, predicate) {
    let newArr = []
    for (const el in collection) {
        if (predicate(collection[el])) {
            newArr.push(collection[el]);
        }
    }
    return newArr
}

function mySize(collection) {
    let total = 0
    for (const el in collection) {
        total++
    }
    return total
}

function myFirst(array, n = 1) {
    let newArr = []
    if (n !== 1) {
        for (let el = 0; el < n; el++) {
            newArr.push(array[el])
        }
        return newArr
    }
        return array[0]
}

function myLast(array, n = 1){
    let newArr = []
    if (n !== 1) {
        for (let el = n; el > 0; el--) {
            newArr.push(array[(array.length-el)])
        }
        return newArr
    }
        return array[(array.length - 1)]
}

function myKeys(obj){
    return Object.keys(obj)
}

function mySortBy(arr,callback){
    let newArr = []
    for (const el in collection) {
        newArr.push(callback(collection[el]));
    }
    return newArr.sort();
}

function myValues(obj){
    return Object.values(obj)
}
console.log(myLast([5, 4, 3, 2, 3]))