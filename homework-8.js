const userProfile = {
  firstName: "Шерлок",
  lastName: "Холмс",
  age: 42,
  email: "sherlock.holmes@gmail.com",
  occupation: "Детектив",
  position: "Консультант по расследованиям",
  country: "Великобритания",
  city: "Лондон",
  residence: "Бейкер-стрит, 221B",
  relationshipStatus: "Женат на рабате",
};

const carDetails = {
  brand: "Лондский кэб",
  model: "Двухколесный экипаж",
  year: 1887,
  color: "Черный",
  transmission: "Лошадиная сила",
};

carDetails.owner = userProfile;

function addMaxSpeed(car) {
  if (!("Максимальная скорость" in car)) {
    car["Максимальная скорость"] = "60 км/ч";
  }
}
addMaxSpeed(carDetails);
console.log("Машина со скоростью:", carDetails);

function printPropertyValue(obj, key) {
  console.log(obj[key]);
}
printPropertyValue(carDetails, "brand");

const products = ["Мясо", "Хлеб", "Молоко", "Овощи", "Фрукты"];
console.log(products);

const books = [
  { title: "Шерлок Холмс: Собака Баскервилей", author: "Артур Конан Дойл", year: 1902, cover: "Твёрдая", genre: "Детектив" },
  { title: "1984", author: "Джордж Оруэлл", year: 1949, cover: "Мягкая", genre: "Антиутопия" },
  { title: "Преступление и наказание", author: "Фёдор Достоевский", year: 1866, cover: "Твёрдая", genre: "Роман" },
  { title: "Война и мир", author: "Лев Толстой", year: 1869, cover: "Твёрдая", genre: "Роман" },
  { title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967, cover: "Мягкая", genre: "Фэнтези роман" },
];

books.push({ title: "Плаха", author: "Чынгыз Айтматов", year: 1986, cover: "Мягкая", genre: "Роман" });

console.log(books);

const chekhovBooks = [
  { title: "Вишнёвый сад", author: "Антон Чехов", year: 1904, cover: "Твёрдая", genre: "Пьеса" },
  { title: "Чайка", author: "Антон Чехов", year: 1896, cover: "Мягкая", genre: "Пьеса" },
  { title: "Три сестры", author: "Антон Чехов", year: 1901, cover: "Твёрдая", genre: "Пьеса" },
];

const allBooks = [...books, ...chekhovBooks];
console.log(allBooks);
function markRareBooks(booksArray) {
  return booksArray.map(book => {
      return {
        ...book,
          israre: book.year < 1900
        };
  });
}

const finalBooksList = markRareBooks(allBooks);
console.log(finalBooksList);