export {sumTwoSmallerNumberFrom, isCommentReallySafe, getIsUsersListSafed, getGuessTheRigthNumberOfUser, getLongestStringFrom, getFilterValueOfarray, getMusicListInArrayFrom, deletePropertyRollnoFrom, getMostFrequentElementFrom, getUniquelyElementInArray, getFlattenOfArray, moveElementInEndOfArray, getVolumeCylinder, getProductOfTwoNumber, getRemoveDoubleCharacters, getExtractOfValueIndexes, getPromiseAdd, getLargestEvenNumber, getCubedOfNumber, getSingleElementOfArray, isBothObjetIsEqual};

  const  getVolumeCylinder = (radius: number, height:number): number => { 
    const pie = 3.145411
    return Number((2 * radius * height * pie).toFixed(4));
  }

 const getProductOfTwoNumber = (numberToMultiply: number, multiplier: number): number =>  numberToMultiply * multiplier;
 
 const getRemoveDoubleCharacters = (wordString: string): string => [...new Set(wordString.split(''))].join('');

const getPromiseAdd = (firstValue: number, secondValue: number) => {
    return new Promise ((resolve, reject)=> {
      if (firstValue && secondValue) {
       resolve(firstValue + secondValue)
      }
      else {
         reject('Must provide two parameters') 
      }
    })
  }
  

const getExtractOfValueIndexes = (arrayOfValue: (number | String)[], ...indexes: number[]) => indexes.map(index => arrayOfValue[index]);

const getCubedOfNumber = (element: number)  => {
   let sum = 0;
  for (let i = 1; i <= element; i++) {
      sum+=Math.pow(i, 3);
  }
   return sum;
 }


const getLargestEvenNumber = (arrayNumber: number[]) => arrayNumber.filter(element => element % 2 === 0).sort().pop()


  const getSingleElementOfArray = (firstArray: (number | String)[], SecondArray: (number | String)[]) => [...new Set (firstArray.concat(SecondArray))]
    


  const moveElementInEndOfArray = (array: (Number|String)[], ...elements:(number|String)[]) => array.concat(elements).flat(Infinity)
    

const getFlattenOfArray = (array: (Number|String)[]) => array.flat(Infinity)

const getUniquelyElementInArray = (array:  (Number|String)[] ) => [...new Set (array)]

const getMostFrequentElementFrom = (array: (string|number)[] ) => array.sort((firstValue,secondValue) => array.filter(element => element===firstValue).length- array.filter(element => element===secondValue).length).pop();

interface Student{
  name: String,
  class: String
  rollno: Number[]
  true: boolean
}

type iud = number|string

const deletePropertyRollnoFrom = (student: Student, property: iud) => {
  if (student.hasOwnProperty(property)) {
    delete student[property]
    return student
  }
  else return 'is not exit property'
}

const isBothObjetIsEqual = (firstObjet: Student, secondObjet: Student) =>  JSON.stringify(firstObjet) === JSON.stringify(secondObjet)

const getMusicListInArrayFrom = (peopleList: any[]): string[] => [...new Set (peopleList.map(item => item.music).flat())]

const getFilterValueOfarray = (array: number[], select: number[]) => array.filter(item => !select.includes(array.indexOf(item)))

const getLongestStringFrom = (array: string[]) => {
  return array.reduce((previousValue, currentValue)=> previousValue.length > currentValue.length ? previousValue : currentValue)
}

const getGuessTheRigthNumberOfUser = (number: number) => {
  let random = Math.floor(Math.random() * 10) + 1;
  if (number === random){
      return 'Good Work'
  }else return 'Not Matched'
};

const getIsUsersListSafed = (userList: any[]): boolean => userList.every(item =>item.safe)

const isCommentReallySafe = (comment: string, insultList: string[]) =>  insultList.some(element =>comment.includes(element))

const sumTwoSmallerNumberFrom = (arrayOfNumber: any): number =>   arrayOfNumber.sort().shift() + arrayOfNumber.sort().shift()