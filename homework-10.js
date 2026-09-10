import { productCard } from './product-card.js';

const productObj = productCard.reduce((acc, item) => {
  const name = item['product name'];
  acc[name] = item.compound;
  return acc;
}, {});
  
console.log(productObj);

while (true) {
  const userInput = prompt('Введите количество карточек товаров (от 1 до 5)');
  const count = Number(userInput, 10);

  if (Number.isInteger(count) && (count >= 1 && count <= 5)) {
    break;
  }
  
    alert('Ошибка ввода! Пожалуйста, введите число от 1 до 5.');
  }

    const container = document.querySelector('.product-list');
    const template = document.getElementById('product-card-template');

    if (container && template) {
      const productsToRender = productCard.slice(0, count);

      productsToRender.forEach((product) => {
        const cardClone = template.content.cloneNode(true);

      cardClone.querySelector('.card__title').textContent = product['product name'];
      cardClone.querySelector('.card__description').textContent = product.compound;
      cardClone.querySelector('.card__rating').textContent = `Рейтинг: ${product.rating}`;
      cardClone.querySelector('.card__price').textContent = `Цена: ${product.price} руб.`;
      container.appendChild(cardClone);
    });
  }


