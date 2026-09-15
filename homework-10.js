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

    const count = 5;
    if (container && template) {
      const productsToRender = productCard.slice(0, count);

      productsToRender.forEach((product) => {
        const cardClone = template.content.cloneNode(true);

      cardClone.querySelector('.card__title').textContent = product['product name'];
      cardClone.querySelector('.card__price-value').textContent = `Цена: ${product.price} руб.`;
      cardClone.querySelector('.card__rating').textContent = `Рейтинг: ${product.rating}`;

      if (product.image) {
        cardClone.querySelector('.card__image').src = product.image;
      }
      
      const buyButton = cardClone.querySelector('.card__buy');
      buyButton.textContent = 'Купить';
      if (product.buttonColor) {
        buyButton.style.backgroundColor = product.buttonColor;
      }

      const starList = cardClone.querySelector('.card__stars-list');
      if (starList) {
        starList.textContent = '★'.repeat(Math.floor(product.rating));
      }

      const compositionList = cardClone.querySelector('.card__composition-list');
      if (compositionList) {
        compositionList.innerHTML = '';
      }

      product.compound.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        compositionList.appendChild(li);
      });
    

      container.appendChild(cardClone);
    });
  }


