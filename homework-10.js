import { productCard } from './product-card.js';

const productObj = productCard.reduce((acc, item) => {
  const name = item['product name'];
  acc[name] = item.compound;
  return acc;
}
  );
console.log(productObj);


  const userInput = prompt('Введите количество карточек товаров (от 1 до 5)');
  const count = parseInt(userInput, 10);

  if (isNaN(count) || count < 1 || count > 5) {
    alert('Ошибка ввода! Пожалуйста, введите число от 1 до 5.');
  }

  else {
    const container = document.querySelector('.product-list');
    const template = document.getElementById('product-card-template');

    if (container && template) {
      const selectedProducts = template.content.cloneCode(true);

      cardClone.querySelector('product-card__title').textContent = product['product name'];
      cardClone.querySelector('product-card__description').textContent = product.compound;
      cardClone.querySelector('product-card__rating').textContent = `Рейтинг: ${product.rating}`;
      cardClone.querySelector('product-card__price').textContent = `Цена: ${product.price} руб.`;
      container.appendChild(cardClone);
    }
  }


