import {sumTwoSmallerNumberFrom, isCommentReallySafe, areAllUsersSafed, GuessTheCorrectNumberEnterByUser, getLongestStringFrom, getFilterValueOfarray, getMusicListInArrayFrom, getMostFrequentElementTo, getUniquelyElementInArray, getFlattenOfArray, AddElementsInEndOfArray, getSingleElementInArray, getVolumeCylinder, getMultiplication, removeRedundantCharacters, getExtractOfValueIndexes, getAdd, sumOfCubedNumberUpTo, deletePropertyFrom, isBothObjetIsEqual} from '../functions/allFunctions.ts';

test('the value of a new array is provide of indexes of other array', () => {
    expect(getExtractOfValueIndexes([1,2,4,8,6,5],0)).toStrictEqual([1])
})


test('three multiplicate by tree egal nine', () => {
    expect(getMultiplication(3,3)).toBe(9);
});



test ('the result of one plus two egal to three', ()=> {
    return getAdd(1,2).then(result => {
        expect(result).toBe(3);
    })
})

test ('the result of one is Must provide two', () => {
    return getAdd(1).catch(error => {
        expect(error).toMatch('Must provide two')
    })
})

test('"jospinn" is jospin', () => {
    expect (removeRedundantCharacters('jospinn')).toBe('jospin')
})

test ('"jospinn" is jospin', () => {
    expect (removeRedundantCharacters('jospinnn')).toBe('jospin')
})

test ('the sum two cubed egal nine', () => {
    expect(sumOfCubedNumberUpTo(2)).toBe(9) 
})

test ('the sum two cubed egal nine', () => {
    expect(sumOfCubedNumberUpTo(1)).toBe(1) 
})

test ('the sum two cubed egal nine', () => {
    expect(sumOfCubedNumberUpTo(0)).toBe(0) 
})

test ('the sum two cubed egal nine', () => {
    expect(sumOfCubedNumberUpTo(3)).toBe(36) 
})


test('product of pie, radius and height equal to volumeCylinder', () => {
    expect(getVolumeCylinder(4,5)).toBe(125.6637)
})

test ('the two arrays must be a single array with no element duplicates', () => {
    expect (getSingleElementInArray([1,2,3,4], [6,4,7,1])).toStrictEqual([1,2,3,4,6,7])
})

test ('the two arrays must be a single array with no element duplicates', () => {
    expect (getSingleElementInArray([6,2,3,4,'bold','hungry'], [6,4,'hungry',7,1])).toStrictEqual([6,2,3,4, 'bold','hungry',7,1])
})

test ('adding elements at the end an array', () => {
    expect(AddElementsInEndOfArray([1,2,8], 6,9,8,2)).toStrictEqual([1,2,8,6,9,8,2])
})

test ('adding elements at the end an array', () => {
    expect(AddElementsInEndOfArray([1,2,8], 6,9,'jos')).toStrictEqual([1,2,8,6,9,'jos'])
})

test ('reduce the depth of an array to a single array', () => {
    expect (getFlattenOfArray([[1,2,3,[4,[5,[3]]]]])).toStrictEqual([1,2,3,4,5,3])
})

test ('reduce the depth of an array to a single array', () => {
    expect (getFlattenOfArray([[[[[]]]]])).toStrictEqual([])
})

test ('remove duplicates from an array of elements', () => {
    expect(getUniquelyElementInArray([1,2,3,5,1,2])).toStrictEqual([1,2,3,5])
})

test ('the element is more frequent in an array ', () => {
    expect(getMostFrequentElementTo([2,4,9,6,2,8,2,10])).toBe(2)
})

test ('remove property from an object', () =>{
    expect(deletePropertyFrom({name: "David Rayy", sclass: "VI", rollno: 12}, 'rollno')).toMatchObject({name: "David Rayy", sclass: "VI"})
})

test ('remove property from an object', () =>{
    expect(deletePropertyFrom({name: "David Rayy", sclass: "VI", rollno: 12}, 'age')).toBe('is not exit property')
})

test ('the second object contains all elements of the first object', ()=> {
    expect(isBothObjetIsEqual({name: 'ruth', age: 12}, {name: 'ruth', age: 12})).toStrictEqual(true)
})

test ('the second object is not contains all elements of the first object', ()=> {
    expect(isBothObjetIsEqual({name: 'ruth', age: 12})).toStrictEqual(false)
})

test ('the object containing properties such as name and music style is a msic array', () => {
    expect(getMusicListInArrayFrom([{name: 'john', music: ['classic', 'rap', 'disco']},
    {name: 'marc', music: ['classic', 'disco']},
    {name: 'niska', music: 'rap'}])).toStrictEqual(['classic', 'rap', 'disco'])
})


test('the array contains the non-filter values', ()=> {
    expect(getFilterValueOfarray([1,2,8,7,9], 1,3,4)).toStrictEqual([1,8])
} )

test('the array contains the non-filter values', ()=> {
    expect(getFilterValueOfarray([1,2,8,7,9], 0,1,3,4)).toStrictEqual([8])
} )

test('the longest string of array is lithopedion', () => {
    expect(getLongestStringFrom(['jospin', 'uldr', 'avantador', 'lithopedion'])).toMatch('lithopedion')
})

test('match the guess number in random integer',() => {
    Math.random = jest.fn(() => 0.35)
    expect(GuessTheCorrectNumberEnterByUser(4)).toMatch('Good Work')
})

test('match the guess number in random integer',() => {
    Math.random = jest.fn(() => 0.02)
    expect(GuessTheCorrectNumberEnterByUser(2)).toMatch('Not Matched')
})

test('match the guess number in random integer',() => {
    Math.random = jest.fn(() => 0.54)
    expect(GuessTheCorrectNumberEnterByUser(6)).toMatch('Good Work')
})

test('match the guess number in random integer',() => {
    Math.random = jest.fn(() => 0.54)
    expect(GuessTheCorrectNumberEnterByUser(4)).toMatch('Not Matched')
})

test('check if all users are safe or not', ()=> {
    expect(areAllUsersSafed([{name: 'john', safe: true},{name: 'jospin', safe: false},{name: 'uldr', safe: true}])).toStrictEqual(false)
})

test('check if all users are safe or not', ()=> {
    expect(areAllUsersSafed([{name: 'john', safe: true},{name: 'jospin', safe: true},{name: 'uldr', safe: true}])).toStrictEqual(true)
})

test('check if the comment contains insults', () => {
    expect(isCommentReallySafe('The video is cool... "fuck"!', ['fuck', 'shit', 'bastard'])).toStrictEqual(true)
})

test('check if the comment contains insults', () => {
    expect(isCommentReallySafe('The video is cool... !', ['fuck', 'shit', 'bastard'])).toStrictEqual(false)
})

test ('the sum of the two smallest number in the array', () => {
    expect(sumTwoSmallerNumberFrom([190, 5, 4200, 1])).toBe(6)
})

test ('the sum of the two smallest number in the array', () => {
    expect(sumTwoSmallerNumberFrom([190, 51, 42, 789])).toBe(93)
})
