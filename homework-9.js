import { comments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num > 5);
console.log(filteredNumbers);

const drinks = ['вода', 'сок', 'кола', 'чай', 'кофе'];
const searchDrink = "чай";
const hasDrink = drinks.includes(searchDrink);
console.log(`Есть ли напиток "${searchDrink}" в меню?`, hasDrink);

function reserveArray(arr) {
  return arr.reverse();
}
reserveArray(filteredNumbers);

console.log("Перевернутый список чисел:", filteredNumbers);

reserveArray(drinks);
console.log("Перевернутый список напитков:", drinks);

const filteredComments = comments.filter(comment => comment.email.includes('.com'));
console.log(filteredComments);

const updatedPostIds = comments.map(comment => ({
  ...comment,
  postId: comment.postId <= 5 ? 2 : 1
}));
console.log(updatedPostIds);

const simplifiedComments = comments.map(comment => {
  return {
  id: comment.id,
  name: comment.name
  };
});
console.log(simplifiedComments);

const validatedComments = comments.map(comment => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180 ? true : false
  };
});
console.log(validatedComments); 

const emailsReduce = validatedComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailsReduce);

const emailsMap = validatedComments.map(comment => comment.email);
console.log(emailsMap);

const emailsStringJoin = emailsMap.join(', ');
console.log(emailsStringJoin);

const emailsStringTS = emailsMap.toString();
console.log(emailsStringTS);