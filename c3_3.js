///////////////////////////////////////////////////////
// Homework C3.3
// Open c3_3.html to test results in console log
//////////////////////////////////////////////////////


const student = {
  city : "Moscow",
  name : "Ivan"
}


// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.



function printObject (obj) {
  console.log(`Printing fields of ${obj}`);
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop, obj[prop]);
    }
  }
}

printObject(student)

// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

function checkPropInObj (str, obj) {
  return (str in obj);
}

console.log(checkPropInObj('name', student))


// Написать функцию, которая создает пустой объект, но без прототипа.

function createObjWithoutProto() {
  return Object.create(null);
}

console.log(createObjWithoutProto())
