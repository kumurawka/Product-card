//задание 1
const user = {
  name: 'Harry',
  age: 45,
  city: 'London'
};

//задание 2
const product = {
  name: "cup",
  price: 25,
  isAvailable: true
};

//задание 3,4,6,7
const user2 = {
  name: "Amina",
  age: 20,
  city: "Astana",
  isStudent: 'true',
  country: "Kazakhstan"
};
console.log(user2)
console.log(user2.age)
console.log(user2.isStudent)
console.log(user2.country)

//задание 5
user2.age = 21;
console.log(user2.age)

//задание 8
const product2 = {
  name: 'phone',
  price: 300000,
  color: 'black'
};
console.log(product2)

//задание 9
product2.price = 250000
console.log(product2.price)

//задание 10
delete product2.color
console.log(product2)

//задание 11
const student = {
  name: 'Dana',
  score: 80
};
if (student.score >= 60) {
  console.log("Зачёт");
} else {
  console.log("Не зачёт");
};

//задание 12
const user1 = {
  name: 'Aruzhan',
  age: 17
};
if (user1 >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
};

//задание 13
const book = {
  title: "Romeo and juliet",
  author: "William Shakespeare",
  pages: 120,
};
console.log(book.title)
console.log(book.author)
console.log(book.pages)

//задание 14
const car = {
  brand: "Toyota",
  color: 'white',
  year: 2020
};
console.log(car)

car.year = 2022
console.log(car.year)

//задание 15
const Vegetables = ["Cucumber", "Pepper", "Cabbage"];

//задание 16
const numbers = [10, 20, 30];

//задание 17
const fruits1 = ['apple', 'banana', 'orange'];
console.log(fruits1[0])

//задание 18
console.log(fruits1[1])

//задание 19
console.log(fruits1[2])
console.log(fruits1.length)

//задание 20
//green

//задание 21
//3

//задание 22, 23, 24, 25, 26
const animals = ['cat', 'dog', 'rabbit'];
console.log(animals)
animals[1] = 'fox';
animals.push('horse');
console.log(animals)
animals.pop();
console.log(animals)
animals.unshift('lion');
console.log(animals)
animals.shift()
console.log(animals)

//задание 27
const users = [
  { name: "Amina", age: 20 },
  { name: "Dana", age: 25 },
  { name: "Anna", age: 21 },
];

//задание 28
console.log(users[0].name)

//задание 29
console.log(users[1].age)

//задание 30
const products = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 },
  { name: 'Tablet', price: 200000 }
];
console.log(products[2].name)

//задание 31
console.log(products[1].price)

//задание 32
products[0].price = 250000
console.log(products[0].price)

//задание 33
const fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => {
  console.log(fruit);
});

//задание 34
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(number => {
  console.log(number);
});

//задание 35
const names = ['Amina', 'Dana', 'Aruzhan'];
names.forEach(name => {
  console.log(`Привет: ${name}`);
});

//задание 36
const numbers2 = [2, 4, 6];
numbers2.forEach(number => {
  console.log(number * 2);
});

//задание 37
const colors = ['red', 'green', 'blue'];
colors.forEach((color, index) => {
  console.log(`${index} место: ${color}`);
});

//задание 38
const numbers3 = [10, 20, 30, 40];
numbers3.forEach((number, index) => {
  if (index < 2) {
    console.log(`${number}`);
  }
});

//задание 39
const products1 = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 },
  { name: 'Mouse', price: 15000 }
];
products1.forEach(product => {
  console.log(product.name);
});

//задание 40
console.log(products1[0])

//задание 41
const numbers4 = [1, 5, 10, 15, 20];
numbers4.forEach(number => {
  if (number > 10) {
    console.log(number)
  }
});

//задание 42
const ages = [15, 18, 20, 16, 30];
ages.forEach(age => {
  if (age >= 18) {
    console.log('Совершеннолетний');
  } else {
    console.log('Несовершеннолетний');
  }
});

//задание 43
const products2 = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 },
  { name: 'Mouse', price: 15000 }
];
products2.forEach(product => {
  if (product.price >= 100000) {
    console.log(product.name)
  }
});

//задание 44
const cards = ['card1', 'card2', 'card3', 'card4'];
cards.forEach((card, index) => {
  if (index < 2) {
    console.log('Первая группа')
  } else {
    console.log('Вторая группа')
  }
});

//задание 45
function sayHello() {
  console.log('Hello');
};
sayHello();

//задание 46
function showName(name) {
  console.log(`${name}`)
};
showName('Harry')

//задание 47
function sum(a, b) {
  console.log(a + b)
};
sum(5, 9)

//задание 48
function multiply(a, b) {
  return a * b;
}
const result = multiply(345, 265);
console.log(result);

//задание 49
function checkAge(age) {
  if (age >= 18) {
    console.log('Можно войти')
  } else {
    console.log('Нельзя войти')
  }
};
checkAge(68)

//задание 50
function greet(name) {
  console.log(`Привет, ${name}`);
}
greet('Anna')
greet('Poll')
greet('Karina')

//задание 51, 52
const numbers5 = [1, 2, 3];
function showNumber(number) {
  console.log(`Число ${number}`);
};
numbers5.forEach(showNumber);

//задание 53
const names1 = ['Amina', 'Dana', 'Aruzhan'];
function greet1(name) {
  console.log(`Привет, ${name}`)
};
names1.forEach(greet1)

/*задание 54
В 1-м мы вызвали саму функцию, а во 2-м ошибка*/

//задание 55
const title = document.getElementById('title');

//задание 56
const button = document.getElementById('button');

//задание 57
const text = document.querySelector('.text');

//задание 58
const cards1 = document.querySelector('.card');

//задание 59
const cards2 = document.querySelectorAll('.card');

//задание 60
const text1 = document.getElementsByClassName('text');

//задание 61
const title1 = document.querySelector('#title');

//задание 62
const button1 = document.querySelector('button');

//задание 63
const title2 = document.getElementById('main-title');
const title3 = document.querySelector('#main-title');

/*задание 64
getElementById - ищет только id
querySelector - ищет всё Class, id, тег */

//задание 65
//1 карточку

//задание 66
//querySelectorAll

/*задание 67
querySelector - ищет первое совпадение
querySelectorAll - ищет все совподения*/

/*задание 68
все три div*/

//задание 69
const cards3 = document.querySelectorAll('.card');
cards3.forEach((card) => {
  console.log(card);
});

/*задание 70
const cards3 = document.querySelectorAll('.card');
cards3.forEach((card) => {
  console.log(card.textContent);
});*/

/*задание 71
const cards3 = document.querySelectorAll('.card');
cards3.forEach((card) => {
  card.classList.add('active');
});*/

//задание 72
const cards4 = [1, 2, 3, 4, 5];
cards4.forEach((card, index) => {
  if(index < 2) {
    console.log(`${card} first`);
  } else {
    console.log(`${card} second`);
}});

//задание 73
const cards5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
cards5.forEach((card, index) => {
  if(index <= 4) {
    console.log(`${card} first`);
  } else {
    console.log(`${card} second`);
}});

//задание 74
//Пропущена запятая после имени

//задание 75
//undefined потому что фрукта всего 3, т.е. в консоли было бы 2, а в консоли задали 4

//задание 76
//undefined потому что города не задали

//задание 77
//в консоли множ. число

//задание 78
//нужно написать querySelectorAll, иначе теряется смысл forEach

//задание 79
//добавить querySelectorAll

//задание 80
//убрать # или искать через метод querySelector

//задание 81
//нужно поставить точку в скобках

//задание 82
//ошибки нет. здесь мы перебираем все карточки и сортируем на first и second
//карточки с номером 0, 1, 2 будут first, а остальные second

//задание 83
const products3 = [
  {name:'Phone'},
  {name:'Laptop'},
  {name:'Tablet'},
  {name:'Mouse'}
];
products3.forEach((product, index) => {
  console.log(product.name);
  if(index < 2) {
    product.className = ('product-first');
  } else {
    product.className = ('product-second');
  }
});
console.log(products3);
//я плохо пишу код и не совсем понимаю как и куда, но написанный уже код 
//могу разобрать. в итоге я могу рассказать, но не сделать. здесь в задании я создала 
//массив с товарами, дальше перебрала его(forEach) и отсортировала (if, else)

//задание 84
const products4 = [
  {name:'Phone', price: 300000},
  {name:'Laptop', price: 500000},
  {name:'Mouse', price: 15000}
];
products4.forEach(product => {
if(product.price >= 100000) {
  console.log('Дорогой товар');
} else {
  console.log('Бюджетный товар')
}});

