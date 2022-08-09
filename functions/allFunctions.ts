export {sumTwoSmallerNumberFrom, isCommentReallySafe, areAllUsersSafed, guessTheCorrectNumberEnterByUser, getLongestStringFrom, getFilterValueOfarray, getMusicListInArrayFrom, deletePropertyFrom, getMostFrequentElementFrom, getUniquelyElementInArray, getFlattenOfArray, AddElementsInEndOfArray, getVolumeCylinder, getMultiplication, removeRedundantCharacters, getExtractOfValueIndexes, getAdd, getLargestEvenNumberIn, sumOfCubedNumberUpTo, getSingleElementInArray, bothObjectsAreEquals};

const  getVolumeCylinder = (radius: number, height:number): number => Number((2 * radius * height * Math.PI).toFixed(4));
  
const getMultiplication = (firstNumber: number, secondNumber: number): number =>  firstNumber * secondNumber;
 
const removeRedundantCharacters = (word: string): string => [...new Set(word.split(''))].join('');

const getAdd = (firstValue: number, secondValue: number): object => {
    return new Promise ((resolve, reject)=> {
      if (firstValue && secondValue) {
       resolve(firstValue + secondValue)
      }
      else {
         reject('Must provide two parameters') 
      }
    })
  }
  
  
const getExtractOfValueIndexes = (arrayOfValue: (number | String)[], ...indexes: number[]): (number | String)[] => indexes.map(index => arrayOfValue[index]);

const sumOfCubedNumberUpTo = (element: number): number  => {
   let sum = 0;
  for (let i = 1; i <= element; i++) {
      sum+=Math.pow(i, 3);
  }
   return sum;
 }


const getLargestEvenNumberIn = (array: number[]): number => Math.max(...array.filter(element => element % 2 === 0))

const getSingleElementInArray = (firstArray: (number | String)[], SecondArray: (number | String)[]): (number | String)[]=> [...new Set (firstArray.concat(SecondArray))]
    
const AddElementsInEndOfArray = (array: (Number|String)[], ...elements:(number|String)[]): (Number|String)[] => array.concat(elements).flat(Infinity)
    

const getFlattenOfArray = (array: (Number|String)[]): (Number|String)[] => array.flat(Infinity)

const getUniquelyElementInArray = (array:  (Number|String)[]): (Number|String)[] => [...new Set (array)]

type Element = number | string 

const getMostFrequentElementFrom = (elements: Array<Element>) => elements.sort((firstValue: Element, secondValue:Element) => elements.filter(element => element===firstValue).length- elements.filter(element => element===secondValue).length).pop();

type Student = {
  name: string;
  age: number
}

type iud = keyof Student

const deletePropertyFrom = (student: Student, property: iud): Student| string => {
  if (student.hasOwnProperty(property)) {
    delete student[property]
    return student
  }
  else return 'is not exit property'
}

const bothObjectsAreEquals = (firstObjet: Student, secondObjet: Student): boolean =>  JSON.stringify(firstObjet) === JSON.stringify(secondObjet)

type People = {
  name: string;
  music: string[]
}

const getMusicListInArrayFrom = (peopleList: Array<People>): string[] => [...new Set (peopleList.map(item => item.music).flat())]

const getFilterValueOfarray = (array: (string |number)[], indexes: number[]): (string |number)[] => array.filter(item => !indexes.includes(array.indexOf(item)))

const getLongestStringFrom = (array: string[]): string => {
  return array.reduce((previousValue, currentValue)=> previousValue.length > currentValue.length ? previousValue : currentValue)
}

const guessTheCorrectNumberEnterByUser = (number: number): string => {
  let random = Math.floor(Math.random() * 10) + 1;
  if (number === random){
      return 'Good Work'
  }else return 'Not Matched'
};


type User = {
  name: string;
  safe: boolean;
}

const areAllUsersSafed = (users: Array<User>): boolean => users.every(item =>item.safe)

const isCommentReallySafe = (word: string, wordList: string[]): boolean =>  wordList.every(element => ! word.includes(element))

const sumTwoSmallerNumberFrom = (numbers: Array<number>): number =>  {
       numbers.sort()
  return (numbers[0] + numbers[1]);
}