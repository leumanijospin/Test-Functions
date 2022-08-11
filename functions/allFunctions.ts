export {sumTwoSmallerNumberFrom, isCommentReallySafe, areAllUsersSafed, guessTheCorrectNumberEnterByUser, getLongestStringFrom, getFilterArray, getMusicListFrom, deletePropertyFrom, getMostFrequentElementFrom, getUniquelyElement, getFlattenArray, addElementsInEndFrom, getVolumeCylinder, multiplication, removeRedundantCharacters, getExtractValuesIndexes, getSum, getLargestEvenNumber, sumOfCubedNumberUpTo, getUniqueElements, bothObjectsAreEquals};

const  getVolumeCylinder = (radius: number, height:number): number => Number((2 * radius * height * Math.PI).toFixed(4));
  
const multiplication = (firstNumber: number, secondNumber: number): number =>  firstNumber * secondNumber;

const removeRedundantCharacters = (word: string): string => [...new Set(word.split(''))].join('');

const getSum = (firstNumber: number, secondNumber: number): object => {
    return new Promise ((resolve, reject)=> {
      if (firstNumber && secondNumber) {
       resolve(firstNumber + secondNumber)
      }
      else {
         reject('Must provide two parameters') 
      }
    })
  }
  
  
const getExtractValuesIndexes = (values: (number|string)[], ...indexes: number[]): (number|string)[] => indexes.map(index => values[index]);

const sumOfCubedNumberUpTo = (element: number): number  => {
   let sum = 0;
  for (let i = 1; i <= element; i++) {
      sum+=Math.pow(i, 3);
  }
   return sum;
 }


const getLargestEvenNumber = (numbers: number[]): number => Math.max(...numbers.filter(element => element % 2 === 0))

const getUniqueElements = (firstArray: (number | string)[], secondArray: (number | string)[]): (number | string)[]=> [...new Set (firstArray.concat(secondArray))]
    
const addElementsInEndFrom = (elements: (number|string)[], ...elementsToAdd:(number|string)[]): (number|string)[] => elementsToAdd.concat(elements).flat(Infinity)
    

const getFlattenArray = (nestedArray: (number|string)[]): (number|string)[] => nestedArray.flat(Infinity)

const getUniquelyElement = (elements:  (number|string)[]): (number|string)[] => [...new Set (elements)]

type Element = number | string 

const getMostFrequentElementFrom = (elements: Array<Element>) => elements.sort((firstValue, secondValue) => elements.filter(element => element===firstValue).length- elements.filter(element => element===secondValue).length).pop();

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

const getMusicListFrom = (peopleList: Array<People>): string[] => [...new Set (peopleList.map(item => item.music).flat())]

const getFilterArray = (values: (string|number)[], indexes: number[]): (string|number)[] => values.filter(item =>!indexes.includes(values.indexOf(item)))

const getLongestStringFrom = (wordList: string[]): string => {
  return wordList.reduce((previousValue, currentValue)=> previousValue.length > currentValue.length ? previousValue : currentValue)
}

const guessTheCorrectNumberEnterByUser = (number: number): string => {
  const random = Math.floor(Math.random() * 10) + 1;
  if (number === random)return 'Good Work'
       else return 'Not Matched'
};


type User = {
  name: string;
  safe: boolean;
}

const areAllUsersSafed = (users: Array<User>): boolean => users.every(item =>item.safe)

const isCommentReallySafe = (word: string, wordList: string[]): boolean => wordList.every(element =>!word.includes(element))

const sumTwoSmallerNumberFrom = (numbers: Array<number>): number =>  {
       numbers.sort()
  return (numbers[0] + numbers[1]);
}

const factorialize = (number: number): number => number <= 0 ? 1 : number * factorialize(number-1); 