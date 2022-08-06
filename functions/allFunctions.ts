export {sumTwoSmallerNumberFrom, isCommentReallySafe, getIsUsersListSafed, getGuessTheRigthNumberOfUser, getLongestStringFrom, getFilterValueOfarray, getMusicListInArrayFrom, deletePropertyRollnoFrom, getMostFrequentElementFrom, getUniquelyElementInArray, getFlattenOfArray, moveElementInEndOfArray, getVolumeCylinder, getProductOfTwoNumber, getRemoveDoubleCharacters, getExtractOfValueIndexes, getPromiseAdd, getLargestEvenNumber, getCubedOfNumber, getSingleElementOfArray, isBothObjetIsEqual};

let getVolumeCylinder : (a: number, b:number) => number
     getVolumeCylinder = (radius, height) => { 
    const pie = 3.145411
    return Number((2 * radius * height * pie).toFixed(4));
  }

 const getProductOfTwoNumber = (items: number, multi: number): number => items * multi;


 const getRemoveDoubleCharacters = (wordString: string) => {
    const words = new Set(wordString.split(''))
    return [...words].join('');
}

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


const getLargestEvenNumber = (arrayNumber: number[]) => arrayNumber.filter(element => element % 2 === 0).sort((a,b) => b-a).find(element => element)


  const getSingleElementOfArray = (firstArray: (number | String)[], SecondArray: (number | String)[]) => {
    const newArray = [...new Set (firstArray.concat(SecondArray))]
    return newArray
  }

  const moveElementInEndOfArray = (array: (Number|String)[], ...elements:(number|String)[]) => {
    const allElements = array.concat(elements)
    return allElements.flat(Infinity)
}

const getFlattenOfArray = (array: (Number|String)[]) => array.flat(Infinity)

const getUniquelyElementInArray = (array:  (Number|String)[] ) => [...new Set (array)]

function getMostFrequentElementFrom(array: (string|number)[] ){
  return array.sort((a,b) =>
  array.filter(v => v===a).length- array.filter(v => v===b).length).pop();
}
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


const isBothObjetIsEqual = (firstObjet: Student, secondObjet: Student) => {
  if (JSON.stringify(firstObjet) === JSON.stringify(secondObjet)){
    return true
  }else return false
}


const getMusicListInArrayFrom = (peopleList: any[]): string[] => [...new Set (peopleList.map(item => item.music).flat())]

const getFilterValueOfarray = (array: number[], ...indexes: number[])=> {
  indexes.map(index => delete array[index])
  return array.filter(element => element != undefined)
}

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

const isCommentReallySafe = (comment: string, insultList: string[]) => {
  return insultList.some(element =>comment.includes(element))
};

const sumTwoSmallerNumberFrom = (arrayOfNumber: number[]) => {
  arrayOfNumber.sort((a,b)=> a-b)
return arrayOfNumber[0] + arrayOfNumber[1]
};